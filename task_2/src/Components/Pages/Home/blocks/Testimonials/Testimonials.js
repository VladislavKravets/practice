import './Testimonials.css';
import reviews from "./reviews.json";
import ButtonsUpAndDown from './controlButtons';
function Testimonials() {
    return (
        <>
            <div className="testimonials">
                <div className="testimonials-left">
                    <h5>
                        What our clients say about us
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                    </p>
                </div>
                {
                    reviews.map((item, index)=>
                        <div key={index} className="testimonials-right">
                            <h5>
                                {item.reviewText}
                            </h5>
                            <div>
                                <img src={item.img} alt=""/>
                                <h4>
                                    {item.author}
                                    <p> {item.position}</p>
                                </h4>
                            </div>
                        </div>
                    )
                }
                <ButtonsUpAndDown/>
            </div>
        </>
    );
}

export default Testimonials;
