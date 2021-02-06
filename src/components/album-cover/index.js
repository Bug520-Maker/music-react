import React,{memo} from 'react';
import {AlbumCoverWrapper} from './style'
import {resetImgSize} from "../../utils/data-format";

export default memo(function AlbumCover(props){
    const {albumInfo,height,width,bgc}=props;
    return (
        <AlbumCoverWrapper height={height} width={width} bgc={bgc}>
            <div className="album-img" title={albumInfo.name}>
                <div className="play"></div>
                <div className="cover"></div>
                <img src={resetImgSize(albumInfo.picUrl,height)} />
            </div>
            <div className="album-state text-overflow-single">
                {albumInfo.name}
            </div>
            <div className="album-creator text-overflow-single">
                {albumInfo.artists[0].name}
            </div>
        </AlbumCoverWrapper>
    )
})