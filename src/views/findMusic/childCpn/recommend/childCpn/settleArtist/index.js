import React,{memo,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSettleArtistAction} from '../../store/actionCreators';
import {
    SettleArtistWrapper
} from './style'
export default memo(function SettleArtist(){
    //state,props
    const dispatch=useDispatch();
    const {settleArtist}=useSelector(state=>{
        return {
            settleArtist:state.getIn(['recommendReducer','settleArtist'])
        }
    })
    //react-hook
    useEffect(()=>{
        dispatch(getSettleArtistAction(0,5));
    },[dispatch])
    return (
        <SettleArtistWrapper>
          <div className="header">
              <span className="settle-artist-title">入驻歌手</span>
              <span className="check-all">查看全部></span>
          </div>
          <ul>
              {
                  settleArtist.map((item,index)=>{
                      return (
                          <li key={item.id}>
                              <div className="img-container">
                                  <img src={item.picUrl} />
                              </div>
                          </li>
                      )
                  })
              }
          </ul>
        </SettleArtistWrapper>
    )
})