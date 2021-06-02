import { useState, useEffect } from "react";

function Card(props) {
  return (
    <div className="card">
      <h4>{props.characters.name}</h4>
      <p>Height:{props.characters.height}</p>
      <p>Birth Year:{props.characters.birth_year}</p>
      <p>{props.characters.films.length} Films</p>
    </div>
  );
}

function List() {
  const [listCards, setListCards] = useState([]);
  const [nextUrl, setNextUrl] = useState("");

  useEffect(function () {
    fetch("https://swapi.dev/api/people/")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.results);
        setListCards(data.results);
        setNextUrl(data.next);
      });
  }, []);

  function loadMore() {
    fetch(nextUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setListCards([...listCards, ...data.results]);
        setNextUrl(data.next);
      });
  }

  return (
    <div className="List">
      <div className="card-container">
        {listCards.map(function (characters) {
          return <Card characters={characters}></Card>;
        })}
      </div>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default List;
