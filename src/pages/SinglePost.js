import Axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../components/Post";

function SinglePost(props) {
  const [post, setPosts] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`http://localhost:1337/articles/${id}`)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h2>Error</h2>;

  return (
    <>
      <Post title={`${post.Title}`} content={`${post.Content}`} src={`${post.Image[0].url}`} />
    </>
  );
}

export default SinglePost;
