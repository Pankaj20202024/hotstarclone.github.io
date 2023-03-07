import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <Content>
        <CAT>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="Disney+Hotstar" />
          <SignUp>GET ALL THERE </SignUp>
          <Description>
            Disney+ Hotstar is an online video streaming platform owned by Novi
            Digital Entertainment Private Limited, a wholly owned subsidiary of
            Star India Private Limited. Disney+ Hotstar currently offers over
            100,000 hours of TV content and movies across 9 languages, and every
            major sport covered live. Highly evolved video streaming technology
            and a high attention to quality of experience across devices and
            platforms, make Disney+ Hotstar the most complete video destination
            for Over The Top (OTT) video consumers.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="Disney+Hotstar" />
        </CAT>
        <BgImage />
      </Content>
    </Container>
  );
}
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
 
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  z-index: -1;
  width: 110%;
  min-height: 100vh;
  position: relative;
  top: -40%;
`;

const CAT = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  top: 73%;
  max-width: 500px;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

`;

const CTALogoOne = styled.img`
  margin-bottom: 25px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #3f00ff;
  margin-bottom: 25px;
  width: 100%;
  letter-spacing: 1.2px;
  font-size: 2rem;
  border-radius: 6px;
  &:hover {
    background-color: #0047ab;
    cursor: pointer;
  }
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: hsla(0, 0%, 95.3%, 1);
  margin: 0 0 24px;
  line-height: 1.4;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 25px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
