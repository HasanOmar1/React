import Box2 from "../box2/Box2";
import { styled } from "styled-components";

const Box1Styles = styled.div`
  background-color: darkgreen;
  width: 800px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Box1() {
  return (
    <Box1Styles>
      <Box2 />
    </Box1Styles>
  );
}
