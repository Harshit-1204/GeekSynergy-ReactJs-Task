import React, { useEffect , useContext} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"
import { UserContext } from "../App"
function Home() {
  const history = useHistory()
  const {dispatch} = useContext(UserContext) 
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "USER", payload: user });
      var data = {};

        const params = new URLSearchParams({
          category:"movies",
          language:"kannada",
          genre:"all",
          sort:"voting"
        }).toString();

        const url =
          "https://hobList.com/movielist?" +
          params;

        axios
          .post(url, data)
          .then(res => {
            console.log(res);
          })
          .then(result=>(console.log(result)))
          .catch(err => {
            console.log(err);
          });
    } else {
      history.push("/signin");
    }
    // axios
    //   .post(
    //     "https://hoblist.com/movielist?category=movies&language=kannada&genre=all&sort=voting"
    //   )
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));

    
  }, [useHistory,dispatch]);

  return <div>Home</div>;
}

export default Home;
