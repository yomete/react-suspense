import axios from "axios";
import { useEffect, useState } from "react";

import * as Styles from "./styles";

const formatScore = (number) => {
  return Math.round(number * 100);
};

const Shows = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios(`https://api.tvmaze.com/search/shows?q=heist`)
      .then((r) => {
        console.log(r);
        setShows(r.data);
        setIsLoaded(true);
      })
      .catch((e) => {
        setIsLoaded(false);
        console.log(e);
      });
  }, []);

  return (
    <Styles.Root>
      {!isLoaded && <p>loading...</p>}
      {isLoaded && (
        <Styles.Container>
          {shows.map((show, index) => (
            <Styles.ShowWrapper key={index}>
              <Styles.ImageWrapper>
                <img
                  src={show.show.image ? show.show.image.original : ""}
                  alt="Show Poster"
                />
              </Styles.ImageWrapper>

              <Styles.TextWrapper>
                <Styles.Title>{show.show.name}</Styles.Title>
                <Styles.Subtitle>
                  Score: {formatScore(show.score)}
                </Styles.Subtitle>
                <Styles.Subtitle>Status: {show.show.status}</Styles.Subtitle>
                <Styles.Subtitle>
                  Network: {show.show.network ? show.show.network.name : "N/A"}
                </Styles.Subtitle>
              </Styles.TextWrapper>
            </Styles.ShowWrapper>
          ))}
        </Styles.Container>
      )}
    </Styles.Root>
  );
};

export default Shows;
