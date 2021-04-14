import React, { useState, useEffect } from "react";

export const List = (props) => {
  // const fetchData = ([count, setCount] = useState(0));

  // 1. Create a place to store our data
  // name of the state --> people, function to update the state --> setPeople, initial value --> []
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // This is for Javascript:
        // document.getElementById("count").innerText = JSON.stringify(data);
        // For react:
        setPeople(data.results);
      });
  }, []);

  console.log(people, "people");

  return (
    <div>
      <h1>Star wars catalog</h1>
      <div id="card-container">
        {people.map(function (element) {
          return (
            <div className="card">
              <h1>{element.name}</h1>
              <p>{element.height}</p>
            </div>
          );
        })}
      </div>

      <div id="load-container">
        <button id="loadmore">Load More...</button>
      </div>
    </div>
  );
};
