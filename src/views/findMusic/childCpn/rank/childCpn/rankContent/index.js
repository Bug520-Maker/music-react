import React ,{memo,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Image} from 'antd';
//组件
import SongList from '../../../../../../components/songList'
import placeholder from '../../../../../../assets/img/placeholder/placeholder01.png'
import {getAlbumContentAction} from "../../store/actionCreators";
import {resetImgSize} from "../../../../../../utils/data-format";
import {formatDate} from "../../../../../../utils/data-format";
import {RankHead,RankBody} from './style'

export default memo(function RankContent(props){
    const{topListId}=props.location.state;
    //redux hook
    const dispatch=useDispatch();
    const {albumContent}=useSelector((state)=>({
        albumContent:state.getIn(['rankReducer','albumContent'])
    }))
    //other hook
    //console.log(albumContent)
    useEffect(()=>{
        dispatch(getAlbumContentAction(topListId))
    },[dispatch,topListId])
    return (
        <div>
            <RankHead>
                <div className="img-container">
                    <div className="cover"> </div>
                    <Image
                        width={150}
                        src={resetImgSize(albumContent.coverImgUrl,150)}
                        placeholder={
                            <Image
                                preview={false}
                                src={`${placeholder}`}
                                width={150}
                            />
                        }
                    />
                </div>
                <div className="right-msg">
                    <div className="toplist-name">
                        {albumContent.name}
                    </div>
                    <div className="update-time">
                        最近更新{formatDate(albumContent.updateTime,"MM月dd日")}
                    </div>
                    <div className="control-btn">
                        <div className="play">
                            <div>
                                <i></i>
                                <span>播放</span>
                            </div>
                            <div></div>
                        </div>
                        <div className="subscribe">
                            ({albumContent.subscribedCount})
                        </div>
                        <div className="btn-end"> </div>
                        <div className="share">
                            ({albumContent.shareCount})
                        </div>
                        <div className="btn-end"> </div>
                        <div className="download">
                            下载
                        </div>
                        <div className="btn-end"> </div>
                        <div className="comment">
                            ({albumContent.commentCount})
                        </div>
                        <div className="btn-end"> </div>
                    </div>
                </div>
            </RankHead>
            <RankBody>
               <div>
                   <div>歌曲列表</div>
                   <div>{albumContent.trackCount}首歌</div>
               </div>
                <div>
                    <span>播放: </span>
                    <span>{albumContent.playCount}次</span>
                </div>
            </RankBody>
            <SongList songs={albumContent.tracks}/>
        </div>
    )
})