import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import SinglePost from "./page/SinglePost";
import { Route, Router, Routes, useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts);
  const navigate = useNavigate();

  const [post, setPost] = React.useState({ title: "", body: "" });
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    setPosts(data);
  }, [data]);

  const handleChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setPost((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const { body, title } = post;
      const date = new Date();
      dispatch({
        type: "post/addPost",
        payload: {
          id: nanoid(20),
          title,
          body,
          date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        },
      });
      setPost({ body: "", title: "" });
      alert("Post successfully added");
    } catch (error) {
      console.log(error, ">>>;;;");
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  value={post.title}
                  onChange={handleChange}
                  placeholder="Title"
                />
                <input
                  type="text"
                  name="body"
                  value={post.body}
                  onChange={handleChange}
                  placeholder="Body"
                />
                <input type="submit" value="Submit" />
              </form>
              <ul>
                {posts?.flatMap((post) => [
                  <li
                    key={post.id}
                    onClick={() =>
                      navigate(`/post/${post.id}`, { replace: false })
                    }
                  >
                    {post.title}
                  </li>,
                ])}
              </ul>
            </div>
          }
        />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App;
