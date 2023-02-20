import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const Capsule = ({ data, setIsVisible }) => {
  // The Capsule component takes in two props:
  // - data: an object with information about a capsule
  // - setIsVisible: a function to set the visibility of the component
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <div className="bg-pink-900 text-white rounded-lg shadow-lg overflow-hidden w-[300px] h-[500px] sm:w-[500px] sm:h-[550px] ">
        <div className="px-6 py-4">
          <div className="relative">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Capsule Information
            </h2>
            <AiOutlineClose
              onClick={() => setIsVisible(false)}
              size="1.2rem"
              className="absolute right-1 top-1"
            ></AiOutlineClose>
          </div>
          <table className="table-fixed w-full">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="w-1/3 py-2 px-4 font-semibold text-gray-500">
                  Capsule Serial
                </td>
                <td className="w-2/3 py-2 px-4">{data.capsule_serial}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-1/3 py-2 px-4 font-semibold text-gray-500">
                  Capsule ID
                </td>
                <td className="w-2/3 py-2 px-4">{data.capsule_id}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-1/3 py-2 px-4 font-semibold text-gray-500">
                  Status
                </td>
                <td className="w-2/3 py-2 px-4">{data.status}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-1/3 py-2 px-4 font-semibold text-gray-500">
                  Original Launch
                </td>
                <td className="w-2/3 py-2 px-4">{data.original_launch}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-1/3 py-2 px-4 font-semibold text-gray-500">
                  Original Launch Unix
                </td>
                <td className="w-2/3 py-2 px-4">{data.original_launch_unix}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-1/3 py-2 px-4 font-semibold text-gray-500">
                  Missions
                </td>
                <td className="w-2/3 py-2 px-4">
                  <ul>
                    {data.missions.map((mission) => (
                      <li key={mission.name}>
                        {mission.name} (Flight {mission.flight})
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-1/3 py-2 px-4 font-semibold text-gray-500">
                  Landings
                </td>
                <td className="w-2/3 py-2 px-4">{data.landings}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-1/3 py-2 px-4 font-semibold text-gray-500">
                  Type
                </td>
                <td className="w-2/3 py-2 px-4">{data.type}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-1/3 py-2 px-4 font-semibold text-gray-500">
                  Details
                </td>
                <td className="w-2/3 py-2 px-4">{data.details}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-1/3 py-2 px-4 font-semibold text-gray-500">
                  Reuse Count
                </td>
                <td className="w-2/3 py-2 px-4">{data.reuse_count}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
