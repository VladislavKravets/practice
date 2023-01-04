import './Home.css';

function Home() {
    return (
        <>
            <div className="home">
                <div className="home-left">
                    <h1>
                        Building stellar websites for early startups
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="left-button-block">
                        <input type="button" value="View our work"/>
                        <a href="">View Pricing →</a>
                    </div>
                </div>
                <div className="home-right">
                    <img src={require('./res/Illustration.png')} alt=""/>
                </div>
            </div>
        </>
    );
}

export default Home;
