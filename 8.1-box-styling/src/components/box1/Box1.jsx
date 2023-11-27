import Box2 from "../box2/Box2";
export default function Box1() {
  return (
    <div
      style={{
        backgroundColor: `darkgreen`,
        width: `800px`,
        height: `600px`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <Box2 />
    </div>
  );
}
