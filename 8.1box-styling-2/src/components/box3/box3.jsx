import Box4 from "../box4/box4";
import { styled } from "styled-components";

const Box3Styles = styled.div`
  background-color: pink;
  width: 600px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export default function Box3() {
  return (
    <Box3Styles>
      <Box4 />
      <Box4 />
    </Box3Styles>
  );
}
