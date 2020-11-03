import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Topside,
  RepoIcon,
  Bottomside,
  StarsIcon,
  ForksIcon,
} from "./styles";

interface RepoCardProps {
  user: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<RepoCardProps> = (props) => {
  const languageClass = props.language ? props.language.toLowerCase() : "other";
  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${props.user}/${props.reponame}`}>{props.reponame}</Link>
        </header>
        <p>{props.description}</p>
      </Topside>
      <Bottomside>
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{props.language}</span>
          </li>
          <li>
            <StarsIcon />
            <span>{props.stars}</span>
          </li>
          <li>
            <ForksIcon />
            <span>{props.forks}</span>
          </li>
        </ul>
      </Bottomside>
    </Container>
  );
};

export default RepoCard;
