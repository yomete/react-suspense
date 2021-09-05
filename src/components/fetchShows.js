import axios from "axios";

export const fetchShows = () => {
  let status = "pending";
  let result;
  let suspender = axios(`https://api.tvmaze.com/search/shows?q=heist`).then(
    (r) => {
      status = "success";
      result = r.data;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};
