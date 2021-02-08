import React,{memo,useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {Header,BodyList} from './style'
import {resetImgSize} from "../../utils/data-format";

import {getSongMsgAction} from "../../views/findMusic/childCpn/recommend/store/actionCreators";


export default memo(function TopListCpn(props){
    //console.log(props.info,"我是props")
    const {info}=props;
    const dispatch=useDispatch();
    const {rankingSongs}=useSelector(state=>{
        return {rankingSongs:state.getIn(['recommendReducer','rankingSongs'])}
    },shallowEqual)
    useEffect(()=>{
        //console.log("我是useEffect")
        if(info.trackIds!==undefined)
        {
            //console.log(info.trackIds.slice(0,5))
            const ids=info.trackIds.slice(0,10).map((item,index)=>{
                return item.id
            })
            dispatch(getSongMsgAction(ids));
            //console.log("47")
        }
    },[dispatch])

    return (
        <div >
            <Header>
                <div className="img-container">
                    <div className='cover'>cover</div>
                    <img src={resetImgSize(info.coverImgUrl,80)} />
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
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </BodyList>
        </div>
    )
})