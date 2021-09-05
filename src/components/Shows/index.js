import { fetchShows } from "../fetchShows";
import * as Styles from "./styles";

const resource = fetchShows();

const Shows = () => {
  const shows = resource.read();

  return (
    <Styles.Root>
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
                Score: {show.show.rating.average}
              </Styles.Subtitle>
              <Styles.Subtitle>Status: {show.show.status}</Styles.Subtitle>
              <Styles.Subtitle>
                Network: {show.show.network ? show.show.network.name : "N/A"}
              </Styles.Subtitle>
            </Styles.TextWrapper>
          </Styles.ShowWrapper>
        ))}
      </Styles.Container>
    </Styles.Root>
  );
};

export default Shows;
