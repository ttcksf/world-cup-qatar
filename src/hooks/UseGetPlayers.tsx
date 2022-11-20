import axios from "axios";
import React, { useState } from "react";
import { Player } from "../types/api/Player";

const UseGetPlayers = () => {
  const [player, setPlayer] = useState<Array<Player>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/timezone",
    headers: {
      "X-RapidAPI-Key": process.env.React_APP_RapidApiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return <div></div>;
};

export default UseGetPlayers;
