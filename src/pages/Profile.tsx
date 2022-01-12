import { Card } from "../components/Card";
import { Header } from "../components/Header";

import { useParams } from "react-router";

import "../styles/profile.scss";
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";

type RepositoryData = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  forks: number;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    login: string;
  };
};

type RepositoriesData = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  owner: {
    login: string;
  };
};

export function Profile() {
  const params = useParams();
  const userName = params.userName;
  const repositoryName = params.repositoryName;
  const [data, setData] = useState<RepositoryData>();
  const [repositoriesData, setRepositoriesData] = useState<RepositoriesData[]>(
    []
  );

  async function getRepository(userName: string, repositoryName: string) {
    if (userName === "" || repositoryName === "") {
      return;
    }
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const response = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: userName,
      repo: repositoryName,
    });
    const dataRepository = response.data as RepositoryData;

    setData(dataRepository);
  }

  async function getUserRepositories(userName: string) {
    if (userName === "") {
      return;
    }
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const response = await octokit.request("GET /users/{username}/repos", {
      username: userName,
    });
    const dataRepository = response.data as RepositoriesData[];
    setRepositoriesData(dataRepository);
  }

  useEffect(() => {
    getRepository(userName as string, repositoryName as string);
    getUserRepositories(userName as string);
  }, []);

  return (
    <>
      <Header valueHref="/" />
      <main>
        <div className="container">
          <div className="profileRepository">
            <div className="imgProfileRepository">
              <img
                src={data?.owner.avatar_url}
                alt={`Foto de ${data?.owner.login} do Github`}
              />
              <div className="textProfile">
                <h1>{data?.full_name}</h1>
                <p>{data?.description}</p>
              </div>
            </div>
            <div className="infoRepository">
              <div className="info">
                <h2>{data?.stargazers_count}</h2>
                <span>Stars</span>
              </div>
              <div className="info">
                <h2>{data?.forks}</h2>
                <span>Forks</span>
              </div>
              <div className="info">
                <h2>{data?.open_issues_count}</h2>
                <span>Issues abertas</span>
              </div>
            </div>
          </div>
          {repositoriesData.map((repository) => {
            return (
              <Card
                key={repository.id}
                name={repository.owner.login}
                repository={{
                  id: repository.id,
                  node_id: repository.node_id,
                  full_name: repository.full_name,
                  name: repository.name,
                  description: repository.description,
                  url: repository.html_url,
                }}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
