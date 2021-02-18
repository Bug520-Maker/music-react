import React,{memo} from 'react';
import {RankItemWrapper} from "./style";
import {resetImgSize} from "../../utils/data-format";
import {formatDate} from "../../utils/data-format";

export default memo(function RankItem(props){
    const {coverImgUrl,name,updateTime}=props.info;
    return (
        <RankItemWrapper>
            <div className="img-container">
                <img src={resetImgSize(coverImgUrl,40)} alt="暂无图片" />
            </div>
            <div>
                <div className="rank-name">
                    {name}
                </div>
                <div className="update-time">
                    更新时间: {formatDate(updateTime,"MM月dd日")}
                </div>
            </div>
        </RankItemWrapper>
    )
})