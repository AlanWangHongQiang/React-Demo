import React, { Component, Fragment } from 'react';
import XiaojiejieItem from './xiaojiejieItem'
import './style.css'
import Boss from './Boss'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }

    addList() {
        
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    inputChange(e) {
        this.setState({
            inputValue: this.input.value
            // e.target.value
        })
    }
    deleteItem(index) {
        let newList = [...this.state.list]
        newList.splice(index, 1);
        this.setState({
            list: newList
        })

    }

    //还没有挂载
    // componentWillMount(){
    //     console.log('组件将要挂载到页面的时刻，已经做过虚拟dom Diff')
    // }
    
    // componentDidMount(){
     //   请求远程数据的时候一般写在这//
    //     console.log('组件挂载完成，已经能看到')
    // }
    // //更新阶段的第一个方法，false后面就都没了
    // shouldComponentUpdate(){
    //     console.log('should component update')
    //     return true;
    // }
    // //
    // componentWillUpdate(){
    //     console.log('Component will update')
    // }
    // componentDidUpdate(){
    //    请求远程数据的时候一般写在这//
    //     console.log('componentDidUpdate')
    // }

    // componentWillReceiveProps(){
    //     //顶层组件无法触发这个方法
    //     console.log('componentWillReceiveProps')
    // }

    render() {
        // let s = +new Date()
        // while(2>1) {
        //     if (+new Date() > s + 5000) {
        //       break;
        //     }
        //   }
        console.log('渲染中')
        return (
            <Fragment>
                <div>
                    <label htmlFor='jspang'>Add Service</label>
                    <input 
                        ref = {(input)=>this.input = input}
                    id='jspang' className='input' value={this.state.inputValue} onChange={this.inputChange.bind(this)}></input>
                    <button onClick={this.addList.bind(this)}>Add</button>

                </div>
                
                <ul>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                /* <li key={index} onClick={this.deleteItem.bind(this,index)}>{item}</li> */
                                <CSSTransition
                                    timeout={2000}
                                    classNames='boss-text'
                                    unmountOnExit
                                    appear={true}
                                    key={index}
                                >
                                <XiaojiejieItem
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}

                                />

                                </CSSTransition>
                               
                            )

                        })
                    }
                     </TransitionGroup>
                </ul>
               
                <Boss/>
            </Fragment>
        )
    }
}

export default Xiaojiejie