import React,{memo} from 'react';
import PropsTypes from 'prop-types';

import {RecommendTheme} from './style';

const RecTheme=memo(function(props){
    const {title,keywords}=props;
    return (
        <RecommendTheme>
            <div className="icon"> </div>
            <h3 className="title">{title}</h3>
            {
                keywords.map((item,index)=>{
                    return (
                        <div className="item" key={item}>
                            <div >{item}</div>
                            <span>|</span>
                        </div>
                    )
                })
            }
            <div className="more">更多
            </div>
        </RecommendTheme>
    )
})
RecTheme.defaultProps={
    keywords:[]
}
RecTheme.propTypes={
    title:PropsTypes.string.isRequired,
    keywords:PropsTypes.array
}
export default RecTheme;
