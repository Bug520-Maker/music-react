import React,{memo} from 'react';
import {useDispatch} from "react-redux";

import {resetImgSize} from "../../utils/data-format";
import {formatDate} from "../../utils/data-format";
import {getSongDetailAction} from '../../views/play-bar/store/actionCreator'

import {
    SongListWrapper
} from './style'

export default memo(function SongList(props){
    const songs=props.songs;
    //redux hook
    const dispatch=useDispatch();
    //function handle
    const playSong=(item)=>{
        dispatch(getSongDetailAction(item.id))
    }
    return (
        <SongListWrapper>
            <div className="song-list-header">
                <div className="index"> </div>
                <div className="title">标题</div>
                <div className="duration">时长</div>
                <div className="artist">歌手</div>
            </div>
            <ul className="song-lists">
                {
                    songs&&songs.map((item,index)=>{
                        return (
                            <li key={item.id}>
                                <div className="index">{index+1>9? index+1: "0"+(index+1)}</div>
                                <div className="song-title">
                                    <div className="img-container">
                                        <img src={resetImgSize(item.al.picUrl,50)} />
                                    </div>
                                    <i className="play-icon" onClick={e=>playSong(item)}> </i>
                                    <div className="name">{item.name}</div>
                                </div>
                                <div className="duration">
                                    <div>{formatDate(item.dt,"mm:ss")}</div>
                                    <div className="control-btn">
                                        <i className="add"> </i>
                                        <i className="subscribe"> </i>
                                        <i className="share"> </i>
                                        <i className="download"> </i>
                                    </div>
                                </div>
                                <div className="artist text-overflow-single">
                                    {
                                        item.ar.map((item,index)=>{
                                            return item.name
                                        }).join("/")
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </SongListWrapper>
    )
})