import React, { Component } from 'react';
import './UserDialog.css'
import { signUp, signIn, sendPasswordResetEmail } from './leanCloud'
import SignInOrSignUp from './SignInOrSignUp'
import ForgotPasswordForm from './ForgotPasswordForm'
export default class UserDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'signInOrSignUp', // 'forgotPassword'
            formData: {
                email: '',
                username: '',
                password: '',
            },
            sendForgetEmail:false
        }
    }
    signUp() {//signUp(e) {
        // e.preventDefault()
        let { email, username, password } = this.state.formData
        let success = (user) => {
            this.props.onSignUp.call(null, user)
        }
        let error = (error) => {
            switch (error.code) {
                case 202:
                    alert('用户名已被占用')
                    break
                case 218:
                    alert('无效的密码，不允许空白密码')
                    break
                case 217:
                    alert('无效的用户名，不允许空白用户名')
                    break
                default:
                    alert(error)
                    break
            }
        }
        signUp(email, username, password, success, error)
    }
    signIn(e) {
        e.preventDefault()
        let { username, password } = this.state.formData
        let success = (user) => {
            this.props.onSignIn.call(null, user)
        }
        let error = (error) => {
            switch (error.code) {
                case 210:
                    alert('用户名与密码不匹配')
                    break
                case 211:
                    alert('找不到用户名')
                    break
                case 218:
                    alert('无效的密码，不允许空白密码')
                    break
                case 217:
                    alert('无效的用户名，不允许空白用户名')
                    break
                default:
                    alert(error)
                    break
            }
        }
        signIn(username, password, success, error)

        //test
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        this.setState(stateCopy)
        //test

    }
    changeFormData(key, e) {
        let stateCopy = JSON.parse(JSON.stringify(this.state))  // 用 JSON 深拷贝
        stateCopy.formData[key] = e.target.value
        this.setState(stateCopy)
    }
    switch(e) {
        this.setState({
            selected: e.target.value
        })
    }
    render() {
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    {
                        this.state.selectedTab === 'signInOrSignUp' ?
                            <SignInOrSignUp
                                formData={this.state.formData}
                                onSignIn={this.signIn.bind(this)}
                                onSignUp={this.signUp.bind(this)}
                                onChange={this.changeFormData.bind(this)}
                                onForgotPassword={this.showForgotPassword.bind(this)}
                            /> :
                            <ForgotPasswordForm
                                formData={this.state.formData}
                                onSubmit={this.resetPassword.bind(this)}
                                onChange={this.changeFormData.bind(this)}
                                onSignIn={this.returnToSignIn.bind(this)}
                            />}

                              {/* //测试找回密码发送提醒 */}
                            {
                                this.state.sendForgetEmail ===true?
                                <div className='forgetAlert' >重置密码邮件发送成功<span onClick={this.cancel.bind(this)}>确定</span></div>:null
                            }
                </div>
            </div>
        )
    }
    showForgotPassword() {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.selectedTab = 'forgotPassword'
        this.setState(stateCopy)
    }
    returnToSignIn() {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.selectedTab = 'signInOrSignUp'
        this.setState(stateCopy)
    }
    resetPassword(e) {
        e.preventDefault()
        sendPasswordResetEmail(this.state.formData.email)
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.sendForgetEmail = true;
        this.setState(stateCopy)
    }
    cancel(e){
        e.preventDefault();
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.sendForgetEmail = false;
        this.setState(stateCopy)
    }
}