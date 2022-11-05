import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import { StyledInput } from "../../common/Input/styles";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={4} md={8} sm={12} xs={12}>
              <Title>{t("Quick Links")}</Title>
              <Large left="true" to="/">
                {t("FAQ")}
              </Large>
              <Large left="true" to="/">
                {t("Blog")}
              </Large>
              <Large left="true" to="/">
                {t("Contact Us")}
              </Large>
            </Col>
            <Col lg={8} md={10} sm={12} xs={12}>
              <Title>{t("About Us")}</Title>
              <Large left="true" to="/">
                {t("Cooky is a service that provides affordable and healthy meals. " +
                    "We cook and deliver meals straight to your home door so can forget about the hassle of cooking")}
              </Large>
            </Col>
            <Col lg={8} md={10} sm={12} xs={12}>
              <Title>{t("Newslatter")}</Title>
              <Col>
                <StyledInput
                    style={{backgroundColor: "#ffffff"}}
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    onChange={() => {}}
                />
                <Button color="#ffffff" name="submit">{t("Submit")}</Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="instagram.svg"
              />
              <SocialLink
                  href="https://www.linkedin.com/in/lasha-kakabadze/"
                  src="facebook.svg"
              />
              <SocialLink
                  href="https://twitter.com/Adrinlolx"
                  src="twitter.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
