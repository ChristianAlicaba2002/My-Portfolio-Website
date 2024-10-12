import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import GobackPic from "../assets/LeftArrow.jpg";
import Gallery1 from "../assets/Nba/gallery1.jpg";
import Gallery2 from "../assets/Nba/gallery2.jpg";
import Gallery3 from "../assets/Nba/gallery3.jpg";
import Gallery4 from "../assets/Nba/gallery4.jpg";
import Gallery5 from "../assets/Nba/gallery5.jpg";
import Gallery6 from "../assets/Nba/gallery6.jpg";
import Gallery7 from "../assets/Nba/gallery7.jpg";
import Gallery8 from "../assets/Nba/gallery8.jpg";
import Gallery9 from "../assets/Nba/gallery9.jpg";
import Gallery10 from "../assets/Nba/gallery10.jpg";
import Gallery11 from "../assets/Nba/gallery11.jpg";
import Gallery12 from "../assets/Nba/gallery12.jpg";
import Gallery13 from "../assets/Nba/gallery13.jpg";
import Gallery14 from "../assets/Nba/gallery14.jpg";
import Gallery15 from "../assets/Nba/gallery15.jpg";
import Gallery16 from "../assets/Nba/gallery16.jpg";
import Gallery17 from "../assets/Nba/gallery17.jpg";
import Gallery18 from "../assets/Nba/gallery18.jpg";
import Gallery19 from "../assets/Nba/gallery19.jpg";
import Gallery20 from "../assets/Nba/gallery20.jpg";
import {Container} from "./GalleryStyle/Nba.module.css";
import {Gallerys} from "./GalleryStyle/Nba.module.css";
import {Gobackimg} from "./GalleryStyle/Nba.module.css";



export default function NbaStar(){

    return(
            <>
            <main>
                        <div className={Container}>
                            <Link to="/Gallery"><img className={Gobackimg} src={GobackPic} alt="Go Back" /></Link>
                           <h1>Nba SuperStars</h1>
                           <div className={Gallerys}>
                                <Link target="_blank" to={Gallery1} ><img src={Gallery1} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery2} ><img src={Gallery2} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery3} ><img src={Gallery3} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery4} ><img src={Gallery4} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery5} ><img src={Gallery5} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery6} ><img src={Gallery6} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery7} ><img src={Gallery7} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery8} ><img src={Gallery8} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery9} ><img src={Gallery9} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery10} ><img src={Gallery10} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery11} ><img src={Gallery11} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery12} ><img src={Gallery12} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery13} ><img src={Gallery13} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery14} ><img src={Gallery14} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery15} ><img src={Gallery15} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery16} ><img src={Gallery16} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery17} ><img src={Gallery17} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery18} ><img src={Gallery18} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery19} ><img src={Gallery19} alt="Gallery1.jpg" /></Link>
                                <Link target="_blank" to={Gallery20} ><img src={Gallery20} alt="Gallery1.jpg" /></Link>
                            </div>
                        </div>
            </main>
                    <Footer />
            
            </>



    );

                
                        

}