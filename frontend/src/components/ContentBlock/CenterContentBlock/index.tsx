import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  CenterContentSection,
  Content,
  ContentWrapper,
  MinTitle,
  MinPara,
  Img
} from "./styles";
import { ButtonWrapper } from "../RightContentBlock/styles";
import { Button } from "../../../common/Button";
import {useHistory} from "react-router-dom";


const CenterContentBlock = ({
  icon,
  title,
  button,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  const history = useHistory();

  return (
    <CenterContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
                <Row justify="space-evenly" align="middle">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={8} >
                          {item.image &&
                            <Img src={`/img/stocks/${item.image}`} width="200" height="200" />
                          }
                          {item.icon && 
                            <SvgIcon src={t(item.icon)}  width="200" height="200" />
                          }
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
                <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        background={item.background}
                        fixedWidth={true}
                        onClick={item.action}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </CenterContentSection>
  );
};

export default withTranslation()(CenterContentBlock);
