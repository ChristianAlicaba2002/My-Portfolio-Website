import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { Container } from "./GalleryStyle/Gallery.module.css";
import { Category } from "./GalleryStyle/Gallery.module.css";
import CategoryPic1 from "../assets/GalleryCategory1.png";
import CategoryPic2 from "../assets/GalleryCategory2.png";
export default function Gallery(){
    
    return(
            <>
                <Header /><br />
                <div className={Container}>
                    <h1>Gallery</h1>
                    <div className={Category}>
                        <Link to="/NbaStar" title="Goes to Nbastar Albums"><img src={CategoryPic1} alt="Category1" /></Link><br />
                        <Link to="/SportsCar" title="Goes to Supercars Albums"><img src={CategoryPic2} alt="Category2" /></Link><br />
                    </div>
                    
                </div>
                    





                <Footer />
            </>
    );
}