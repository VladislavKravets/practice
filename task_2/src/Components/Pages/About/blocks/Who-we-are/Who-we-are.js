import './Who-we-are.css'

function WhoWeAre(){
    return <>
        <div className="who-we-are">
            <label htmlFor="">Who we are</label>
            <div className="text-block">
                <div>
                    <h3>
                        Goal focussed
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div>
                    <h3>
                        Continuous improvement
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
        <img src={require("./res/who_we_are.png")} alt="" id="who-we-are-img"/>
    </>;
}

export default WhoWeAre;