import { Link } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";

import "./styles.scss";

import logoImg from "../../assets/logo.svg";

type HeaderProps = {
  valueHref?: string;
};

export function Header({ valueHref }: HeaderProps) {
  return (
    <header>
      <div className="container">
        <img src={logoImg} alt="Logo Github Explorer" />
        {valueHref && (
          <Link to={valueHref}>
            <FiChevronLeft /> Voltar
          </Link>
        )}
      </div>
    </header>
  );
}
