import React from "react";
import useCharacters from "../hooks/useCharacters";
import { Link } from "react-router-dom";

function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default CharactersList;
