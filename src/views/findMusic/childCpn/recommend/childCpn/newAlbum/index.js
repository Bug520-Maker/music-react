/*新碟上架*/
import React,{memo,useEffect,useRef} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { Carousel } from 'antd';

import {getHotNewAlbumAction} from "../../store/actionCreators";

import RecTheme from "../../../../../../components/recommend-theme";
import AlbumCover from '../../../../../../components/album-cover/index';
import {NewAlbums,Swiper} from './style';
export default memo(function NewAlbum(){

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getHotNewAlbumAction(10))
    },[dispatch])
    const swiperRef=useRef();
    const {newAlbums}=useSelector(state=>({
        newAlbums:state.get('recommendReducer').get('newAlbums')
    }),shallowEqual);
    //console.log(newAlbums)
    return (
        <div>
            <RecTheme title='新碟上架'/>
            <NewAlbums>
                <i className="left-icon" onClick={e=>swiperRef.current.prev()}> </i>
                <Swiper>
                    <Carousel dots={false} ref={swiperRef}>
                        {
                            [0,1].map((item,index)=>{
                                return (
                                    <div key={item} className="albums-outer">
                                        {
                                            newAlbums&&newAlbums.slice(item*5,(item+1)*5).map((iten)=>{
                                                return (
                                                    <div key={iten.id}>
                                                        <AlbumCover albumInfo={iten} height={100} width={118} bgc={-570}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </Swiper>
                <i className="right-icon" onClick={e=>swiperRef.current.next()}> </i>
            </NewAlbums>
        </div>
    )
});