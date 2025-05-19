import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const SinglePost = () => {
  const posts = useSelector((state) => state.posts);
  const { id } = useParams();
  const myPost = posts.find((post) => post.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = React.useState();
  const [state, setState] = React.useState({
    title: myPost?.title ?? "",
    body: myPost?.body ?? "",
  });

  React.useEffect(() => {
    setPost(myPost);
  }, [myPost]);

  const handleChange = (event) =>
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch({
        type: "post/editPost",
        payload: {
          id,
          title: state.title,
          body: state.body,
        },
      });
      setState({ body: "", title: "" });
      alert("Post successfull updated");
      navigate("/");
    } catch (error) {
      console.log(error, "::::");
    }
  };

  return (
    <>
      {post && (
        <div>
          <h1>{post?.title}</h1>
          <form onSubmit={handleSubmit}>
            <h3>Edit post</h3>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={state.title}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Body"
              name="body"
              value={state.body}
              onChange={handleChange}
            />
            <input type="submit" value={"Submit"} />
          </form>
          <button type="button">Delete</button>
        </div>
      )}
    </>
  );
};

export default SinglePost;
