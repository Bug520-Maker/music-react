import React,{memo,useEffect,useRef,useState,useCallback} from 'react';
import {withRouter} from "react-router-dom";
import { Slider} from 'antd';

import {PlayWrapper,Content,ControlBtn,Progress,RightControl} from './style'

import {resetImgSize} from "../../utils/data-format";
import {formatDate} from "../../utils/data-format";
import {getPlaySong} from '../../utils/playMusic-util';
import {
    getSongDetailAction,
    changePlayQueueAction,
    changeCurrentSongAction,
    changeLyricItemAction
} from "./store/actionCreator";
import {useDispatch, useSelector} from "react-redux";

function PlayBar(props){
    //redux-hook
    const {currentSong,playQueue,playList,lyric,lyricItem}=useSelector(state=>({
        currentSong:state.getIn(['playPageReducer','currentSong']),
        playQueue:state.getIn(['playPageReducer','playQueue']),
        playList:state.getIn(['playPageReducer','playList']),
        lyric:state.getIn(['playPageReducer','lyric']),
        lyricItem:state.getIn(['playPageReducer','lyricItem'])
    }))
    const dispatch=useDispatch()

    //other hook
    const [currentTime,setCurrentTime]=useState(0);
    const [progress,setProgress]=useState(0);
    const [isChanging,setChange]=useState(false);
    const [isPlay,setPlay]=useState(false);
    useEffect(()=>{
        dispatch(getSongDetailAction(29567193))
    },[dispatch])
    useEffect(()=>{
        audioPlay.current.src=getPlaySong(currentSong.id);
        audioPlay.current.play().then(data=>{
            setPlay(true);
            audioPlay.current.volume=0.05;
        }).catch(err=>{
            {
                setPlay(false);
            }
        })
    },[currentSong])
    const audioPlay=useRef();
    //other
    const picUrl=currentSong.al&&currentSong.al.picUrl;
    const artistName=currentSong.ar&&currentSong.ar[0].name;
    const modeMap=new Map([
        [0,'随机'],
        [1,'单曲循环'],
        [2,'循环']
    ])
     /*other function handle*/
    //播放歌曲
    const playMusic=()=>{
        isPlay?audioPlay.current.pause():audioPlay.current.play();
        setPlay(!isPlay);
        audioPlay.current.volume=0.05;
    }
    //获取当前歌曲播放时间
    const getCurrentTime=(e)=>{
        if(!isChanging)
        {
            setCurrentTime(e.target.currentTime*1000);
            setProgress(currentTime/currentSong.dt*100);
        }
        let lyricIndex=0
        for(let index in lyric)
        {
            if(lyric[index].duration>e.target.currentTime*1000)
            {
                if(index!==0)
                {
                    lyricIndex=index;
                    break;
                }
            }
        }
        if(lyric[lyricIndex-1]&&lyricItem!==lyric[lyricIndex-1].content)
        {
            dispatch(changeLyricItemAction(lyric[lyricIndex-1].content))
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

    //改变播放模式 单曲循环（1） 随机播放（0） 循环（2）
    const changeMode=()=>{
        let queueIndex=playQueue+1;
        if(queueIndex>2)
        {
            queueIndex=0
        }
        dispatch(changePlayQueueAction(queueIndex))
    }
    //切歌 上一首 ，下一首
    const changeSong=(tag)=>{
        dispatch(changeCurrentSongAction(tag))
    }
    const endHandle=()=>{
        if(playQueue===1)
        {
            audioPlay.current.currentTime=0;
            audioPlay.current.play();
        }
        else{
            changeSong(-1)
        }
    }
    //router
    const playerRouter=()=> {
        props.history.push('/findMusic/player')
    }
    return (
        <PlayWrapper>
            <Content isPlay={isPlay}>
                <ControlBtn isPlay={isPlay}>
                    <div className='prev' onClick={e=>changeSong(-1)}>前一首</div>
                    <div className='play' onClick={e=>playMusic()}>暂停/播放</div>
                    <div className="next" onClick={e=>changeSong(+1)}>下一首</div>
                </ControlBtn>
                <Progress className="clearfix">
                    <div className="img-container" onClick={e=>playerRouter()}>
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
                <RightControl queueIndex={playQueue}>
                    <div>
                        <div className='collect'></div>
                        <div className="share"></div>
                    </div>
                    <div>
                        <div className="vol"></div>
                        <div className="loop" onClick={e=>changeMode()} title={modeMap.get(playQueue)}> </div>
                        <div className="list"> <span>{playList.length}</span></div>
                    </div>
                </RightControl>
                <audio ref={audioPlay} onTimeUpdate={getCurrentTime} onEnded={endHandle}/>
                <div className="lyric-container">{lyricItem}</div>
            </Content>
        </PlayWrapper>
    )
}
export default withRouter(memo(PlayBar))