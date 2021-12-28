import { Card } from "../components/Card";
import { Header } from "../components/Header";

import "../styles/home.scss";

export function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <div className="search">
            <h1>Explore repositórios no Github.</h1>
            <form>
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
