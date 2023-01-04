let i = 0;
const divs = document.getElementsByClassName('testimonials-right');
const upClick = () => {
    divs[i].style.display = "none";
    i = (i > 0) ? i - 1 : divs.length - 1;
    divs[i].style.display = "block";
}
const downClick = () => {
    divs[i].style.display = "none";
    i = (i < (divs.length - 1)) ? i + 1 : 0;
    divs[i].style.display = "block";
}

function controlButtons(){
    return <>
        <div className="buttons">
            <button id="down" onClick={upClick}>
                <img src={require('./res/arrow.png')} alt=""/>
            </button>
            <button id="up" onClick={downClick}>
                <img src={require('./res/arrow.png')} alt=""/>
            </button>
        </div>
    </>;
}

export default controlButtons;