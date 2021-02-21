import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import { Activity } from "react-feather";

import queries from "../../api/queries/queries";
import { BREAKPOINTS } from "../../constants";

const Wrapper = styled.div`
  background-color: #fff;
`;
const Header = styled.div`
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
  padding: 10px;
  margin-bottom: 100px;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    margin-bottom: 200px;
  }
`;
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 70%;
  }
  display: grid;
  grid-template-rows: 0.5fr 2fr 0.5fr;
`;
const Logo = styled.span`
  color: #000;
  font-size: 30px;
  margin-bottom: 1rem;
  font-weight: bold;
`;
const Quote = styled.div`
  padding: 40px;
  margin-bottom: 1rem;
  border: 1px solid #f5d37b;
`;
const Button = styled.button`
  background-color: #f5d37b;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Quotes() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await queries.allPosts();
      setPosts(response.data.slip);
    }
    fetchData();
  }, [setPosts]);
  function goBack() {
    history.goBack();
  }
  async function getNewQuote() {
    try {
      setIsLoading(true);
      const response = await queries.allPosts();
      setPosts(response.data.slip);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Wrapper>
      <Header>
        <ArrowLeft onClick={() => goBack()} style={{ cursor: "pointer" }} />
      </Header>
      <Container>
        <Logo>
          QUOTES CLICKER <Activity />
        </Logo>
        <Quote>{posts.advice}</Quote>
        <Button onClick={() => getNewQuote()} disabled={isLoading}>
          {isLoading ? <span>Loading...</span> : <span>GET NEW QUOTE</span>}{" "}
        </Button>
      </Container>
    </Wrapper>
  );
}

export default Quotes;
