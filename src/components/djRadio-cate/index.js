import React,{memo} from 'react';
import PropTypes from 'prop-types';
import {
    DjRadioCateWrapper
} from './style'
import {resetImgSize} from "../../utils/data-format";
const DjRadioCate=function(props)
{
   const {info,title}=props;
    return (
        <DjRadioCateWrapper>
            <div className="header">
                <div className="title">{title}</div>
                <div className="more">更多 ></div>
            </div>
            <ul>
                {
                    info.slice(0,4).map((item,index)=>{
                        return (
                            <li key={item.id} >
                                <div className="img-container">
                                  <img src={resetImgSize(item.picUrl,120)} alt={item.name} />
                                </div>
                                <div class="right-msg">
                                    <div className="name">{item.name}</div>
                                    <div className="text">{item.rcmdtext}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </DjRadioCateWrapper>
    )
}
DjRadioCate.propTypes={
    title:PropTypes.string,
    info:PropTypes.array
}
DjRadioCate.default={
    title:'',
    info:[]
}
export default memo(DjRadioCate);

