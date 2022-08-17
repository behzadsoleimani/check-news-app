import React from "react";
import loading from "../../components/Images/loading.gif";
import styled from "styled-components";

export const Center = styled.div`
    text-align: center;
    padding: 20px;
`

function Spinner() {
  return (
    <Center>
      <img src={loading} alt="loading" />
    </Center>
  );
}

export default Spinner;
