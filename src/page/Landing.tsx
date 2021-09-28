import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Landing = () => {
  const history = useHistory();
  return (
    <div className = "p-12">
      <h1>Wellcome to Page</h1>

      <button onClick={() => history.push("/dashboard")} type="button">
      Dashboard
      </button>
      <button onClick={() => history.push("/bom")} type="button">
        Boom
      </button>
    </div>
  );
};

export default Landing;
