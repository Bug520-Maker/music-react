import React,{memo,useEffect,useState} from 'react';
import {Header,BodyList} from './style'
import {resetImgSize} from "../../utils/data-format";

import {songMsg} from '../../network/recommend/recommend'

export default memo(function TopListCpn(props){
    const {info}=props;
    const [rankingSongs,setRankingSongs]=useState([]);
    useEffect(()=>{
        if(info.trackIds!==undefined)
        {
            const ids=info.trackIds.slice(0,10).map((item,index)=>{
                return item.id
            })
            songMsg(ids).then(data=>{
                setRankingSongs(data.songs);
            })
        }
    },[info.trackIds])
    return (
        <div >
            <Header>
                <div className="img-container">
                    <div className='cover'>cover</div>
                    <img src={resetImgSize(info.coverImgUrl,80)} alt="暂无图片"/>
                </div>
                <div className="right-content">
                    <div className="rank-name">
                        {info.name}
                    </div>
                    <div className="control-btn">
                        <i className="header-play"></i>
                        <i className="header-collect"></i>
                    </div>
                </div>
            </Header>
            <BodyList>
                <ul>
                    {
                        rankingSongs.map((item,index)=>{
                            return (
                                <li key={item.id} className="text-overflow-single">
                                    <span>{index+1}</span>
                                    <div className="song-name text-overflow-single">{item.name}</div>
                                    <div className="control-btn">
                                        <i className="play"></i>
                                        <i className="add"></i>
                                        <i className="subscribe"></i>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </BodyList>
        </div>
    )
})