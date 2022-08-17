import React from "react";

class Button extends React.Component
{
    shouldComponentUpdate(nextProps){
        const{change:currentChange, local: currentLocal} = this.props;
        const{change:nextChange, local: nextLocal} = nextProps;
        if(currentChange===nextChange && currentLocal===nextLocal)
        {
            return false;
        }
        return true;

    }
    render(){
        console.log("Button Component Render");
        const {change} = this.props;
        return(
            <button type='button' onClick={change}>Clock Here</button>
        )
    }
}

export default Button;