import styled from "styled-components";

export const Root = styled.section`
  max-width: 1300px;
  margin: 40px auto;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2px;
`;

export const ShowWrapper = styled.div`
  width: calc(33.333% - 10px);
  margin-right: 10px;
  word-wrap: break-word;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  height: 200px;

  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 40%;

  img {
    object-fit: cover;
    height: 200px;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 60%;
  padding: 20px;
  text-align: left;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 5px;
  margin-top: 0;
`;
export const Subtitle = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;
