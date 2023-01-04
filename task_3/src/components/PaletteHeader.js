import Select from 'react-select';



function PaletteHeader(props) {
    return (
        <div className="palette-header">
            <div>
                <a href="/"> {"← Back"} </a>
            </div>
            <div className="drop-button">
                <Select
                    value={props.selectedOption}
                    options={props.selectedOptionData}
                    onChange={(event) => { props.updateOption(event); } }
                />
            </div>
            <div>
                <button type="checkbox"
                        onClick={() => {
                            props.updateSound(!props.soundCheck);
                        }}
                        className={props.soundCheck ? 'button' : 'active-button'}
                >
                    Sound {props.soundCheck ? "ON" : "OFF"}
                </button>
            </div>
        </div>
    );
}

export default PaletteHeader;