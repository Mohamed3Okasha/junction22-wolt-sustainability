import { lazy } from "react";
import HowItWorksContent from "../../../src/content/HowItWorksContent.json";
import PricingContent from "../../../src/content/PricingContent.json";
import MenuContent from "../../../src/content/MenuContent.json";
import ContactContent from "../../../src/content/ContactContent.json";
import { Card, Row, Col } from "antd";
import { Button } from "../../../src/common/Button";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Contact = lazy(() => import("../../../src/components/ContactForm"));
const Container = lazy(() => import("../../../src/common/Container"));
const ScrollToTop = lazy(() => import("../../../src/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../../src/components/ContentBlock"));
const WoltApproxDeliveryTime = lazy(
  () => import("../../../src/components/WoltApproxDeliveryTime")
);
const PricingBlock = lazy(() => import("../../../src/components/Pricing"));
const FAQ = lazy(() => import("../../components/FAQ"));

const Home = () => {
  const history = useHistory();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      {/*<WoltApproxDeliveryTime*/}
      {/*    from_location="Otakaari 24, 02150 Espoo"*/}
      {/*    to_location="Arkadiankatu 3-6"*/}
      {/*/>*/}
      <ScrollToTop />
      <Card
        id="hero"
        bordered={false}
        style={{
          borderRadius: "20px",
          backgroundImage: "URL(/img/stocks/hi.png)",
          height: 300,
          // minHeight: "100%",
          backgroundSize: "cover",
        }}
      >
        <p style={{ width: "50%", fontSize: "25px", color: "#ffffff" }}>
          You don't have to cook anymore
        </p>
        <p style={{ width: "50%", fontSize: "18px", color: "#ffffff" }}>
          We provide affordable, healthy and tasty food, so you don't have to
          cook ever again!
        </p>
        <Button onClick={() => alert("start")} color={"#ffffff"}>
          Pick a meal
        </Button>
      </Card>

      <ContentBlock
        type="center"
        title={HowItWorksContent.title}
        content={HowItWorksContent.text}
        section={HowItWorksContent.section}
        icon=""
        id="howItWorks"
      />
      <Row style={{ alignItems: "center" }} justify="center" gutter={16}>
        <Col span="12">
          <ContentBlock
            type="center"
            title={MenuContent.title}
            content={MenuContent.text}
            button={[
              {
                color: "#ffffff",
                justify: "center",
                title: "See menu",
                action: () => history.push("/menu"),
              },
            ]}
            icon="product-launch.svg"
            id="menu"
          />
        </Col>
        <Col span="12">
          <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/stocks/Rectangle11.png"
                alt="First slide"
                style={{ width: "auto", height: "auto" }}
              ></img>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/stocks/Rectangle12.png"
                alt="Second slide"
                style={{ width: "auto", height: "auto" }}
              ></img>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/stocks/Rectangle13.png"
                alt="Third slide"
                style={{ width: "auto", height: "auto" }}
              ></img>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/stocks/Rectangle14.png"
                alt="Fourth slide"
                style={{ width: "auto", height: "auto" }}
              ></img>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className=" d-block w-100"
                src="/img/stocks/Rectangle15.png"
                alt="Fifth slide"
              ></img>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <PricingBlock id="pricing" />

      <FAQ />

      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
