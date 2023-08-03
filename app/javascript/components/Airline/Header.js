import React from "react";
import { styled } from "styled-components";

const HeaderSection = styled.div`
  padding: 100px 100px 10px 100px;
  font-size: 30px;
  text-align: center;
`;
const Header = (props) => {
  const { name, image_url } = props.attributes;
  return (
    <HeaderSection>
      <img src={image_url} alt={name} width="50" />
      <h1>{name}</h1>
    </HeaderSection>
  );
};
export default Header;
