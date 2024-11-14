import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

// css
import styles from "./SetCommissionPop.module.scss";

// img

const SetCommissionPop = ({ newCommission, setNewCommission }) => {
  const handleCommission = () => setNewCommission(!newCommission);

  return (
    <>
      <Modal
        show={newCommission}
        className={`${styles.SetCommissionPop}  SetCommissionPop`}
        onHide={handleCommission}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body className={`${styles.modalBody} position-relative rounded`}>
          <Button
            onClick={handleCommission}
            className="border-0 p-0 position-absolute"
            variant="transparent"
            style={{ right: 10, top: 0 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 16 15"
              fill="none"
            >
              <g clip-path="url(#clip0_0_6282)">
                <path
                  d="M1.98638 14.906C1.61862 14.9274 1.25695 14.8052 0.97762 14.565C0.426731 14.0109 0.426731 13.1159 0.97762 12.5617L13.0403 0.498994C13.6133 -0.0371562 14.5123 -0.00735193 15.0485 0.565621C15.5333 1.08376 15.5616 1.88015 15.1147 2.43132L2.98092 14.565C2.70519 14.8017 2.34932 14.9237 1.98638 14.906Z"
                  fill="white"
                />
                <path
                  d="M14.0347 14.9061C13.662 14.9045 13.3047 14.7565 13.0401 14.4941L0.977383 2.4313C0.467013 1.83531 0.536401 0.938371 1.13239 0.427954C1.66433 -0.0275797 2.44884 -0.0275797 2.98073 0.427954L15.1145 12.4907C15.6873 13.027 15.7169 13.9261 15.1806 14.4989C15.1593 14.5217 15.1372 14.5437 15.1145 14.5651C14.8174 14.8234 14.4263 14.9469 14.0347 14.9061Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_6282">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(0.564453)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Button>
          <div className=" text-center mx-auto text-white">
            <ul className="list-unstyled ps-0 mb-0">
              <li className="py-2 d-flex align-items-center gap-10 justify-content-center">
                <p className="m-0">Commission:</p>
                <p className="m-0 fw-bold">10%</p>
              </li>
              <li className="py-2 d-flex align-items-center gap-10 justify-content-center">
                <p className="m-0" style={{ whiteSpace: "nowrap " }}>
                  New Commission:
                </p>
                <div className="iconWithText position-relative">
                  <span
                    style={{ right: 10 }}
                    className="icn position-absolute fw-sbold text-muted"
                  >
                    %
                  </span>
                  <input type="text" className="form-control" />
                </div>
              </li>
              <li className="py-2 d-flex align-items-center gap-10 justify-content-center">
                <Button
                  onClick={handleCommission}
                  style={{
                    height: 40,
                    fontSize: 12,
                  }}
                  className="d-flex align-items-center justify-content-center commonBtn GreyBtn mt-4"
                >
                  Submit
                </Button>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SetCommissionPop;
