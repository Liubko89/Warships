import { BounceLoader } from "react-spinners";

const PlayerLoader = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div style={{ alignContent: "center", width: "100%" }}>
      <p style={{ textAlign: "center" }}>waiting for a player</p>
      <BounceLoader
        color={"green"}
        loading={true}
        cssOverride={override}
        size={120}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default PlayerLoader;
