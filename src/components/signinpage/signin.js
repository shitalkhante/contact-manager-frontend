
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./signin.css";
import ellipse from "../images/Ellipse.png";
import ellipse2 from "../images/ellipse2.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import group from "../images/group.png"

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target)
        const email = formdata.get("email")
        const password = formdata.get("password")
        axios.post("https://contact-manager-backend-api.herokuapp.com/signin", {
            email: email,
            password: password
        }).then((res) => {
            if (res.data.message === "success") {
                window.localStorage.setItem("token", res.data.token)
                alert("signin Sucessull!")
                console.log(email);
                navigate("/homePage");

            }
            if (res.data.message === "please add all fields") {
                alert("User not Registered !")
            }
            if (res.data.message === "please enter valid info") {
                alert("Invalid Crediential!")
            }


        })
            .catch(err => {
                console.log(err)
                alert("entervaliddetails")
            })

    }

    return (

        <>
          <header id="header">
            <img src={ellipse} alt="img" />
            
            </header>
          


               <section id="middel">
               <img className="group-top" src={group} alt="img" />
               <center>
                    <h1>Enter login credintials</h1>
                    </center>
                    <form className='form' onSubmit={handleOnSubmit}>
                        <input type="text" className='form-input' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                        <br />
                        
                        <br />
                        <input type="text" className='form-input' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                        <br />
                        
                        <br />
                        <center>

                        <button className='btn-btn' >Signin</button>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Link to='/Signuppage'><button className='btn-btn'>Signup</button></Link>
                        </center>
                        <img id="grop-top" src={group} alt="img" />
                    </form>
                    </section>

           
            <img className='image' src={ellipse2} alt="img" />
           
        </>

    )

}
export default Signin