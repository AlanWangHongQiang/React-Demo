import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props){
        super(props);
        this.hanleClick = this.hanleClick.bind(this);

    }

    hanleClick(){
        //console.log(this.props.index);
        this.props.deleteItem(this.props.index)
    }

    //1.我们的组件第一次存在于DOM中，函数并不会被执行
    //2.如果已经存在于DOM中，函数才会被执行（第二次）
    // componentWillReceiveProps(){
        
    //     console.log('componentWillReceiveProps')
    // }

    // componentWillUnmount(){
    //     console.log('componentWillUnmount')
    // }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }
        else{
            return false;
        }
        
    }

    render() {
        console.log('child- 渲染中')
        return (
        <li onClick={this.hanleClick}>{this.props.avname}service for you ,{this.props.content}</li>
        );
    }

}

XiaojiejieItem.propTypes = {
    avname : PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
XiaojiejieItem.defaultProps={
    avname:'songdaofeng'
}

export default XiaojiejieItem;