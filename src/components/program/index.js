import React,{memo} from 'react';
//样式
import {
    ProgramWrapper
} from './style';
//utils
import {resetImgSize} from "../../utils/data-format";

export default memo(function Programmer(props)
{
    const {index='',tag='',info}=props;
    return (
        <ProgramWrapper>
            <div>{index}</div>
            <div className="img-container">
                <img src={resetImgSize(info.coverUrl,40)} alt={info.name}/>
            </div>
            <div className="program-msg">
                <div className="text-overflow-single">{info.name}</div>
                <div className="text-overflow-single">{info.radio.name}</div>
            </div>
            {
                tag&&<div className='tag'>{tag}</div>
            }
        </ProgramWrapper>
    )
})