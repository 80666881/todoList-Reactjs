
import React, { Component } from 'react';
import './TodoItem.css'
import { Button } from 'antd'
export default class TodoItem extends Component {
    render() {
        return (
            
            <div className="TodoItem">  
                <Button type="primary">Button</Button>   
                <input type="checkbox" checked={this.props.todo.status === 'completed'}
                    onChange={this.toggle.bind(this)} />
                <span className="title">{this.props.todo.title}</span>
                <button onClick={this.delete.bind(this)} className="iconfont icon-delete1"></button>
            </div >
        )
    }
    toggle(e) {
        this.props.onToggle(e, this.props.todo)
    }
    delete(e) {
        this.props.onDelete(e, this.props.todo)
    }
}