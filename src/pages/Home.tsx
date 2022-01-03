import { FormEvent, useState } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

import { Octokit } from "@octokit/core";

import "../styles/home.scss";

export function Home() {
  const [repository, setRepository] = useState("");
  const [repositoryResult, setRepositoryResult] = useState({});

  async function handleSearchRepository(event: FormEvent) {
    event.preventDefault();
    const octokit = new Octokit({
      auth: `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`,
    });

    const response = await octokit.request("GET /search/repositories", {
      q: "letmeask",
    });
    console.log(response);
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

          <Card
            avatar={"https://www.github.com/Hildebrando-Viana-Matos.png"}
            name={"Hildebrando Viana Matos"}
            repository={{
              uid: "ASONAOIBNOFNnoisadnao",
              name: "hildebrando-viana-matos/letmeask",
              description:
                "This is a super project that I've made on NLW bootcamp",
            }}
          />
        </div>
      </main>
    </>
  );
}
