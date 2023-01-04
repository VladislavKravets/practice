import './Benefits.css';
import data from "./data";

function Benefits(){
    return <>
        <div className="benefits">
            <h2>The benefits of working with our team</h2>
            <table>
                <tbody>
                <tr>
                {
                    data.map(item =>
                        <th key = {item.key}>
                            <img src={item.image} alt=""/>
                            <h6> {item.title} </h6>
                            <p> {item.text} </p>
                        </th>
                    )
                }
                </tr>
                </tbody>
            </table>
        </div>
    </>;
}

export default Benefits;