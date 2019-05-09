import React, { Component } from "react";
import "./repo.css";

export default class Repo extends Component {
    render() {
        const { title, description, language } = this.props.project;
        return (
            <div className="repo">
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h2>{language}</h2>
            </div>
        );
    }
}
