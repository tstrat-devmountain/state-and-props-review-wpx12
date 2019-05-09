import React, { Component } from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Repo from "./components/Repo/Repo";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repoList: [
                {
                    title: "personal-project",
                    description: "FurBook was cool",
                    language: "JavaScript"
                },
                {
                    title: "noDb-project",
                    description: "you got dis",
                    language: "React BOIZ"
                },
                {
                    title: "Group-Project",
                    description: "I think i kinda like these peepz",
                    language: "ALL THE THINGS"
                },
                {
                    title: "Group-Project",
                    description: "I think i kinda like these peepz",
                    language: "ALL THE THINGS"
                },
                {
                    title: "Group-Project",
                    description: "I think i kinda like these peepz",
                    language: "ALL THE THINGS"
                },
                {
                    title: "Group-Project",
                    description: "I think i kinda like these peepz",
                    language: "ALL THE THINGS"
                },
                {
                    title: "Group-Project",
                    description: "I think i kinda like these peepz",
                    language: "ALL THE THINGS"
                },
                {
                    title: "Group-Project",
                    description: "I think i kinda like these peepz",
                    language: "ALL THE THINGS"
                },
                {
                    title: "Group-Project",
                    description: "I think i kinda like these peepz",
                    language: "ALL THE THINGS"
                },
                {
                    title: "Group-Project",
                    description: "I think i kinda like these peepz",
                    language: "ALL THE THINGS"
                }
            ]
        };
    }
    render() {
        const { repoList } = this.state;
        const repos = repoList.map(function(element, index) {
            return <Repo key={index} project={element} />;
        });

        // console.log(repos);

        return (
            <div className="App">
                <Header />
                <Profile />
                <button>{"<"}</button>
                {repos}
            </div>
        );
    }
}

export default App;
