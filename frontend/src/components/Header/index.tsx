import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { useHistory } from 'react-router-dom';

import {
  HeaderSection,
  LogoContainer,
  Burger,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { useGlobalState } from "../../state/GlobalStateProvider";
const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const [state, dispatch] = useGlobalState();
  
  const history = useHistory();

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return  (
      <>
        <Col>
        <Row align="middle">
        <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
        </LogoContainer>
        <CustomNavLinkSmall onClick={() => scrollTo("menu")}>
          <Span>{t("Our Menu")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall  onClick={() => scrollTo("pricing")}>
          <Span>{t("Pricing")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall  onClick={() => scrollTo("contact")}>
          <Span>{t("How it Works")}</Span>
        </CustomNavLinkSmall>
        </Row>
        </Col>
        <Col >
        {!state.auth &&
          <CustomNavLinkSmall onClick={() => {
            dispatch({ auth: true })
            history.push("/auth")}            
          }>
          <Span>{t("Log in")}</Span>
          </CustomNavLinkSmall>
        }
        {(state.auth)&& 
            <CustomNavLinkSmall onClick={() => {
              dispatch({ auth: false })
              history.push("/")
            }
            }>
            <Span>{t("Log out")}</Span>
          </CustomNavLinkSmall>
        }

        {(state.auth )&& 
            <CustomNavLinkSmall onClick={() => {
              history.push("/auth/orders")
            }
            }>
            <Span>{t("My orders")}</Span>
          </CustomNavLinkSmall>
        }
      
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button background="#D9D9D9" color="#000000" >{t("Get Started")}</Button>
          </Span>
        </CustomNavLinkSmall>
        </Col>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" align="middle">
          <MenuItem />
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
