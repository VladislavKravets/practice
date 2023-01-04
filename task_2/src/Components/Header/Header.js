import './Header.css';

function Header() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <a href="/">{'{'}Finsweet< /a>
                </div>
                <div className="navbar-right">
                    <a href="/">Home</a>
                    <a href="/about">About us</a>
                    <a href="/features">Features</a>
                    <a href="/error">Pricing</a>
                    <a href="/error">FAQ</a>
                    <a href="/error">Blog</a>
                    <input type="button" value="Contact us"/>
                </div>
            </div>
        </>
    );
}

export default Header;
