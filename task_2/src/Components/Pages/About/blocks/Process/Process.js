import './Process.css'
import data from './data';

function Process() {
    return <>
        <div className="process">
            <h2>The process we follow</h2>
            <table>
                <tr>
                    {
                        data.map((item, index) =>
                            <th key={index}>
                                <img src={item.image} alt=""/>
                                <h6>{item.title}</h6>
                                <p>{item.text}</p>
                            </th>
                        )
                    }
                </tr>
            </table>
        </div>
    </>;
}

export default Process;