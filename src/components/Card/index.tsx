import { FiChevronRight } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./styles.scss";

type CardProps = {
  avatar?: string;
  name: string;
  repository: {
    node_id: string;
    full_name: string;
    name: string;
    description: string;
    url: string;
  };
};

export function Card(props: CardProps) {
  return (
    <div className="card">
      <div className="profile">
        {props.avatar && (
          <img
            src={props.avatar}
            alt={`Foto de perfil de ${props.avatar} no GitHub`}
          />
        )}
        <div className="contentOfProfile">
          <h2>{props.repository.full_name}</h2>
          <p>{props.repository.description}</p>
        </div>
      </div>
      <Link to={props.repository.url}>
        <FiChevronRight />
      </Link>
    </div>
  );
}
