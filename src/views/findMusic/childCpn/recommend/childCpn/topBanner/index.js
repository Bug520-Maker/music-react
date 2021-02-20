import React,{memo,useEffect,useRef,useCallback,useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { Carousel,Image} from 'antd';

import {CenterBanner,LeftBanner,RightBanner,Bgc} from "./style";
import {getBannersAction} from "../../store/actionCreators";

export default memo(function TopBanner()
{
    const [currentIndex,setCurrentIndex]=useState(0);/*记录当前轮播图的活跃图片*/
    //redux-hook
    const {banners} = useSelector(state => {
        return {banners: state.getIn(['recommendReducer', 'banners'])}
    }, shallowEqual)
    const dispatch = useDispatch();
    //other-hook
    const swiper=useRef();
    useEffect(() => {
        dispatch(getBannersAction());
    }, [dispatch]);
    const changeBgc=useCallback((from,to)=>{
        setCurrentIndex(to);
    },[])

    const bgc=banners[currentIndex]&&(banners[currentIndex].imageUrl+'?imageView&blur=40x20');
    return (
        <Bgc bgcImg={bgc}>
            <CenterBanner>
                <LeftBanner>
                    <Carousel effect="fade" autoplay ref={swiper} beforeChange={changeBgc}>
                        {
                            banners.map((item,index)=>{
                                return(
                                    <div key={item.imageUrl}>
                                        <img src={`${item.imageUrl}?param=730y285`} alt={item.typeTitle}/>
                                    </div>)
                            })
                        }
                    </Carousel>
                    <div className="rightIcon" onClick={e=>swiper.current.next()}>
                        <i className="iconfont icon-arrows-up"> </i>
                    </div>
                    <div className="leftIcon" onClick={e=>swiper.current.prev()}>
                        <i className="iconfont icon-arrows-up"> </i>
                    </div>
               </LeftBanner>
                <RightBanner>

                </RightBanner>
            </CenterBanner>
        </Bgc>
    )
})