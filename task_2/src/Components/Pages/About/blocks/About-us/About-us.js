import './About-us.css'
function AboutUs(){
    return <>
        <div className="about-us">
            <div>
                <label htmlFor="">About us</label>
                <h1>Our designs solve problems</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div>
                <img src={require("./res/about_us1.png")} alt=""/>
            </div>
        </div>
    </>;
}
export default AboutUs;