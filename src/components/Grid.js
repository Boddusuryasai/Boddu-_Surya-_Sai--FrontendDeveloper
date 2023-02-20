import { GridCard } from "./GridCard";
import { Shimmer } from "./Shimmer";
/*
This component is used to Wrap all the Capsules into Capsules grid of lists
*/
export const Grid = ({ filteredCapsules, isLoading }) => {
  return (
    <div data-testid="Grid_id">
      {/* Wrapper for grid items */}
      <div className="flex flex-row justify-center gap-4 flex-wrap items-center py-10 ">
        {/* Display shimmer animation while data is being loaded */}
        {isLoading ? (
          <Shimmer />
        ) : (
          // Map over the filteredCapsules array and display each capsule as a card
          filteredCapsules &&
          filteredCapsules.map((capsule) => {
            return (
              // Set the capsule_serial as the key for each card
              <div key={capsule.capsule_serial}>
                <GridCard capsule={capsule} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
