import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

// css
import styles from "./Auth.module.scss";

const AuthLayout = () => {
  return (
    <>
      <section
        className={`${styles.authLayout} authLayout position-relative py-3 d-flex align-items-center justify-content-center flex-column`}
        style={{
          zIndex: "9",
          height: "100vh",
        }}
      >
        <Container className="">
          <Row className="justify-content-center">
            <Col md="6" sm="8" className="my-2 py-4 h-100">
              <div
                className={`${styles.formWrpper} formWrpper position-relative px-3 py-5`}
                style={{ maxHeight: "85vh", background: "#1e1e1e" }}
              >
                <Outlet />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AuthLayout;
