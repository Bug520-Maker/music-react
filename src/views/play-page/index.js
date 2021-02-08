import React,{memo} from 'react';
import { Slider} from 'antd';

import {PlayWrapper,Content,ControlBtn,Progress,RightControl} from './style'
export default memo(function PlayPage(){
    return (
        <PlayWrapper>
            <Content>
                <ControlBtn>
                    <div className='prev'>前一首</div>
                    <div className='play'>暂停/播放</div>
                    <div className="next">下一首</div>
                </ControlBtn>
                <Progress className="clearfix">
                    <div className="img-container">
                        <div className="cover">歌曲封面</div>
                        <img src='https://p1.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg?param=34y34' />
                    </div>
                    <div className="flag-word clearfix">{/*设置歌手名字，歌曲信息*/}
                        <div className="song-msg clearfix">
                            <span className='song-name'>我们的时光</span>
                            <span className="mv"> </span>
                            <span className="artist-name">赵雷</span>
                        </div>
                        <Slider defaultValue={30} />
                    </div>
                    <div className="time">
                        <div className="current">03:08</div> /
                        <div className="duration"> 04:56</div>
                    </div>
                </Progress>
                <RightControl/>
            </Content>
        </PlayWrapper>
    )
})