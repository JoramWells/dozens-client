import React from "react";
import styled from "styled-components";

const Loginnav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #303030;
  padding: 0.7rem;
`;

const LoginNav = ({ children }) => {
  return (
    <Loginnav>
        {children}
    </Loginnav>
  );
};
export default LoginNav;
