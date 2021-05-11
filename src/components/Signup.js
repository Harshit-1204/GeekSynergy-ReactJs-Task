import React,{useState } from "react";
import {useHistory ,Link} from "react-router-dom"

function Signup() {
    const history = useHistory()
    const [name, setName] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [phoneNo, setPhoneNo] = useState(undefined)
    const [profession, setProfession] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const submit = ()=>{
        if(!name || !email || !phoneNo || !profession || !password){
            alert("Please field all the fields")
        }else{

            const user = {name,password,email,profession,phoneNo}
            localStorage.setItem("user",JSON.stringify(user))
            history.push("/signin")
        }
        
    }

  return (
    <div>
      <div className="card my-card">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Name" name="name"  onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="Email" name="email"  onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder="Phone No." name="phoneno"  onChange={(e)=>setPhoneNo(e.target.value)}/>


        <input type="text" placeholder="Profession" name="profession" onChange={(e)=>setProfession(e.target.value)}/>

        

        <input type="password" placeholder="Password" name="password"  onChange={(e)=>setPassword(e.target.value)}/>
        <button className="waves-effect waves-light btn submit" onClick={()=>submit()}>
            Submit
        </button>
        <p className="account">
          Already have account? <Link to="/signin"> Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
