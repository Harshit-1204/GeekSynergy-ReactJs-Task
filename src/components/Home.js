import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
function Home() {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "USER", payload: user });

      fetch("https://hoblist.com/movieList", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
           setPosts(result.result);
        })
        .catch((err) => console.log(err));
    } else {
      history.push("/signin");
    }
  }, [history, dispatch]);
console.log(posts)
  return (
    <div>
      <div className="home-container">
        {posts
          ? posts.map((item) => {
              return (
                <div key={item._id} className="post">
                  <div class="main-div">
                    <div className="votes">
                      <h4>
                        <i class="fas fa-caret-up"></i>
                      </h4>
                      <h4> {item.upVoted? item.upVoted.length : "0"}</h4>
                      <h4>
                        <i class="fas fa-caret-down"></i>
                      </h4>
                      <h5>Votes</h5>
                    </div>

                    <div className="img">
                      <img
                        src={item.poster}
                        alt="movie-poster"
                      ></img>
                    </div>

                    <div className="movie-detail">
                      <h4>{item.title}</h4>
                      <p>Genre : {item.genre}</p>
                      <p>Director : {item.director}</p>
                      <p>Starring : {item.stars} </p>
                      <h6>Mins | {item.language} | 2 Apr</h6>
                      <h6>
                        <a href="">{item.pageViews} views | Voted by {item.totalVoted} People</a>
                      </h6>
                    </div>
                    <button className="trailer-btn">Watch Trailer</button>
                  </div>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
}

export default Home;
