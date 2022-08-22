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
        
        const {change,local,show,enable} = this.props;
        // if(!enable){
        //     return null;
        // }
        return(
            <>
            <button type='button' onClick={()=>change(local)}>
                {local==='bn-BD' ? 'Click Her ' :' ক্লিক করুন'}
            </button>
            {show &&(<p> Hello</p>)}
            </>
        )
    }
}

export default Button;