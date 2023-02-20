import React, { useState } from "react";
import { GiRocketThruster } from "react-icons/gi";
import { Capsule } from "./Capsule";
/*
This component is used to create GridCard element for every Capsule Object
*/
export const GridCard = ({ capsule }) => {
  // State for controlling the visibility of the Capsule component
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div data-testid="Gridcard_id">
      <div
        onClick={() => setIsVisible(true)} // Set isVisible to true on click
        className="bg-pink-700 border-white text-white flex flex-col w-[250px] gap-4 p-4 shadow-[0px_6px_15px_#ffff] scale-95 hover:scale-100 duration-150 rounded-lg"
      >
        <GiRocketThruster size="2.5rem" className="mx-auto"></GiRocketThruster>
        <h3>{capsule?.capsule_serial}</h3>
        <h3>{capsule?.capsule_id.toUpperCase()}</h3>
      </div>

      {isVisible && <Capsule data={capsule} setIsVisible={setIsVisible} />}
      {/* Only render the Capsule component if isVisible is true */}
    </div>
  );
};
