import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd'
import './style.css';
import HomeModel from '../../components/HomeModelPage';
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
        <HomeModel 
            title= {this.title}
            text= {this.text   }
        >
           <div className="signup-form un" >
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item validateStatus = { emailError ? 'error' : '' } help = { emailError || '' }>
                        { getFieldDecorator('email', {
                            rules: [{ type: 'email', message: '请输入正确的邮箱!'}, 
                            {required: true, message: '请输入邮箱！'}],
                        })(
                            <Input size="large" className="form-control tr" placeholder="邮箱"/>
                        )
                        }
                    </Form.Item>
                    <Form.Item validateStatus = { passwordError ? 'error' : ''} help = { passwordError || ''} >
                        { getFieldDecorator('password', {
                            rules: [{ required: true, min:6, max:16, message: '请输入6-16英文数字组合密码!' }],
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
        </HomeModel>
        )
        
    }
}
const SigninForm = Form.create({ name: 'signin' })(Signin);
export default SigninForm;