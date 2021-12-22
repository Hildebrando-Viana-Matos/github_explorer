import { FiChevronRight } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./styles.scss";

type CardProps = {
  profile: {
    avatar: string;
    name: string;
  };
  repository: {
    uid: string;
    name: string;
    description: string;
  };
};

export function Card(props: CardProps) {
  return (
    <div className="card">
      <div className="profile">
        <img
          src={props.profile.avatar}
          alt={`Foto de perfil de ${props.profile.avatar} no GitHub`}
        />
        <div className="contentOfProfile">
          <h2>{props.repository.name}</h2>
          <p>{props.repository.description}</p>
        </div>
      </div>
      <Link to={props.repository.uid}>
        <FiChevronRight />
      </Link>
    </div>
  );
}