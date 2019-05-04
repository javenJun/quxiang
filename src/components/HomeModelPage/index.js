import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


HomeModel.propTypes = {
    title: PropTypes.string,
    text:PropTypes.string 
}
HomeModel.defaultProps = {
    title: 'SINGIN',
    text:'欢迎来到蜘趣(感受生活乐趣)'
}

export default function HomeModel(props){
    const { title , text } = props;
    return (
        <div className="text-signup">
            <h4 className=''>{title}</h4>
            <span className ='text-span'>{text}</span>
        </div>
    )
}