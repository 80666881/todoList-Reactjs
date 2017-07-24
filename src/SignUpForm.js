import React from 'react';
import "./iconfont/iconfont.css"

export default function (props) {
    return (
        <form className="signUp" onSubmit={/*props.onSubmit.bind(this)*/signUpCheck} > {/* 注册*/}
            <div className="row">
                <label>邮箱</label>
                <span>
                    <i className="iconfont icon-Email"></i>
                <input type="text" value={props.formData.email}
                    onChange={props.onChange.bind(null, 'email')} />
                </span>
            </div>
            <div className="row">
                <label>用户名</label>
                <span>
                <i className="iconfont icon-zhuce"></i>
                <input type="text" value={props.formData.username}
                    onChange={props.onChange.bind(null, 'username')}/>
                {/* bind 不仅可以绑定 this，还可以绑定第一个参数 */}
                </span>
            </div>
            <div className="row">
                
                <label>密码</label>
                <span>
                    <i className="iconfont icon-password3"></i>
                    
                <input type="password" value={props.formData.password}
                    onChange={props.onChange.bind(null, 'password')} />
                </span>
            </div>
            <div className="row actions">
                <button type="submit">注册</button>
            </div>
        </form >
    )
    function signUpCheck(e) {
        e.preventDefault()
        var email = props.formData.email
        var regEmail = /\w*@\w+\.[a-zA-Z]+/

        var username = props.formData.username
        var regUsername = /([\s\S]){3,}/

        var password = props.formData.password
        var regPassword = /([\s\S]){6,}/
        if(email ===''){
            alert('请输入邮箱');
            return;
        }
        if(regEmail.test(email)===false){
            alert('请输入正确的邮箱格式')
            return;
        }
        if(regUsername.test(username)===false){
            alert('请输入至少三位数的用户名')
            return;
        }
        if(regPassword.test(password)===false){
            alert('请输入至少六位数的密码')
            return;
        }
        props.onSubmit.call(this)
    }
}