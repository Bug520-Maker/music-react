import React,{memo,useEffect} from 'react';
import { Carousel } from 'antd';
import {CenterBanner,LeftBanner,RightBanner} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getBannersAction} from "../../store/actionCreators";

export default memo(function TopBanner()
{
    const {banners} = useSelector(state => {
        return {banners: state.getIn(['recommendReducer', 'banners'])}
    }, shallowEqual)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBannersAction());
    }, [dispatch])
    return (
        <div>
            <CenterBanner>
                <LeftBanner>
                    <Carousel effect="fade" autoplay>
                        {
                            banners.map((item,index)=>{
                                return(<div key={item.imageUrl}>
                                        <img src={item.imageUrl} alt={item.typeTitle}/>
                                       </div>)
                            })
                        }
                    </Carousel>
               </LeftBanner>
                <RightBanner>

                </RightBanner>
            </CenterBanner>
        </div>
    )
})