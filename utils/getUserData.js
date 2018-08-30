//UserName & Avatar_Url//
import React from "react";
import ReactDOM from "react-dom";

const URL = "https://api.github.com";
const getUser = username => {
  const URL = `${BASE_URL}/users/${username}`;
  return fetch(URL) // eslint-disable-line no-undef
    .then(res => {
      if (res.status !== 200) {
        throw new Error("Non-200 API response");
      }
      return res.json();
    });
};

export default getUser;
