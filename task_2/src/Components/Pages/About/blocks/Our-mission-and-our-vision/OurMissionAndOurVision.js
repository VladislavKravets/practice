import './OurMissionAndOurVision.css';

function OurMissionAndOurVision(){
    return <>
        <div className="our-mission-and-our-vision">
            <div className="our-mission">
                <div>
                    <label htmlFor="">Our Mission </label>
                    <h3>Inspire, Innovate, Share</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <img src={require("./res/our_mission.png")} alt=""/>
                </div>
            </div>
            <div className="our-vision">
                <div>
                    <img src={require("./res/our_vision.png")} alt=""/>
                </div>
                <div>
                    <label htmlFor="">Our Vision</label>
                    <h3>Laser focus</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </>;
}

export default OurMissionAndOurVision;