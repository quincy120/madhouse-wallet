import React, { useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

// css
import styles from "./Header.module.scss";

// img
// import logo from "../../Assets/images/logo.png";
import user from "../../Assets/images/user.png";
import ConfirmationPop from "../Modals/ConfirmationPop";

const Header = ({ sidebar, setSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [confirmation, setConfirmation] = useState();
  const pageName = location.pathname;
  let lastSlashIndex = pageName.lastIndexOf("/");
  let heading;
  if (lastSlashIndex !== -1) {
    const afterLastSlash = pageName.substring(lastSlashIndex + 1);
    heading = afterLastSlash;
  }
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  const handleConfirmation = () => setConfirmation(!confirmation);

  console.log(heading, "headinggggggg");
  return (
    <>
      <ConfirmationPop
        confirmation={confirmation}
        setConfirmation={setConfirmation}
      />
      <header
        className={`${styles.siteHeader}  siteHeader  sticky-top pt-lg-3 py-1 w-100`}
        style={{ zIndex: 99, background: "#0d1017" }}
      >
        <Container>
          <Navbar expand="lg" className="">
            <Navbar.Brand
              className={`fw-bold text-white`}
              href="#"
              style={{ fontSize: 20 }}
            >
              Madhouse Wallet
            </Navbar.Brand>

            <Navbar.Toggle
              className="border-0 p-0"
              aria-controls="navbarScroll"
            />
            <Navbar.Collapse
              className={` justify-content-end w-100`}
              id="navbarScroll"
            >
              <Nav className=" my-2 my-lg-0 align-items-center justify-content-end w-100 gap-10 flex-wrap">
                <div className="right d-flex align-items-center gap-10 flex-wrap">
                  <Button className="d-flex align-items-center justify-content-center commonBtn">
                    Gnosis Safe Address: 32345234sdfsd23423
                  </Button>
                  <Dropdown className={`${styles.profileDrpdown}`}>
                    <Dropdown.Toggle
                      className={`${styles.profileLink} p-0 border-0 d-flex align-items-center`}
                      variant="transparent"
                      id="dropdown-basic"
                    >
                      <img
                        src={user}
                        style={{ aspectRatio: 1, height: 40, width: 40 }}
                        alt=""
                        className="img-fluid rounded-circle object-fit-cover flex-shrink-0"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={`${styles.menu}`}>
                      <ul className="list-unstyled ps-0 mb-0">
                        <li className="py-1">
                          <Link
                            to="/setting"
                            className="px-3 py-1 d-flex align-items-center gap-10 text-dark fw-sbold"
                          >
                            {" "}
                            Setting
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link
                            to="/login"
                            className="px-3 py-1 d-flex align-items-center gap-10 text-dark fw-sbold"
                          >
                            {" "}
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </>
  );
};

export default Header;
