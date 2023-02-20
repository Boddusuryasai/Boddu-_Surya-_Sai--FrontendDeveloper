import React, { useState, useEffect } from "react";
import { Grid } from "./Grid";
import { Pagination } from "./Pagination";
import { FilterForm } from "./FilterForm";

export const Main = () => {
  // Set up state for the capsules data
  const [capsules, setCapsules] = useState([]);
  // Set up state for the filtered capsules data
  const [filteredCapsules, setFilteredCapsules] = useState([]);
  // Set up state to track whether data is being loaded
  const [isLoading, setIsloading] = useState(true);

  // Fetch the capsule data from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost/server/index.php")
      .then((res) => res.json())
      .then((data) => {
        // Update state with the fetched data
        setCapsules(JSON.parse(data));
        // Update state with the first 10 capsules as the initial set of filtered capsules
        setFilteredCapsules(JSON.parse(data).slice(0, 10));
        // Set loading state to false, since data has been fetched and processed
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Update the filtered capsules when the user changes the page
  const pageHandler = (pageNumber) => {
    // Use the page number to slice the appropriate set of capsules
    setFilteredCapsules(capsules.slice(pageNumber * 10 - 10, pageNumber * 10));
  };

  // Update the filtered capsules based on the filter form inputs
  const handleFilter = (e, status, launchDate, capsuleType) => {
    e.preventDefault();
    let filteredData = capsules;

    // Filter by status if the user selected a value other than "all"
    if (status !== "all") {
      filteredData = filteredData.filter((rocket) => rocket.status === status);
    }

    // Filter by launch date if the user selected a value other than "all"
    if (launchDate !== "all") {
      filteredData = filteredData.filter(
        (rocket) => rocket.original_launch === launchDate
      );
    }

    // Filter by capsule type if the user selected a value other than "all"
    if (capsuleType !== "all") {
      filteredData = filteredData.filter(
        (rocket) => rocket.type === capsuleType
      );
    }

    // Update the filtered capsules with the filtered data
    setFilteredCapsules(filteredData.slice(0, 10));
  };

  // Render the filter form, grid, and pagination components
  return (
    <div data-testid="Main-id">
      <FilterForm handleFilter={handleFilter} capsules={capsules} />
      <Grid filteredCapsules={filteredCapsules} isLoading={isLoading} />
      <Pagination data={capsules} pageHandler={pageHandler} />
    </div>
  );
};
