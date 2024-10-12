import profile from "../assets/ProjectImg/profile.jpg";
import Html from "../assets/Skills/html.png";
import Css from "../assets/Skills/Css.png";
import Java from "../assets/Skills/java.jpg";
import Javascript from "../assets/Skills/javascript.jpg";
import Python from "../assets/Skills/python.jpg";
import React from "../assets/Skills/react.jpg";
import {Link} from "react-router-dom";
import "./forStyling/Home.css";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export function Home(){
    return(
            <>
                <Header />
                <main style={{marginBottom:"10%"}}>
                    <div className="container">
                        <img className="profile" src={profile} />

                        <div className="details">
                            <h3>Hello</h3>
                            <label className="labels" htmlFor="">I'm Christian Dave Alicaba</label><br />
                            <label className="labels" htmlFor="">Get to know me</label>
                            <p>Welcome to my personal website. <br /> Here, I share my journer , experiences and <br /> thoughts it's a space 
                            where I express myself and <br /> connect with you. Feel free to explore and discover  <br /> more about me.</p>
                            <div className="buttons">
                                <Link className="ContactMe" to="/Contact">Contact Me</Link><br />
                                <Link className="Explore" to="/Project">Explore My Projects</Link>
                            </div>
                            <div className="Skills">

                               <a href="https://www.w3schools.com/html/default.asp" target="_blank">
                                    <img title="goes to w3schools" className="Html" src={Html} alt="Html.img"/>
                               </a> 
                               
                               <a href="https://www.w3schools.com/css/default.asp" target="_blank">
                                    <img title="goes to w3schools" src={Css} alt="Css.img"/>
                               </a>

                               <a href="https://www.w3schools.com/js/default.asp"target="_blank">
                                    <img title="goes to w3schools" src={Javascript} alt="Javascript.img"/>
                               </a>

                               <a href="https://www.w3schools.com/java/default.asp" target="_blank">  
                                    <img title="goes to w3schools" src={Java} alt="Java.img"/>
                               </a>
                               
                               <a href="https://www.w3schools.com/python/default.asp" target="_blank" >
                                    <img title="goes to w3schools" src={Python} alt="Python.img"/>
                               </a>

                               <a href="https://www.w3schools.com/react/default.asp" target="_blank" >
                                    <img title="goes to w3schools" src={React} alt="React.img"/>
                               </a>
                            
                            </div>
                            
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </>
    );
}
export default Home