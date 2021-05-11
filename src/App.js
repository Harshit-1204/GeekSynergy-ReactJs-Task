import React ,{useEffect,useContext , useReducer, createContext}from "react"
import './App.css';
import NavBar from "./components/NavBar"
import {BrowserRouter as Router ,Route ,useHistory ,Switch } from "react-router-dom"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import About from "./components/About"
import {reducer,initialState} from "./reducers/userReducers"

export const UserContext = createContext()

const Routing =()=>{

  const history = useHistory()
  const {dispatch} = useContext(UserContext) 
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    
    if(user){
      dispatch({type:"USER",payload:user})
    } else {
      history.push("/signin")
    }
    
  }
  ,[dispatch,history])


  return <Switch>
     <Route path="/" exact component={Home}/>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/about" component={About} />
      </Switch>
}
function App() {
  const [state,dispatch] = useReducer(reducer,initialState)


  return (
    <div className="App">
      <UserContext.Provider value={{state,dispatch}}>
          <Router>
              <NavBar />
              <Routing />
          </Router>
      </UserContext.Provider>
      

    </div>
  );
}

export default App;
