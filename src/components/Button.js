import { render } from "@testing-library/react";
import React, {Component} from "react";

class Button extends Component{
    constructor(props){
        super(props)
    }
    handleClick () {alert('Btn was clicked')}
        render() {
            const logColor = this.props.bigColor;
            return(
                <button className="btn"
                style={{backgroundColor:bigColor}}
                onClick={this.handleClick}>{this.props.Label}</button>
            );
        }
    }
    export default Button;