import React,{memo,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSettleArtistAction} from '../../store/actionCreators';
import {resetImgSize} from "../../../../../../utils/data-format";
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
          <ul className="artist-list">
              {
                  settleArtist.map((item,index)=>{
                      return (
                          <li key={item.id}>
                              <div className="img-container">
                                  <img src={resetImgSize(item.picUrl,62)} alt={item.name} />
                              </div>
                              <div className="right-msg">
                                  {item.name}
                              </div>
                          </li>
                      )
                  })
              }
          </ul>
            {/*申请成为网易音乐人*/}
            <div className="apply-music">
                申请成为网易音乐人
            </div>
        </SettleArtistWrapper>
    )
})