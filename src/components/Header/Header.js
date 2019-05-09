import React, { Component } from "react";
import githubIcon from "../../media/githubIcon.png";
import bell from "../../media/bellIcon.gif";
import plus from "../../media/plus.png";
import profilepic from "../../media/ts-profile-picture.png";
import "./header.css";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(val) {
        this.setState({
            input: val
        });
    }

    render() {
        return (
            <header className="header">
                <div className="header--inner-div">
                    <img
                        className="header--left-image"
                        alt="something"
                        src={githubIcon}
                    />
                    <input
                        value={this.state.input}
                        onChange={event =>
                            this.handleChange(event.target.value)
                        }
                    />
                    <ul>
                        <li>Pull Request</li>
                        <li>Issues</li>
                        <li>Marketplace</li>
                        <li>Explore</li>
                    </ul>
                </div>
                <h1>{this.state.input}</h1>

                <div className="header--inner-div">
                    <img
                        className="header--right-image"
                        alt="something"
                        src={bell}
                    />
                    <img
                        className="header--right-image"
                        alt="something"
                        src={plus}
                    />
                    <img
                        className="header--right-image"
                        alt="something"
                        src={profilepic}
                    />
                </div>
            </header>
        );
    }
}

export default Header;
