import React from "react";
import * as S from "./styled";

const RepositoryItem = ({name, linkToRepo, fullName, languages}) => {
  return (
    <S.Wrapper>
      <h2>{name}</h2>
      <a
        href={linkToRepo}
        rel="noreferrer"
        target="_blank"
      >
        <h4>{fullName}</h4>
      </a>
    </S.Wrapper>
  );
};

export default RepositoryItem;
