import React,{memo,useEffect,useRef,useState,useCallback} from 'react';
import { Slider} from 'antd';

import {PlayWrapper,Content,ControlBtn,Progress,RightControl} from './style'

import {resetImgSize} from "../../utils/data-format";
import {formatDate} from "../../utils/data-format";
import {getPlaySong} from '../../utils/playMusic-util';
import {getSongDetailAction} from "./store/actionCreator";
import {useDispatch, useSelector} from "react-redux";
export default memo(function PlayPage(){
    //redux-hook
    const {currentSong}=useSelector(state=>({
        currentSong:state.getIn(['playPageReducer','currentSong'])
    }))
    const dispatch=useDispatch()

    //other hook
    const [currentTime,setCurrentTime]=useState(0);
    const [progress,setProgress]=useState(0);
    const [isChanging,setChange]=useState(false);
    useEffect(()=>{
        dispatch(getSongDetailAction(167876))
    },[dispatch])
    const audioPlay=useRef();
    //other
    const picUrl=currentSong.al&&currentSong.al.picUrl;
    const artistName=currentSong.ar&&currentSong.ar[0].name;
    const playMusic=()=>{
        audioPlay.current.src=getPlaySong(167876);
        audioPlay.current.play();
        audioPlay.current.volume=0.05;
    }
    const getCurrentTime=(e)=>{
        setCurrentTime(e.target.currentTime*1000);
        if(!isChanging)
        {
            setProgress(currentTime/currentSong.dt*100);
        }
    }
    const slideChange=useCallback((value)=>{
        setChange(true)
        setProgress(value);
        setCurrentTime(value/100*currentSong.dt)

    },[currentSong.dt])

    const afterChange=useCallback((value)=>{
        audioPlay.current.currentTime=value/100*currentSong.dt/1000;
        setCurrentTime(value/100*currentSong.dt)
        setChange(false);
    },[currentSong.dt])
    return (
        <PlayWrapper>
            <Content>
                <ControlBtn>
                    <div className='prev'>前一首</div>
                    <div className='play' onClick={e=>playMusic()}>暂停/播放</div>
                    <div className="next">下一首</div>
                </ControlBtn>
                <Progress className="clearfix">
                    <div className="img-container">
                        <div className="cover">歌曲封面</div>
                        <img src={resetImgSize(picUrl,35)} alt="暂无图片"/>
                    </div>
                    <div className="flag-word clearfix">{/*设置歌手名字，歌曲信息*/}
                        <div className="song-msg clearfix">
                            <span className='song-name'>{currentSong.name}</span>
                            <span className="mv"> </span>
                            <span className="artist-name">{artistName}</span>
                        </div>
                        <Slider defaultValue={30} value={progress} tooltipVisible={false} onChange={slideChange} onAfterChange={afterChange}/>
                    </div>
                    <div className="time">
                        <div className="current">{formatDate(currentTime,'mm:ss')}</div> /
                        <div className="duration">{formatDate(currentSong.dt,'mm:ss')}</div>
                    </div>
                </Progress>
                <RightControl>
                    <div>
                        <div className='collect'></div>
                        <div className="share"></div>
                    </div>
                    <div>
                        <div className="vol"></div>
                        <div className="loop"></div>
                        <div className="list"></div>
                    </div>
                </RightControl>
                <audio ref={audioPlay} onTimeUpdate={getCurrentTime}/>
            </Content>
        </PlayWrapper>
    )
})