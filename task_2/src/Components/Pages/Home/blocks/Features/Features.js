import './Features.css';
import data from "./data";

const row1 = data.slice(0, 3);
const row2 = data.slice(3, 6);

function Features() {
    return (
        <>
            <div className="features">
                <div className="features-head">
                    <h4>
                        Features
                    </h4>
                    <h3>
                        Design that solves problems, one product at a time
                    </h3>
                </div>
                <table className="features-table">
                    <tbody>
                    <tr>
                        {row1.map((item, index) =>
                            <th>
                                <img src={item.image} alt=""/>
                                <h3>
                                    {item.title}
                                </h3>
                                <p>
                                    {item.text}
                                </p>
                            </th>
                        )};
                    </tr>
                    <tr>
                        {row2.map((item, index) =>
                            <th>
                                <img src={item.image} alt=""/>
                                <h3>
                                    {item.title}
                                </h3>
                                <p>
                                    {item.text}
                                </p>
                            </th>
                        )};
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Features;
