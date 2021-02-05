/*新碟上架*/
import React,{memo,useEffect,useRef} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { Carousel } from 'antd';

import {getHotNewAlbumAction} from "../../store/actionCreators";
import {resetImgSize} from "../../../../../../utils/data-format";

import RecTheme from "../../../../../../components/recommend-theme";
import {NewAlbums,Swiper} from './style';
export default memo(function NewAlbum(){
    const {newAlbums}=useSelector(state=>({
        newAlbums:state.get('recommendReducer').get('newAlbums')
    }),shallowEqual);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getHotNewAlbumAction(10))
    },[dispatch])
    const swiperRef=useRef();
    console.log(newAlbums)
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
                                            newAlbums.slice(item*5,(item+1)*5).map((iten)=>{
                                                return (
                                                    <div key={iten.id} className='album-item'>
                                                        <div className="cover"></div>
                                                        <img src={resetImgSize(iten.blurPicUrl,100)} alt={iten.name}/>
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