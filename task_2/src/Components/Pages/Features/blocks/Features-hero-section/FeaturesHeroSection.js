import './FeaturesHeroSection.css'
function FeaturesHeroSection(){
    return <>
        <div className="features-hero-section">
            <div>
                <h1>All the features you need</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                <input type="button" value="View pricing"/>
            </div>
            <div>
                <img src={ require("./res/Feature Hero Illustration.png") } alt=""/>
            </div>
        </div>
    </>;
}
export default FeaturesHeroSection;