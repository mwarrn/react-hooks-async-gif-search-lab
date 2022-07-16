import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  // Complete - Create state to store the first three elements from our fetch
  const [gifs, setGifs] = useState([]);
  const [userSearch, setUserSearch] = useState("dolphin")

  // Complete - Fetch the data
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=8qSN1uEKeXDqtG7F6Wf6TrZcXHhLXpf9&rating=g`
    )
      .then((resp) => {
        return resp.json();
      })
      .then(({ data }) => {
        console.log(data.slice(0, 3));
        const newData = data.slice(0, 3).map((gif) => {
          return { url: gif.images.original.url };
        });
        setGifs(newData);
      });
  }, [userSearch]);

  // pass the data to

  // Complete - Pass the 3 elements down to the GifList component

  // Complete - Render the GifSearch component
  // Complete - Create a handler function to pass to GifSearch as props
  const onSearchFormSubmit = (userInput) => {
    // Run a fetch using the userInput
    setUserSearch(userInput)
  };

  return (
    <div>
      <GifSearch onSearchFormSubmit={onSearchFormSubmit} />
      <GifList theGifs={gifs} />
    </div>
  );
}
export default GifListContainer;

// const props = {}

// When we created the prop for our GifSearch component, we actually are doing the following:
// const props = {onSearchSumbit: () => { console.log("running on search function")}}