import React, { Component } from "react";
import profilePic from "../../media/ts-profile-picture.png";
import "./profile.css";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Travis"
        };
    }

    changeName = () => {
        const list = ["Josh", "Travis", "Hunter", "Zach", "Sean"];
        this.setState({
            name: list[Math.floor(Math.random() * 5)]
        });
    };

    render() {
        return (
            <div className="profile">
                <img src={profilePic} alt="self" />
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Edit Name</button>
            </div>
        );
    }
}
