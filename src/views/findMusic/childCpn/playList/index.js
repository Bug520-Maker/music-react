import React, {memo,useEffect} from "react";
import {useDispatch, useSelector,shallowEqual} from "react-redux";

import {getPlayListCateAction,getPlayListsAction} from "./store/actionCreators";
//组件
import SongsCover from '../../../../components/songs-cover/index'
import {PlayListWrapper} from './style'
 export default memo(function PlayList() {
 	//redux hook
	 const dispatch=useDispatch();
     const {playLists}=useSelector((state)=>({
		 playLists:state.getIn(['playListReducer','playLists'])
	 }),shallowEqual)
 	//other hook
	 useEffect(()=>{
		dispatch(getPlayListCateAction())
		 dispatch(getPlayListsAction('hot','全部',35,0))
	 },[dispatch])
	 //handle
	 const playlists=playLists.playlists||[];
 		return (
 			<PlayListWrapper>
				<div className="all">
					<div>
						<div>全部</div>
						<div className="cate">
							<div>选择分类 </div>
							<div> </div>
						</div>
					</div>
					<div className="hot">热门</div>
				</div>
				<ul className="play-list">
					{
						playlists.map((item,index)=>{
							return (
								<li key={item.id}>
									<SongsCover playList={item}/>
								</li>
							)
						})
					}
				</ul>
 			</PlayListWrapper>
 		)
 	})
