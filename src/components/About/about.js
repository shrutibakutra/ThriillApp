import CardThrill from "../../featureComponents/Card/card";
import "./about.scss";
import { faGraduationCap, faVideo, faBook, faBullseye } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return(
        <div className="about" id="features">
            <CardThrill src={faBullseye} title={"Interactive Tests"} cardText={"Train your ears, eyes, and mind with dynamic exercises that build essential music theory basics"}/>
            <CardThrill src={faGraduationCap}title={"Learn Through Play"} cardText={"Enjoy a fun, game-like way to learn music! With a clear structure, it's great for all ages, from beginners to seasoned learners."}/>
            <CardThrill src={faVideo} title={"Visual Learning"} cardText={"Enjoy easy-to-follow video lessons that break down complex topics. Rewatch anytime, at your own pace!"}/>
            <CardThrill src={faBook} title={"On-the-Go Reading"} cardText={"Prefer reading? All topics are available in text format, so you can dive in whenever it suits you"}/>
        </div>
    );
}
export default About;
