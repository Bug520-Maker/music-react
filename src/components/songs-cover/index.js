import React,{memo} from 'react';
import {HotRec} from './style';
import {resetImgSize} from "../../utils/data-format";
import {formatPC} from "../../utils/data-format";

export default memo(function SongsCover(props){
    const {playList}=props;
    //console.log(playList)
    return (
        <HotRec>
            <div className="img-container">
                <img src={resetImgSize(playList.picUrl||playList.coverImgUrl,140)} alt="暂无图片"/>
                <div className="cover"> </div>
                <div className="play">
                    <i className="headset"> </i>
                    <span className="play-count">{formatPC(playList.playCount)}</span>
                    <i className="play-cion"> </i>
                </div>
            </div>
            <div className="state text-overflow-single">
                {playList.name}
            </div>
            {
                playList.creator&&<div className="creator">
                    by&nbsp;
                    {
                        playList.creator&&playList.creator.nickname
                    }
                </div>
            }
        </HotRec>
    )
})