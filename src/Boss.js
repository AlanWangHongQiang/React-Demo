import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isShow : true
        }
        this.toToggole = this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>   
                {/* <div className={this.state.isShow?'show':'hide'}>Boss level task</div> */}
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit
                    >
                <div>Boss level task</div>
                </CSSTransition>
                
                <div><button onClick={this.toToggole}>Call Boss</button></div>
            </div>
         );
    }

    toToggole(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
 
export default Boss;