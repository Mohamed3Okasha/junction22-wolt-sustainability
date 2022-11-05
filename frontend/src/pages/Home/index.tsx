import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import HowItWorksContent from "../../content/HowItWorksContent.json";
import PricingContent from "../../content/PricingContent.json";
import MenuContent from "../../content/MenuContent.json";
import ContactContent from "../../content/ContactContent.json";
import { Content } from "../../components/ContentBlock/CenterContentBlock/styles";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="developer.svg"
        id="intro"
      />
      <ContentBlock
        type="center"
        title={HowItWorksContent.title}
        content={HowItWorksContent.text}
        section={HowItWorksContent.section}
        button={HowItWorksContent.button}
        icon=""
        id=""
      />
      
      <ContentBlock
        type="center"
        title={MenuContent.title}
        content={MenuContent.text}
        section={MenuContent.section}
        button={[{
            "title": "See menu",
            "to": "/menu"
        }]}
        icon="product-launch.svg"
        id="menu"
      /> 
    
    <ContentBlock
        type="center"
        title={PricingContent.title}
        content={PricingContent.text}
        section={PricingContent.section}
        icon="graphs.svg"
        id="about"
      />

      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
