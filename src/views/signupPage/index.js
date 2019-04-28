import React, { Component } from 'react';

export default class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            modal: {
                visible: false,
            }
        };
    }  

    render(){
        // const {visible} = this.props.modal;
        return (
            <div className="signup">
                <p>
                    欢迎来到蜘网！
                </p>
            </div>
        )
    }
};