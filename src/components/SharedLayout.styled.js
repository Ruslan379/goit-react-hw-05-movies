import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  // background-color: #eeeeee;
  background-color: #fff7ec;
`;



export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  // border: 1px solid black;
  border-radius: 5px;
  box-shadow: 7px 7px 3px 0px rgba(0, 0, 0, 0.50);
  background-color: #ffedd5;


  > nav {
    display: flex;
  }
`;



export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
