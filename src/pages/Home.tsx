import { FormEvent, useState } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

import { Octokit } from "@octokit/core";

import "../styles/home.scss";

type RepositoryData = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
  };
};

export function Home() {
  const [repository, setRepository] = useState("");
  const [data, setData] = useState<RepositoryData[]>([]);

  async function handleSearchRepository(event: FormEvent) {
    event.preventDefault();
    const octokit = new Octokit({
      auth: `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`,
    });

    const response = await octokit.request("GET /search/repositories", {
      q: "letmeask",
    });
    const data1 = response.data.items as RepositoryData[];

    setData(data1);
  }

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <div className="search">
            <h1>Explore repositórios no Github.</h1>
            <form onSubmit={handleSearchRepository}>
              <input
                type="search"
                name="searchRepository"
                id="searchRepository"
                placeholder="Digite aqui"
              />
              <button type="submit">Pesquisar</button>
            </form>
          </div>
          {data.map((repository) => {
            return (
              <Card
                key={repository.id}
                avatar={repository.owner.avatar_url}
                name={repository.owner.login}
                repository={{
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
