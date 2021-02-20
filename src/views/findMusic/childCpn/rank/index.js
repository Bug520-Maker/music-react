import React, {memo,useState,useEffect} from "react";
import {useSelector} from "react-redux";
//组件
import RankItem from '../../../../components/rank-item/index';
//样式
import {
	RankWrapper,
	LeftContent,
	RightContent
} from './style'
import {renderRoutes} from "react-router-config";

 export default memo(function Rank(props) {
 	//props,state
	 const {route}=props;
	 const [currentIndex,setCurrentIndex]=useState(0);
 	//redux-hook
 	const {allRanking}=useSelector((state)=>{
 		return {
			allRanking:state.getIn(['recommendReducer','allRanking']),
		}
	})
	 //other hook
	 //function handle
	 const liClick=(item,index)=>{
		 setCurrentIndex(index);
 		props.history.push({
			pathname:'/findMusic/rank/toplist',
			state:{
				topListId:item.id
			}
 		});
	 }
 		return (
 			<RankWrapper>
				<LeftContent>
					<ul className="rank-list">
						<p className="feature-rank">云音乐特色榜</p>
						{
							allRanking.map((iten,index)=>{
								return (
									<li key={iten.id} onClick={e=>liClick(iten,index)} className={index===currentIndex?'active':''}>
										<RankItem info={iten}/>
										{index===3&&<p className="media-rank">全球媒体榜</p>}
									</li>
								)
							})
						}
					</ul>
				</LeftContent>
				<RightContent>
					{
						renderRoutes(route.routes)
					}
				</RightContent>
 			</RankWrapper>
 		)
 	})
