import { Logo } from "./components";
import styled from "styled-components";

const HeaderConteiner = ({ className }) => (
  <header className={className}>
    <Logo />
  </header>
);

export const Header = styled(HeaderConteiner)`
  position: fixed;
  top: 0;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0 -2px 17px #000;
  background-color: #fff;
`;
