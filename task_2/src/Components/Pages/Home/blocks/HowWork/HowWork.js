import './HowWork.css';

function HowWork() {
    return (
        <>
            <div className="how-work-block">
                <div className="how-work-block-left">
                    <h2>
                        How we work
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <a href="">
                        Get in touch with us →
                    </a>
                </div>
                <div className="how-work-block-right">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <img src={require('./res/pointer 1.png')} alt=""/>
                                <h3 id="head">
                                    Strategy
                                </h3>
                                <p id="text">
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                </p>
                            </td>
                            <td>
                                <img src={require('./res/pointer 2.png')} alt=""/>
                                <h3 id="head">
                                    Wireframing
                                </h3>
                                <p id="text">
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={require('./res/pointer 3.png')} alt=""/>
                                <h3 id="head">
                                    Design
                                </h3>
                                <p id="text">
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                </p>
                            </td>
                            <td>
                                <img src={require('./res/pointer 4.png')} alt=""/>
                                <h3 id="head">
                                    Development
                                </h3>
                                <p id="text">
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default HowWork;
