import React from "react";

import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
} from "./styles";

interface ProfileUser {
  user: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const Header: React.FC<ProfileUser> = (props) => {
  return (
    <Container>
      <Flex>
        <Avatar src={props.avatarUrl} />
        <div>
          <h1>{props.name}</h1>
          <h2>{props.user}</h2>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <b>{props.followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{props.following}</b>
          <span>following</span>
        </li>
      </Row>
      <Column>
        {props.company && (
          <li>
            <CompanyIcon />
            <span>{props.company}</span>
          </li>
        )}
        {props.location && (
          <li>
            <LocationIcon />
            <span>{props.location}</span>
          </li>
        )}
        {props.email && (
          <li>
            <EmailIcon />
            <span>{props.email}</span>
          </li>
        )}
        {props.blog && (
          <li>
            <BlogIcon />
            <span>{props.blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default Header;
