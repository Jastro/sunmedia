import data from "../data/teams.json";

const HOSTNAME = "https://api.collegefootballdata.com";

const buildRequest = (endpoint, config = {}) => {
  return fetch(`${HOSTNAME}${endpoint}`, config);
};

export const getColleges = () => {
  return buildRequest("/teams")
    .then((response) => response.json())
    .catch(() => data);
};
