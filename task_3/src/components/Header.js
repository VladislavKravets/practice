import useSound from 'use-sound';

function Header(props) {
    const [play, { stop }] = useSound(props.audio, { volume: 0.5 });

    return (
        <div>
            <div className="header">
                <div className="container">
                    <a href='#/' onClick= {() => { stop(); play();}} style={{fontSize: "24px"}}>Flat UI Copy Colors</a>
                </div>
            </div>
        </div>
    );
}

export default Header;