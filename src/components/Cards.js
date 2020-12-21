import "./Cards.css";
import axios from "axios";
import CardItem from "./CardItem";
import React, { useEffect, useState } from "react";

function Cards() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/articles`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (loading) return <h1>Cargando...</h1>;

  return (
    <div className="cards">
      <h1>Articulos recientes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {posts.map((post) => (
              <li key={post.id}>
                <CardItem
                  src={`${post.Image.url}`}
                  text={`${post.Title}`}
                  label="Aventura"
                  path={`/single-post/article/${post.id}`}
                  content={`${post.Description}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
