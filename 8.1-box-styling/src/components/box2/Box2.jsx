import Box3 from "../box3/box3";

export default function Box2() {
  return (
    <div
      style={{
        backgroundColor: `skyblue`,
        width: `700px`,
        height: `550px`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <Box3 />
    </div>
  );
}
