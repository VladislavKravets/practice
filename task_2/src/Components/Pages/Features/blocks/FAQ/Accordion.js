import React, {useState} from 'react';

const Accordion = ({index, title, content}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>
                    <h6>{index}</h6>
                    <h6>{title}</h6>
                    {isActive ? <h6 style={{transform: "rotate(45deg)"}}>+</h6> : <h6>+</h6>}
                </div>
            </div>
            {isActive && <div className="accordion-content"><label>{content}</label></div>}
            <hr/>
        </div>
    );
};

export default Accordion;