import { Card } from "../components/Card";
import { Header } from "../components/Header";

import "../styles/profile.scss";

export function Profile() {
  return (
    <div>
      <Header valueHref="/" />
      <main>
        <div className="container">
          <div className="profileRepository">
            <div className="imgProfileRepository">
              <img
                src="https://github.com/Hildebrando-Viana-Matos.png"
                alt="Profile Hildebrando Viana Matos profile from GitHub"
              />
              <div className="textProfile">
                <h1>Hildebrando-Viana-Matos/letmeask</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  quidem, eum, quam laboriosam debitis
                </p>
              </div>
            </div>
            <div className="infoRepository">
              <div className="info">
                <h2>123</h2>
                <span>Stars</span>
              </div>
              <div className="info">
                <h2>123</h2>
                <span>Forks</span>
              </div>
              <div className="info">
                <h2>123</h2>
                <span>Issues abertas</span>
              </div>
            </div>
          </div>
          <Card
            repository={{
              uid: "ASONAOIBNOFNnoisadnao",
              name: "hildebrando-viana-matos/letmeask",
              description:
                "This is a super project that I've made on NLW bootcamp",
            }}
          />
        </div>
      </main>
    </div>
  );
}
