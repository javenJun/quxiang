import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd'
import './style.css';
import HomeModel from '../../components/HomeModelPage';
import { Link } from 'react-router-dom';
class Signup extends Component {
    constructor(props){
        super(props);
        this.title ='SIGNUP';
    }

    // button 处理错误类型
    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    passwordHasError(rule, value, callback){
        if(value.length<=0) return callback('请输入密码');
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/.test(value)) return callback('必须为6-16位的字母数字组合密码');
        callback();
    }
    // 数据提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (err) {
            message.error(values);
          }
        });
    }
    userInfoForm(){}
    // 组件渲染 
    render(){
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} 
            = this.props.form;
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const emailError = isFieldTouched('email') && getFieldError('email');
            
        return (
            <div className="screen un">
                <HomeModel 
                    title={this.title}
                    text = 'F O R &nbsp;A &nbsp;N E W  &nbsp;A C C O U N T'
                >
                </HomeModel>
                <div className="signup-form un" >
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <Form.Item className='form-item' validateStatus = { usernameError ? 'error' : '' } help = { usernameError || '' }>
                            { getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户姓名!' }],
                            })(
                                <Input size="large" className="form-control tr" placeholder="用户名"/>
                            )}
                        </Form.Item>

                        <Form.Item className='form-item' validateStatus = { emailError ? 'error' : '' } help = { emailError || '' }>
                            { getFieldDecorator('email', {
                                rules: [{ type: 'email', message: '请输入正确的邮箱!'}, 
                                {required: true, message: '请输入邮箱！'}],
                            })(
                                <Input size="large" className="form-control tr" placeholder="邮箱"/>
                            )
                            }
                        </Form.Item>
                        <Form.Item className='form-item' validateStatus = { passwordError ? 'error' : ''} help = { passwordError || ''} >
                            { getFieldDecorator('password', {
                                rules: [{validator: this.passwordHasError}],
                            })(
                                (<Input size="large" className="form-control password tr" placeholder="密码" type="password"/>)
                            )
                            }
                        </Form.Item>
                        <Form.Item>
                            <Button className="form-control button-control tr" type="primary" htmlType="submit"  disabled = {this.hasErrors(getFieldsError())}>注 册</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="option un">
                    <Link className="float-left" to='/help'>
                       <span>帮 助</span>
                    </Link>
                    <Link className="float-right" to='/signin'>
                        <span >已有账户</span>
                    </Link>
                </div>
            </div>
        )
    }
};
 const SignupForm = Form.create({ name: 'signup' })(Signup);

 export default  SignupForm;