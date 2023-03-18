import React from "react";

class Name extends React.Component{

    constructor(pros){
        super(pros);

        this.state = {}
    };

render(){
    return <div>
        <h2>{this.props.name}</h2>
    </div>
}

}
Name.defaultProps = {
    name: "OM",
}

export default Name;