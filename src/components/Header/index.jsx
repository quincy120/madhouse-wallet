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
import Switch from "react-switch";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

// css
import styles from "./Header.module.scss";

// img
// import logo from "../../Assets/images/logo.png";
import user from "../../Assets/images/user.png";
import ConfirmationPop from "../Modals/ConfirmationPop";
import { useTheme } from "../../ContextApi/ThemeContext";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";

const Header = ({ sidebar, setSidebar }) => {
  const { theme, toggleTheme } = useTheme();

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

  const isChecked = theme === "light";

  return (
    <>
      <ConfirmationPop
        confirmation={confirmation}
        setConfirmation={setConfirmation}
      />
      <header
        className={`${styles.siteHeader}  siteHeader  sticky-top pt-lg-3 py-1 w-100 shadow`}
        style={{ zIndex: 99, background: "var(--backgroundColor)" }}
      >
        <Container>
          <Navbar expand="lg" className="">
            <Navbar.Brand
              className={`fw-bold`}
              href="#"
              style={{ fontSize: 20, color: "var(--textColor)" }}
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
                  <Tooltip
                    id="theme"
                    style={{ backgroundColor: "#76fc93", color: "#000" }}
                  />
                  <div
                    className=""
                    data-tooltip-id="theme"
                    data-tooltip-content={
                      !isChecked ? "Dark Theme" : "Light Theme"
                    }
                  >
                    <GradientHandleSwitch
                      uncheckedIcon=""
                      checkedIcon=""
                      height={16}
                      width={48}
                      handleDiameter={24}
                      offColor="#4C4C57"
                      onColor="#4C4C57"
                      checked={isChecked} // Toggle the switch based on theme
                      onChange={toggleTheme}
                      boxShadow="0px 0px 0px 0px"
                      activeBoxShadow="0px 0px 0px 0px"
                    />
                  </div>
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

const GradientHandleSwitch = styled(Switch)`
  .react-switch-handle {
    background: linear-gradient(180deg, #76fc93 0%, #1f854f 100%) !important;
  }
`;

export default Header;
