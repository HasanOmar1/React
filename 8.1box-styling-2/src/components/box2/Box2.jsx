import Box3 from "../box3/box3";
import { styled } from "styled-components";

const Box2Styles = styled.div`
  background-color: skyblue;
  width: 700px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Box2() {
  return (
    <Box2Styles>
      <Box3 />
    </Box2Styles>
  );
}
