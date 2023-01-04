import './Footer.css';

function Footer() {
    return (<>
            <div className="footer">
                <div className="text-block">
                    <div>
                        <h2>
                            {'{'}Finsweet < /h2>
                        <p>We are always open to discuss your project and improve your online presence.</p>
                    </div>
                    <div>
                        <h3>
                            Lets Talk!
                        </h3>
                        <p>We are always open to discuss your project, improve your online presence and help with your
                            UX/UI design
                            challenges.</p>
                        <a href="">
                            <img src={require('./res/facebook.png')} alt="facebook"/>
                        </a>
                        <a href=""><img src={require('./res/twiter.png')} alt="twiter"/></a>
                        <a href=""><img src={require('./res/instagram.png')} alt="instagram"/></a>
                        <a href=""><img src={require('./res/in.png')} alt="in"/></a>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="info-block">
                        <div>
                            <h3>Email me at</h3>
                            <p>contact@website.com</p>
                        </div>
                        <div>
                            <h3>Call us</h3>
                            <p>0927 6277 28525</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-nav">
                <div>
                    <p>Copyright 2022, Finsweet.com</p>
                </div>
                <div>
                    <a href="/">Home</a>
                    <a href="/about">About us</a>
                    <a href="/features">Features</a>
                    <a href="/error">Pricing</a>
                    <a href="/error">FAQ</a>
                    <a href="/error">Blog</a>
                </div>
            </div>
        </>
    );
}

export default Footer;
