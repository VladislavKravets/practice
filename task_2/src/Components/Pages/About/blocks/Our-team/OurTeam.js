import './OurTeam.css';
import data from './data';

function OurTeam() {
    return <>
        <div className="our-team">
            <h2>Meet our team</h2>
            <table>
                <tr>
                    {
                        data.map(
                            (item) =>
                                <th>
                                    <img src={item.image} alt=""/>
                                    <h6>{item.name}</h6>
                                    <p>{item.pos}</p>
                                </th>
                        )
                    }
                </tr>
            </table>
        </div>
    </>;
}

export default OurTeam;