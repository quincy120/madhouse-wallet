import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const CounterList = ({ data }) => {
  console.log(data, "asdfasd gautam");
  return (
    <>
      <Row className="">
        {data &&
          data.length > 0 &&
          data.map((item, key) => (
            <Col key={key} lg="3" md="4" sm="6" className="my-2">
              <CounterCard className=" p-3 p-lg-4 rounded-4 d-flex align-items-center gap-10">
                <div className="icnWrp flex-shrink-0">{item.icn}</div>
                <div className="content">
                  <h6 className="m-0 text-white">{item.head}</h6>
                  <h2 className="m-0 fw-bold text-white pt-2">{item.value}</h2>
                </div>
              </CounterCard>
            </Col>
          ))}
      </Row>
    </>
  );
};

const CounterCard = styled.div`
  background-color: #101d13;
  border: 1px solid #7aff9b;
`;

export default CounterList;
