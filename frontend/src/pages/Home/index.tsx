import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import HowItWorksContent from "../../content/HowItWorksContent.json";
import PricingContent from "../../content/PricingContent.json";
import MenuContent from "../../content/MenuContent.json";
import ContactContent from "../../content/ContactContent.json";
import { Card } from 'antd';
import {Button} from "../../common/Button";
import {useHistory} from "react-router-dom";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  const history = useHistory()
  return (
    <Container>
      <ScrollToTop />
      <Card  bordered={false}  style={{borderRadius:"20px", backgroundImage: "URL(/img/stocks/hi_1.png) no-repeat: 95%50%", minHeight: "100%", backgroundSize: "cover"}}>
      <p style={{width:"50%", fontSize:"25px", color:"#ffffff"}}>You don’t need to think about food anymore</p>
      <p style={{width:"50%", fontSize:"18px", color:"#ffffff"}}>We will provide you with afordable, healthy and tasty food! So, you don’t have to get your hands dirty!</p>
        <Button onClick={()=>alert("start")} color={"#ffffff" }>Pick a meal</Button>
      </Card>
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="developer.svg"
        button={[{
            title:"Pick a meal",
            action: ()=> console.log("hello")
        }]}
        id="intro"
      />

      <ContentBlock
        type="center"
        title={HowItWorksContent.title}
        content={HowItWorksContent.text}
        section={HowItWorksContent.section}
        icon=""
        id=""
      />
      
      <ContentBlock
        type="center"
        title={MenuContent.title}
        content={MenuContent.text}
        section={MenuContent.section}
        button={[{
            title: "See menu",
            action: ()=> history.push("/menu")
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
