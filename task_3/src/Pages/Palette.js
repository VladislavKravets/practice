import '../App.css';
import {useParams} from "react-router-dom";
import colorData from '../components/palette.json';
import PaletteHeader from "../components/PaletteHeader";
import {useState} from "react";
import useSound from "use-sound";
import beep from "../assets/clickToModal.mp3"

const data = [
    {
        value: 1,
        label: "RGB"
    },
    {
        value: 2,
        label: "HEX"
    },
    /*{
        value: 3,
        label: "RGBA"
    }*/
];

function Palette() {
    const {nameId} = useParams()
    const [selectedOption, setSelectedOption] = useState(data[0]);
    const [active, setActive] = useState(false);
    const [color, setColor] = useState(false);
    const [play] = useSound( beep,{ volume: 0.5 });
    const [checkSound, setCheckSound] = useState(true);

    const filtered = colorData.filter(obj => { return obj.id === nameId });

    const hex2rgba = (hex) => `rgb(${hex.substr(1).match(/../g).map(x => +`0x${x}`)})`;

    return (
        <div>
            <PaletteHeader
                soundCheck={checkSound}
                updateSound={setCheckSound}

                selectedOption={selectedOption}
                selectedOptionData = {data}
                updateOption = {setSelectedOption}
            />
            <div className="palette">
                {
                    filtered[0].colors.map((colorMap, index) => {
                        return (<>
                                <div key={index} className="color" style={{background: colorMap.hex}}>
                                    <button onClick={
                                        () => {
                                            setColor(colorMap.hex)
                                            setActive(true);

                                            checkSound && play();

                                            setTimeout(() => {
                                                setActive(false);
                                            }, 2000);

                                            switch (selectedOption.label) {
                                                case data[0].label: setColor(hex2rgba(colorMap.hex)); break;
                                                case data[1].label: setColor(colorMap.hex); break;
                                                default: setColor(null);
                                            }

                                            navigator.clipboard.writeText(color);
                                        }
                                    }>
                                        Copy
                                    </button>
                                    <h1>{colorMap.name}</h1>
                                </div>
                                <div className={active && color != null ? 'overlay active' : 'overlay'} style={{background: color}}>
                                    <h1>COPY</h1>
                                    <h1>{color}</h1>
                                </div>
                            </>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Palette;