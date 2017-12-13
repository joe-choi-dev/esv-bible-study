import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class HelloWorld extends React.Component {

    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

export default HelloWorld;
