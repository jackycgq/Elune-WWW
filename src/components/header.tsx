import * as React from "react";
import * as ReactDom from "react-dom";

class Header extends React.Component<any, any> {
    render() {
        return <i className="fa fa-home">Home</i>;
    }
}

ReactDom.render(<Header />, document.getElementById("app"));
