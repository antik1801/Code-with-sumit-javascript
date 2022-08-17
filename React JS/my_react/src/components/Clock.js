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
    
    handleClick =()=> {
        this.setState({
           local:'en-US',
        });
    };
    
    render() {
        console.log("Clock component render");
        const { date, local } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(local)}</span>
                </h1>
              <Button change={this.handleClick} local="en-us">
                click here
              </Button>
            </div>
        );
    }
}
  

export default Clock;
