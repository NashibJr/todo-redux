import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const todos = useSelector((state) => state.todos);

  console.log(todos, ">>>>");

  return <div>Home</div>;
};

export default Home;
