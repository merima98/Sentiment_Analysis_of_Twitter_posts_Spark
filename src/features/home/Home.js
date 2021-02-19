import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Activity } from "react-feather";

import { BREAKPOINTS } from "../../constants";

const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  width: 100%;
  background-color: #f5d37b;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 200px;
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 50%;
  }
`;
const Logo = styled.span`
  color: #000;
  font-size: 30px;
  margin-bottom: 1rem;
  font-weight: bold;
`;
const Message = styled.span`
  color: #000;
  padding: 26px;
  margin-bottom: 1rem;
`;
const Button = styled(NavLink)`
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #000;
  outline: none;
  text-decoration: none;
  color: #000;
  font-size: 16px;
`;
function Home() {
  return (
    <Wrapper>
      <Container>
        <Logo>
          QUOTES CLICKER <Activity />
        </Logo>
        <Message>motivate yourself everyday</Message>
        <Button exact to="/quotes">
          READ QUOTES
        </Button>
      </Container>
    </Wrapper>
  );
}

export default Home;
