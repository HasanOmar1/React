import Box4 from "../box4/box4";

export default function Box3() {
  return (
    <div
      style={{
        backgroundColor: `pink`,
        width: `600px`,
        height: `450px`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        gap: `20px`,
      }}
    >
      <Box4 />
      <Box4 />
    </div>
  );
}
