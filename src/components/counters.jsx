import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    
    render() { 
        return ( 
            <div>
                {this.props.counters.map(counter => (
                    <Counter key={counter.id} counter={counter} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete}/>
                ))}
                <button onClick={this.props.onReset} className="btn btn-warning btn-sm m-2"> Reset </button>
            </div>
         );
    }
}
 
export default Counters;