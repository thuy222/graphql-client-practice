import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";

function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);
  console.log(data);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <img src={data.character.image} alt="" />
      <div>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div>
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - {episode.episode}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Character;
