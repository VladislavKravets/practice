import './LogoSection.css';
import data from "./data";
function LogoSection(){
    return <>
        <div className="logo-section">
            <table>
                <tbody>
                <tr>
                    <th>
                        <h3>100.000+</h3>
                        <p>Figma Users</p>
                    </th>
                    {
                        data.map((item, index) =>
                            <th key={index}>
                                <img src={item.image} alt=""/>
                            </th>
                        )
                    }
                </tr>
                </tbody>
            </table>
        </div>
    </>;
}

export default LogoSection;