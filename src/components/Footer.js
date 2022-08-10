import "./css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faRectangleList } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container-fluid text-light">
        <div className="row justify-content-center">
          <div className="col-sm-4 text-center border border-primary py-2">
            <p className="h5">PROYECTOS</p>
            <a
              href="https://github.com/DiegoAcetun/"
              className="text-light"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="4x" />
            </a>
          </div>

          <div className="col-sm-8 d-flex justify-content-center border border-primary py-2">
            <div className="row" style={{ width: "100%" }}>
              <p className="h5 text-center">CONTACTO</p>
              <div className="row">
                <div className="col-6 text-center">
                  <a
                    href="https://t.me/DiegoAcetun"
                    className="text-light"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTelegram}
                      size="4x"
                      
                    />
                  </a>
                </div>

                <div className="col-6 text-center">
                  <a
                    href="https://forms.gle/vqpQtMYyBgaigGn77"
                    className="text-light"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faRectangleList} size="4x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
