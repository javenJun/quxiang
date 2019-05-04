import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd'
import './style.css';
import HomeModel from '../../components/HomeModelPage';
import { Link } from 'react-router-dom';
class Signin extends Component {
    constructor(props){
        super(props);
        this.title ='SIGNIN';
        this.text = '欢迎来到蜘趣，感受生活乐趣'
    }

    // button 处理错误类型
    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    // 数据提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (err) {
            message.error(values);
          }
          console.log(values);
        });
    }

    render(){
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} 
            = this.props.form;
        const emailError = isFieldTouched('email') && getFieldError('email');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return(
        <div className="screen un">
            <HomeModel 
                title= {this.title}
                text= {this.text}
            >
            </HomeModel>
            <div className="signin-form un" >
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item className='form-item' validateStatus = { emailError ? 'error' : '' } help = { emailError || '' } >
                        { getFieldDecorator('email', {
                            rules: [{ type: 'email', message: '请输入正确的邮箱!'}, 
                            {required: true, message: '请输入邮箱！'}],
                        })(
                            <Input size="large" className="form-control tr" placeholder="邮箱"/>
                        )
                        }
                    </Form.Item>
                    <Form.Item  className='form-item' validateStatus = { passwordError ? 'error' : ''} help = { passwordError || ''} >
                        { getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            (<Input size="large" className="form-control password tr" placeholder="密码" type="password"/>)
                        )
                        }
                    </Form.Item>
                    <Form.Item>
                        <Button className="form-control button-control tr" type="primary" htmlType="submit"  disabled = {this.hasErrors(getFieldsError())}>登 入</Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="options un">
                <Link className='float-left' to='/signup'>
                    <span >忘记密码</span>
                </Link>
                <Link className='float-right' to='/signup'>
                    <span >用户注册</span>
                </Link>
            </div>
        </div>
      
        )
        
    }
}
const SigninForm = Form.create({ name: 'signin' })(Signin);
export default SigninForm;