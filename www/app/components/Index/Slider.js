
import React from 'react'


export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            max: 0,
            index: 0
        };
        this.state.max = this.props.children.length;
        this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
    }

    dotClicked(e){
        this.setState({ index: parseInt(e.target.dataset.index, 10) });//find index of dot
        this.setState({
            active: this.state.index
        });
    };

    isActive(value) {
        if (this.state.active === value) {
            return 'active';
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.intervalBetweenSlides(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    intervalBetweenSlides() {
        if (this.state.active === this.state.max - 1) {
            this.state.active = 0;
        } else {
            this.state.active++;
        }
        this.setState({
            active: this.state.active
        });
    }

    nextOne(e) {
        this.setState({ index: parseInt(e.target.dataset.index, 10) });
        if (this.state.active < this.state.max - 1) {
            this.setState({
                active: this.state.active + 1
            });
        }
        else {
            this.state.active = 0;
        }
    }

    prevOne() {
        if (this.state.active > 0) {
            this.setState({
                active: this.state.active - 1
            });
        }
        else {
            this.state.active = this.state.max;
        }
    }

    setSliderStyles() {
        return {
            left: -100 * this.state.active + "%"
        }
    }

    render() {
        return (
            <div className="slider">
                <div className="slider-container">
                    <div
                        className="slider-innerContainer"
                        style={this.setSliderStyles()}>
                        {this.props.children.map((child, index, activ) =>
                            <div key={index} >
                                {child}
                            </div>)
                        }

                    </div>
                </div>
                <div className="controler">
                    <div onClick={this.prevOne.bind(this)} className="slid__arrow back" alt="prev slid">
                        &#x2039;
                </div>
                    <div onClick={this.nextOne.bind(this)} className="slid__arrow next" alt="next slid">
                        &#8250;
                </div>
                </div>
            </div>
        );
    }
}