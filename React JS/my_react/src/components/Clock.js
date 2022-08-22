import { render } from '@testing-library/react'
import React from 'react'
import Button from './Button';

class Clock extends React.Component {
    state = {date: new Date(), local:"bn-BD"};


    // constructor(props)
    // {
    //     super(props);
    //     this.state ={ date: new Date(), local: 'bn-BD'};
    //     this.handleClick = this.handleClick.bind(this);
    // }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    
    tick() {
        this.setState({
            date: new Date(),
        });
    };
    
    handleClick =(local)=> {
        this.setState({
           local
        });
    };
    
    render() {
        
        const { date, local } = this.state;
        // let button;
        // if(local==='bn-Bd'){
        //   button =  (<Button change={this.handleClick} local="en-us">
        //     click here
        //   </Button>);
        // }
        // else
        // {
        //     button = (<Button change={this.handleClick} local="bn-BD">
        //     click here
        //   </Button>);
        // }
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(local)}</span>
                </h1>
            {local ==='bn-BD' ? (<Button change={this.handleClick} local="en-us" show={false} enable={true}/>) : (<Button change={this.handleClick} local="bn-BD" show={true} enable={false}/>)}
          </div>
                
        );
    }
}
  

export default Clock;
