import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>
        Go to Query Param Pages <br />
        <Link to="/query?param=param1">param1</Link>
        <br />
        <Link to="/query?param=param2">param2</Link>
        <br />
        <Link to="/query?param=param3">param3</Link>
      </p>
    </div>
  );
};

export default Home;
