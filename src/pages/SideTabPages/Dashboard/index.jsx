import React, { useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CounterCard, CstmPagination } from "../../../components/Common/Common";
import { Link } from "react-router-dom";

// css
import AreaChart from "../../../components/Graph/AreaChart";
import PieChart from "../../../components/Graph/PieChart";
import { PieDonutChart } from "../../../components/Graph/PieDonutChart";
import TableLayout from "../../../components/TableLayout";

// img
import p1 from "../../../Assets/images/user.png";
import Aerodrome from "../../../Assets/images/Aerodrome.png";
import BUSD from "../../../Assets/images/BUSD.png";
import Velodrome from "../../../Assets/images/Velodrome.png";
import CounterList from "../../../components/CounterList";
import { CardCstm, GreyBtn } from "./DashboardStyled";
import Slider from "react-slick";
import BTCAddressPop from "../../../components/Modals/BtcAddressPop";
import NFTSlider from "./NFTSlider";
const Dashboard = () => {
  const cardData = [
    { head: "Total Deposit", value: "$234234", icn: icn1 },
    { head: "Earned", value: "$234234", icn: icn2 },
    { head: "Daily Rewards", value: "$234234", icn: icn3 },
    { head: "APR", value: "$234234", icn: icn1 },
    { head: "Total Deposit", value: "$234234", icn: icn1 },
    { head: "Earned", value: "$234234", icn: icn2 },
    { head: "Daily Rewards", value: "$234234", icn: icn3 },
    { head: "APR", value: "$234234", icn: icn1 },
  ];
  const BtcCard = [
    {
      icn: Velodrome,
      btcHead: "BTC ==> OP Bridge & Yield Farm",
      cardTitle: "Velodrome Finance",
      cardDescp:
        " Velodrome Finance is a next-generation AMM that combines the best of curve. Convex and Uniswa...",
      btns: ["Delfi", "Governance", "Yield"],
      list: [
        "Deposit BTC into Madhouse Wallet",
        "Deposit BTC into Madhouse Coverage",
        "Withdraw BTC from Madhouse Coverage",
      ],
    },
    {
      icn: Aerodrome,
      btcHead: "BTC ==> Base Bridge & Yield Farm",
      cardTitle: "Aerodrome Finance",
      cardDescp:
        " Aerodrome Finance is a next-generation AMM that combines the best of curve. Convex and Uniswa...",
      btns: ["Delfi", "Governance", "Yield"],
      list: [
        "Deposit BTC into Madhouse Wallet",
        "Deposit BTC into Madhouse Coverage",
        "Withdraw BTC from Madhouse Coverage",
      ],
    },
    {
      icn: BUSD,
      btcHead: "BTC ==> Borrow USD",
      cardTitle: "Threshold USD",
      cardDescp:
        "Threshold USD (thUSD) is a stablecoin soft-pegged against USD and backed by ETH and tBTC",
      btns: ["Stablecoin"],
      list: [
        "Deposit BTC into Madhouse Wallet",
        "Borrow and Redeem USD/Buy Coverage",
        "Withdraw BTC from Madhouse Coverage",
      ],
    },
    {
      icn: Velodrome,
      btcHead: "BTC ==> OP Bridge & Yield Farm",
      cardTitle: "Velodrome Finance",
      cardDescp:
        " Velodrome Finance is a next-generation AMM that combines the best of curve. Convex and Uniswa...",
      btns: ["Delfi", "Governance", "Yield"],
      list: [
        "Deposit BTC into Madhouse Wallet",
        "Deposit BTC into Madhouse Coverage",
        "Withdraw BTC from Madhouse Coverage",
      ],
    },
    {
      icn: Aerodrome,
      btcHead: "BTC ==> Base Bridge & Yield Farm",
      cardTitle: "Aerodrome Finance",
      cardDescp:
        " Aerodrome Finance is a next-generation AMM that combines the best of curve. Convex and Uniswa...",
      btns: ["Delfi", "Governance", "Yield"],
      list: [
        "Deposit BTC into Madhouse Wallet",
        "Deposit BTC into Madhouse Coverage",
        "Withdraw BTC from Madhouse Coverage",
      ],
    },
    {
      icn: BUSD,
      btcHead: "BTC ==> Borrow USD",
      cardTitle: "Threshold USD",
      cardDescp:
        "Threshold USD (thUSD) is a stablecoin soft-pegged against USD and backed by ETH and tBTC",
      btns: ["Stablecoin"],
      list: [
        "Deposit BTC into Madhouse Wallet",
        "Borrow and Redeem USD/Buy Coverage",
        "Withdraw BTC from Madhouse Coverage",
      ],
    },
  ];
  const [showData, setShowData] = useState();
  const [btcAddress, setBtcAddress] = useState();
  var BtcCardSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const handleDataBtc = (key) => {
    setShowData((prevKey) => (prevKey === key ? null : key));
  };
  const handleAddressPop = () => setBtcAddress(!btcAddress);

  return (
    <>
      <BTCAddressPop btcAddress={btcAddress} setBtcAddress={setBtcAddress} />
      <section className={` position-relative dashboard py-3`}>
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="left d-flex align-items-center gap-10">
                  <div className="flex-shrink-0 rounded-circle">
                    <img
                      style={{ height: 40, width: 40 }}
                      src={p1}
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle"
                    />
                  </div>
                  <div className="content">
                    <h6 className="m-0 fw-normal">eth: 324rqwerqwer323423</h6>
                    <div className="d-flex align-items-center gap-10">
                      <Button className="border-0 p-0" variant="transparent">
                        {shareIcn}
                      </Button>
                      <Button className="border-0 p-0" variant="transparent">
                        {redirectIcn}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <Button
                    variant="transparent"
                    className="border-0 p-0 themeClr fw-sbold"
                  >
                    <span className="icn me-2">+</span>
                    Add Signer
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <CounterList data={cardData} />
            </Col>
            <Col sm="6" className="my-2">
              <CardCstm
                className={`  rounded-3 p-3 pb-2 px-lg-4 h-100 d-flex align-items-center`}
                style={{ background: "var(--cardBg2)" }}
              >
                <div className="contentBody pt-2 w-100">
                  <div className="graphBody">
                    <AreaChart />
                  </div>
                </div>
              </CardCstm>
            </Col>
            <Col sm="6" className="my-2">
              <CardCstm
                className={`rounded-3 p-3 px-lg-4 h-100`}
                style={{ background: "var(--cardBg2)" }}
              >
                <div className="top pb-3">
                  <h2 className="m-0 fw-sbold">$ 84,234.27</h2>
                  <p className="m-0 py-1 themeClr">−36.15 (0.15%)</p>
                  <p className="m-0">14 Nov, 12:47 pm IST • Disclaimer</p>
                </div>
                <div className="graphBody">
                  <AreaChart />
                </div>
              </CardCstm>
            </Col>
            <Col lg="12" className="my-2">
              <Slider {...BtcCardSettings}>
                {BtcCard.map((item, key) => (
                  <div key={key} className="my-2 px-3">
                    <p className="m-0 text-center">{item.btcHead}</p>
                    <CardCstm
                      onClick={() => handleDataBtc(key)}
                      className="cardCstm rounded-3 p-3 "
                      style={{ cursor: "pointer" }}
                    >
                      <div className="top d-flex align-items-start justify-content-between pb-2">
                        <span className="icn">
                          <img
                            src={item.icn}
                            alt=""
                            style={{ height: 70 }}
                            className="img-fluid object-contain"
                          />
                        </span>
                        <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center">
                          <li className="px-1">
                            <Button
                              className="border-0 p-0"
                              variant="transparent"
                            >
                              {infoIcn}
                            </Button>
                          </li>
                          <li className="px-1">
                            <Button
                              className="border-0 p-0"
                              variant="transparent"
                            >
                              {shareIcn}
                            </Button>
                          </li>
                          <li className="px-1">
                            <Button
                              className="border-0 p-0"
                              variant="transparent"
                            >
                              {bookmarkIcn}
                            </Button>
                          </li>
                        </ul>
                      </div>
                      <div className="content pt-2">
                        <h6 className="m-0 fw-sbold pb-1">{item.cardTitle}</h6>
                        <p className="m-0 fw-normal" style={{ fontSize: 12 }}>
                          {item.cardDescp}
                        </p>
                        <div className="btnWrpper mt-2 d-flex align-items-center gap-10">
                          {item.btns.map((item, key) => (
                            <GreyBtn
                              key={key}
                              className="d-flex align-items-center justify-content-center btn btn-primary"
                            >
                              {item}
                            </GreyBtn>
                          ))}
                        </div>
                      </div>
                    </CardCstm>
                    {showData == key && (
                      <ul className="list-unstyled ps-0 mb-0 mt-2">
                        {item.list.map((item, key) => (
                          <li key={key} className="py-1">
                            <div
                              onClick={handleAddressPop}
                              style={{ cursor: "pointer" }}
                              className="cardCstm text-center rounded-3 p-3 border"
                            >
                              <p className="m-0">{item}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </Slider>
            </Col>
            <Col lg="12" className="my-2 pt-3">
              <NFTSlider />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;

const icn1 = (
  <svg
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="27" cy="27" r="27" fill="#76FC93" />
    <path
      d="M30 18C30.2652 18 30.5196 18.1054 30.7071 18.2929C30.8946 18.4804 31 18.7348 31 19V21H35C35.2652 21 35.5196 21.1054 35.7071 21.2929C35.8946 21.4804 36 21.7348 36 22V34H38V36H16V34H18V22C18 21.7348 18.1054 21.4804 18.2929 21.2929C18.4804 21.1054 18.7348 21 19 21H23V19C23 18.7348 23.1054 18.4804 23.2929 18.2929C23.4804 18.1054 23.7348 18 24 18H30ZM23 23H20V34H23V23ZM29 23H25V34H29V23ZM34 23H31V34H34V23ZM29 20H25V21H29V20Z"
      fill="#0d1017"
    />
  </svg>
);

const icn2 = (
  <svg
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="27" cy="27" r="27" fill="#76FC93" />
    <path
      d="M18.75 19.6875C18.75 19.17 19.17 18.75 19.6875 18.75H21.75V24.0533L19.6335 22.9073C19.3662 22.7624 19.143 22.548 18.9875 22.2867C18.8319 22.0255 18.7499 21.727 18.75 21.423V19.6875ZM23.25 24.8655V18.75H30.75V24.8655L27.09 26.8485C27.0624 26.8636 27.0315 26.8715 27 26.8715C26.9685 26.8715 26.9376 26.8636 26.91 26.8485L23.25 24.8655ZM32.25 24.0533V18.75H34.3125C34.83 18.75 35.25 19.17 35.25 19.6875V21.423C35.2501 21.727 35.1681 22.0255 35.0125 22.2867C34.857 22.548 34.6338 22.7624 34.3665 22.9073L32.25 24.0533ZM19.6875 17.25C19.041 17.25 18.421 17.5068 17.9639 17.9639C17.5068 18.421 17.25 19.041 17.25 19.6875V21.423C17.25 21.9972 17.4052 22.5608 17.699 23.0541C17.9929 23.5475 18.4146 23.9523 18.9195 24.2257L24.9083 27.4703C23.9086 27.945 23.1002 28.7458 22.616 29.7409C22.1318 30.736 22.0006 31.8662 22.2439 32.9458C22.4873 34.0254 23.0907 34.99 23.955 35.6812C24.8192 36.3723 25.893 36.7489 26.9996 36.7489C28.1063 36.7489 29.18 36.3723 30.0443 35.6812C30.9086 34.99 31.512 34.0254 31.7553 32.9458C31.9987 31.8662 31.8674 30.736 31.3832 29.7409C30.899 28.7458 30.0906 27.945 29.091 27.4703L35.0805 24.2257C35.5854 23.9523 36.0071 23.5475 36.301 23.0541C36.5948 22.5608 36.75 21.9972 36.75 21.423V19.6875C36.75 19.041 36.4932 18.421 36.0361 17.9639C35.579 17.5068 34.959 17.25 34.3125 17.25H19.6875ZM23.625 31.875C23.625 30.9799 23.9806 30.1215 24.6135 29.4885C25.2465 28.8556 26.1049 28.5 27 28.5C27.8951 28.5 28.7535 28.8556 29.3865 29.4885C30.0194 30.1215 30.375 30.9799 30.375 31.875C30.375 32.7701 30.0194 33.6285 29.3865 34.2615C28.7535 34.8944 27.8951 35.25 27 35.25C26.1049 35.25 25.2465 34.8944 24.6135 34.2615C23.9806 33.6285 23.625 32.7701 23.625 31.875Z"
      fill="black"
    />
  </svg>
);

const icn3 = (
  <svg
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="27" cy="27" r="27" fill="#76FC93" />
    <path
      d="M27 26C27.55 26 28.021 25.8043 28.413 25.413C28.805 25.0217 29.0007 24.5507 29 24C28.9993 23.4493 28.8037 22.9787 28.413 22.588C28.0223 22.1973 27.5513 22.0013 27 22C26.4487 21.9987 25.978 22.1947 25.588 22.588C25.198 22.9813 25.002 23.452 25 24C24.998 24.548 25.194 25.019 25.588 25.413C25.982 25.807 26.4527 26.0027 27 26ZM22 36V34H26V30.9C25.1833 30.7167 24.4543 30.371 23.813 29.863C23.1717 29.355 22.7007 28.7173 22.4 27.95C21.15 27.8 20.1043 27.2543 19.263 26.313C18.4217 25.3717 18.0007 24.2673 18 23V20H22V18H32V20H36V23C36 24.2667 35.579 25.371 34.737 26.313C33.895 27.255 32.8493 27.8007 31.6 27.95C31.3 28.7167 30.8293 29.3543 30.188 29.863C29.5467 30.3717 28.8173 30.7173 28 30.9V34H32V36H22ZM22 25.8V22H20V23C20 23.6333 20.1833 24.2043 20.55 24.713C20.9167 25.2217 21.4 25.584 22 25.8ZM32 25.8C32.6 25.5833 33.0833 25.2207 33.45 24.712C33.8167 24.2033 34 23.6327 34 23V22H32V25.8Z"
      fill="black"
    />
  </svg>
);

const shareIcn = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 12L14 5V9C7 10 4 15 3 20C5.5 16.5 9 14.9 14 14.9V19L21 12Z"
      fill="#7aff9b"
    />
  </svg>
);

const infoIcn = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C12.9993 7.71733 12.9033 7.48 12.712 7.288C12.5207 7.096 12.2833 7 12 7C11.7167 7 11.4793 7.096 11.288 7.288C11.0967 7.48 11.0007 7.71733 11 8C10.9993 8.28267 11.0953 8.52033 11.288 8.713C11.4807 8.90567 11.718 9.00133 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22Z"
      fill="#7aff9b"
    />
  </svg>
);

const bookmarkIcn = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 21V5C5 4.45 5.196 3.97933 5.588 3.588C5.98 3.19667 6.45067 3.00067 7 3H17C17.55 3 18.021 3.196 18.413 3.588C18.805 3.98 19.0007 4.45067 19 5V21L12 18L5 21ZM7 17.95L12 15.8L17 17.95V5H7V17.95Z"
      fill="#7aff9b"
    />
  </svg>
);

const redirectIcn = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.828 12L16.243 13.414L19.071 10.586C19.8212 9.83584 20.2426 8.81839 20.2426 7.7575C20.2426 6.69661 19.8212 5.67916 19.071 4.929C18.6996 4.55756 18.2586 4.26291 17.7733 4.06189C17.288 3.86086 16.7678 3.7574 16.2425 3.7574C15.1816 3.7574 14.1642 4.17883 13.414 4.929L10.586 7.757L12 9.172L14.828 6.343C15.2032 5.96785 15.712 5.75709 16.2425 5.75709C16.773 5.75709 17.2819 5.96785 17.657 6.343C18.0322 6.71815 18.2429 7.22696 18.2429 7.7575C18.2429 8.28804 18.0322 8.79685 17.657 9.172L14.828 12ZM12 14.829L13.414 16.243L10.586 19.071C9.83584 19.8212 8.8184 20.2426 7.7575 20.2426C6.69661 20.2426 5.67917 19.8212 4.929 19.071C4.17884 18.3208 3.7574 17.3034 3.7574 16.2425C3.7574 15.1816 4.17884 14.1642 4.929 13.414L7.757 10.586L9.172 12L6.343 14.829C5.96799 15.2041 5.75736 15.7129 5.75745 16.2434C5.75755 16.7738 5.96836 17.2825 6.3435 17.6575C6.71865 18.0325 7.22741 18.2431 7.75786 18.2431C8.2883 18.243 8.79699 18.0321 9.172 17.657L12 14.829Z"
      fill="#7aff9b"
    />
    <path
      d="M14.829 10.586C15.0166 10.3984 15.1221 10.1439 15.1221 9.8785C15.1221 9.61314 15.0166 9.35864 14.829 9.171C14.6414 8.98336 14.3869 8.87794 14.1215 8.87794C13.8561 8.87794 13.6016 8.98336 13.414 9.171L9.172 13.414C9.07649 13.5062 9.00031 13.6166 8.9479 13.7386C8.89549 13.8606 8.86791 13.9918 8.86675 14.1246C8.8656 14.2574 8.8909 14.3891 8.94118 14.512C8.99146 14.6349 9.06571 14.7465 9.15961 14.8404C9.2535 14.9343 9.36515 15.0085 9.48805 15.0588C9.61094 15.1091 9.74262 15.1344 9.8754 15.1333C10.0082 15.1321 10.1394 15.1045 10.2614 15.0521C10.3834 14.9997 10.4938 14.9235 10.586 14.828L14.829 10.586Z"
      fill="#7aff9b"
    />
  </svg>
);
