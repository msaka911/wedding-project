import classes from "./About.module.css"
import Overlay from "./Overlay"
import pro_cleaning from "../assets/Pro-Cleaning.gif"
import { isMobile } from "react-device-detect"

const About=(props)=>{

    return <Overlay clicked={props.aboutClicked} setClick={props.setAbout}>
        <div className={isMobile?classes.media:classes.wrapper}>
        <h3>
        We are dedicated to serve our customer with best service with professional experience and toolkits.</h3>
        <h3>Pro-cleaning has been estabulised since 2021 and currently expanding our business across greater North York region.</h3>
        <h3> We offer various cleaning options and flexable time schedule as your preference.</h3>
        <img src={pro_cleaning}/>
        </div>
        </Overlay>
}

export default About;