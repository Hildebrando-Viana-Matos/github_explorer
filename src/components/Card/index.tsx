import { FiChevronRight } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./styles.scss";

type CardProps = {
  avatar?: string;
  name: string;
  repository: {
    id: number;
    node_id: string;
    full_name: string;
    name: string;
    description: string;
    url: string;
  };
  goToGithub?: boolean;
};

export function Card(props: CardProps) {
  return (
    <div className="card">
      <div className="profile">
        {props.avatar && (
          <img
            src={props.avatar}
            alt={`Foto de perfil de ${props.name} no GitHub`}
          />
        )}
        <div className="contentOfProfile">
          <a href={props.repository.url} target="_blank">
            <h2>{props.repository.full_name}</h2>
          </a>
          <p>{props.repository.description}</p>
        </div>
      </div>
      {props.goToGithub ? (
        <a href={props.repository.url} target="_blank">
          <FiChevronRight />
        </a>
      ) : (
        <Link to={`/${props.name}&${props.repository.name}`}>
          <FiChevronRight />
        </Link>
      )}
    </div>
  );
}
