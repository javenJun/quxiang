import React, { Component } from 'react';
import { Form, Input, Button } from 'antd'
import './style.css';
class Signup extends Component {

    // button 处理错误类型
    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    // 数据提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    // 组件渲染 
    render(){
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} 
            = this.props.form;
          const usernameError = isFieldTouched('username') && getFieldError('username');
          const passwordError = isFieldTouched('password') && getFieldError('password');
          const emailError = isFieldTouched('email') && getFieldError('email');
        return (
            <div class="screen un">
                <h4 className='text-signup'>SIGNUP</h4>
                <div className="signup-form un" >
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <Form.Item validateStatus = { usernameError ? 'error' : '' } help = { usernameError || '' }>
                            { getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户姓名!' }],
                            })
                            (
                                <Input size="large" className="form-control tr" placeholder="用户名"/>
                            )}
                        </Form.Item>

                        <Form.Item validateStatus = { emailError ? 'error' : '' } help = { emailError || '' }>
                            { getFieldDecorator('email', {
                                rules: [{ type: 'email', message: '请输入正确的邮箱!'}, 
                                {required: true, message: '请输入邮箱！'}],
                            })
                            (
                                <Input size="large" className="form-control tr" placeholder="邮箱"> </Input>
                            )
                            }
                        </Form.Item>
                        <Form.Item validateStatus = { passwordError ? 'error' : ''} help = { passwordError || ''} >
                            { getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })
                            (
                                <Input size="large" className="form-control tr" placeholder="密码" type="password"></Input>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button className="form-control button-control tr" type="primary" htmlType="submit"  disabled = {this.hasErrors(getFieldsError())}>注 册</Button>
                        </Form.Item>
            
                    </Form>
                </div>
            </div>
        )
    }
};
 const SignupForm = Form.create({ name: 'signup' })(Signup);

 export default  SignupForm;