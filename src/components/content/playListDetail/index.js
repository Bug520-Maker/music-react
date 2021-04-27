//歌单详情页
import React,{memo,useEffect,useState} from 'react';
import {PlayListWrapper,LeftContent,RightContent} from './style'
//网络请求
import {getPlayListDetail} from '../../../network/playList/index';
//function
import {resetImgSize,formatDate} from "../../../utils/data-format";
import playlistTag from '../../../assets/img/playlistTag.png'
export default memo(function PlayListDetail(props){
    //props state
    const [playList,setPlayList]=useState([]);
    useEffect(()=>{
        const {playlistId}=props.location.state
        console.log(playlistId);
        if(playlistId)
        {
            getPlayListDetail(playlistId).then(data=>{
                console.log(data.playlist);
                if(data.playlist)
                {
                    setPlayList(data.playlist);
                }
            })
        }
    },[props.location.state]);
    return (
        <PlayListWrapper>
            <LeftContent>
                <div className="header">
                    <div className="cover">
                        <img src={resetImgSize(playList.coverImgUrl,208)}/>
                    </div>
                    <div className="msg">
                        <h2 className="title">
                            <img src={playlistTag} />
                            {playList.name}
                        </h2>
                        <div className="user-msg">
                            <div className="avatar">
                                <img src={resetImgSize(playList.creator.avatarUrl,35)} />
                            </div>
                            <div className="user-name">{playList.creator.nickname}</div>
                            <div className="create-time">{formatDate(playList.createTime,"MM-dd h:mm:ss")}</div>
                        </div>
                    </div>
                </div>
            </LeftContent>
            <RightContent>
                我是歌单详情页
            </RightContent>
        </PlayListWrapper>
    )
})