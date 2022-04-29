import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import example1 from "../assets/example1.png"
import example2 from "../assets/example2.png"
import example3 from "../assets/example3.png"
import classes from "./Display.module.css"
import { isMobile } from "react-device-detect";

const Display=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggble:true,
        arrows:false,
        autoplay:true

      };
    return (
        <Slider className={classes.slider} {...settings}>
          <div>
            <img src={example1}/>
          </div>
          <div>
            <img src={example2}/>
          </div>
          <div>
          <img src={example3}/>
          </div>
        </Slider>
        )
}

export default Display;