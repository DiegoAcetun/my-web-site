import { Link } from "react-router-dom";
import "./css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar bg-dark py-0 my-0">
        <div className="container-fluid py-0 my-0">
          <Link className="" to="/my-web-site">
            <FontAwesomeIcon icon={faHouse} size="2x" />
          </Link>
          <button
            className="navbar-toggler py-0 my-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse py-0 my-0"
            id="navbarNavAltMarkup"
          >
            <div
              className="navbar-nav ms-auto font py-0 my-0"
              style={{ fontSize: "30px" }}
            >
              <Link className="py-0 my-0" to="/projects">
                <button
                  className="navbar-toggler text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  PROYECTOS
                </button>
                <p className="d-none d-lg-inline">PROYECTOS</p>
              </Link>
              <Link className="ms-lg-5" to="/skills">
                <button
                  className="navbar-toggler text-light py-0 my-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  HABILIDADES
                </button>
                <p className="d-none d-lg-inline">HABILIDADES</p>
              </Link>
              <Link className="ms-lg-5" to="/programskills">
                <button
                  className="navbar-toggler text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  DESARROLLO
                </button>
                <p className="d-none d-lg-inline">DESARROLLO</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
