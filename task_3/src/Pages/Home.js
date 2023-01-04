import Header from "../components/Header";
import clownBoop from "../assets/clown-horn.mp3";
import colorData from "../components/palette.json";
import Card from "../components/Card";
import Footer from "../components/Footer";
import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <Header audio={clownBoop}/>
                <div className="container">
                    <div className="wrapper">
                        {
                            colorData.map((item, index) => {
                                return <>
                                    <a href={"/palette/" + item.id}>
                                        <Card onClick={"/palette/" + item.id} key={index} name={item.name} color={item.colors} emojis={item.emojis}/>
                                    </a>
                                </>
                            })
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;
