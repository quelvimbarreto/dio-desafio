import styled from "styled-components";

export const WrapperPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #2d333b;
  padding: 0.5rem;
  margin-top: 0.625rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #cdd9e5;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 0.5rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: bold;
    color: #636e7b;
  }

  h4 {
    font-size: 1rem;
    font-weight: bold;
    color: #636e7b;
  }

  @media screen and (max-width: 30rem) {
    max-width: 100%;

    h1 {
      font-size: 1.125rem;
      font-weight: bold;
    }

    h3 {
      font-size: 0.875rem;
      font-weight: bold;
    }

    h4 {
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  h3 {
    margin-right: 0.5rem;
  }

  a {
    font-size: 1.125rem;
    color: #539bf5;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-top: 16px;
  border: 0.0625rem solid #cdd9e5;
  background-color: black;

  h4 {
    font-size: 1rem;
    font-weight: bold;
    color: #636e7b;
  }

  div {
    margin: 0.5rem;
    text-align: center;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 12.5rem;
  margin: 0.5rem;

  @media screen and (max-width: 30rem) {
    max-width: 25%;
  }
`;
