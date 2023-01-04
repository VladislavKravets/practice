import '../App.css';
import React, {Component} from 'react';

class Card extends Component {
    timer; // таймер смены иконок
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            emoji: this.props.emojis.slice(0, 1)
        }
        this.toggleHover = this.toggleHover.bind(this);
    }

    startTimer = () => {
        let i = 0;
        this.timer = setInterval(() => {
            this.setState({emoji: this.props.emojis[i]})
            i === this.props.emojis.length - 1 ? i=0 : i++;
        }, 500);
    }

    toggleHover() {
        this.setState(
            prevState => ({
                isHovered: !prevState.isHovered
            })
        );
        !this.state.isHovered ?
            this.startTimer()
            :
            clearInterval(this.timer);
        this.setState({emoji:this.props.emojis.slice(0, 1)});
    }

    render() {
        return (
            <div className="card" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <div className="colors">
                    {
                        this.props.color.map((item, index) => {
                            return <div key={index} className="color" style={{background: item.hex}}/>
                        })
                    }
                </div>
                <div className="card-flor">
                    <h3>{this.props.name}</h3>
                    <p> {this.state.emoji}</p>
                </div>
            </div>
        );
    }
}

export default Card;
