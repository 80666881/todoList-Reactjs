import React from 'react';

export default function (props) {
    return (
        <form className="signIn" onSubmit={props.onSubmit} > {/* 登录*/}
            <div className="row">
                <label>用户名</label>
                <span>
                <i className="icon-account iconfont"></i>
                <input type="text" value={props.formData.username}
                    onChange={props.onChange.bind(null, 'username')} />
                </span>
            </div>
            <div className="row">
                <label>密码</label>
                <span>
                <i className="icon-login-pass iconfont"></i>
                <input type="password" value={props.formData.password}
                    onChange={props.onChange.bind(null, 'password')} />
                </span>
            </div>
            <div className="row actions">
                <button type="submit">登录</button>
                <button onClick={props.onForgotPassword}>忘记密码了？</button>
            </div>
        </form >
    )

}
