import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert("Btn was clicked");
    }

    render() {
        const { bigColor, Cold } = this.props;

        return (
            <button
                className="btn"
                style={{ backgroundColor: bigColor }}
                onClick={this.handleClick}
            >
                {Cold}
            </button>
        );
    }
}

export default Button;