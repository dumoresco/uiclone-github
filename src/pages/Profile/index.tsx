import React from "react";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            user={"dumoresco"}
            name={"Eduardo Moresco"}
            avatarUrl={"https://avatars3.githubusercontent.com/u/56046609?v=4"}
            followers={1340}
            following={1}
            company={"usGuri"}
            location={"Porto Alegre - RS"}
            email={"eduardomorescoiost@gmail.com"}
            blog={"linkedin.com/eduardo.moresco"}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  user={"dumoresco"}
                  reponame={"nlw3"}
                  description={"sadadsadasidasdasdas"}
                  language={n % 3 === 0 ? "Javascript" : "Typescript"}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
