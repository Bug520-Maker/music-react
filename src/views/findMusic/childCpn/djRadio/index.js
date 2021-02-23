import React, {memo,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {DjRadioWrapper,Recommend,RecProgram,ProgramRank} from './style';
//Action
import {
	getDjRadioCateAction,
	getRecProgramAction,
	getProgramRankAction
} from "./store/actionCreators";
//组件
import RecTheme from "../../../../components/recommend-theme";
import Programmer from "../../../../components/program/index";
export default memo(function DJRadio() {
	//redux hook
	const dispatch=useDispatch();
	const {djCate,recProgram,programRank}=useSelector(state=>({
		djCate:state.getIn(['djRadioReducer','djcate']),
		recProgram:state.getIn(['djRadioReducer','recProgram']),
		programRank:state.getIn(['djRadioReducer','programRank'])
	}))
	//other hook
	//电台分类
	useEffect(()=>{
		dispatch(getDjRadioCateAction())
	},[dispatch])
	//推荐节目
	useEffect(()=>{
		dispatch(getRecProgramAction())
	},[dispatch])
	//节目榜
	useEffect(()=>{
		dispatch(getProgramRankAction())
	},[dispatch])
	const programs=recProgram||[];
	const toplist=programRank||[];
	//console.log(programs)
	return (
		<DjRadioWrapper className="clearfix">
			<div className="dj-cate">
				<ul>
					{
						djCate.map((item,index)=>{
							return (
								<li key={item.id}>
									<div className="img-container">
										<img src={item.picWebUrl} alt={item.name}/>
									</div>
									<div className="dj-name">{item.name}</div>
								</li>
							)
						})
					}
				</ul>
			</div>
			{/*推荐节目，推荐电台*/}
			<Recommend>
				<RecProgram>
					<RecTheme title="推荐节目"/>
					{
						programs.map((item,index)=>{
							return (
								<div key={item.id} className="program-outer">
									<Programmer info={item} tag={<div>{item.radio.category}</div>}/>
								</div>
							)
						})
					}
				</RecProgram>
				<ProgramRank>
					<RecTheme title="节目排行榜"/>
					{
						toplist.map((item,index)=>{
							return (
								<div key={item.program.id} className="program-outer">
									<Programmer info={item.program}/>
								</div>
							)
						})
					}
				</ProgramRank>
			</Recommend>
		</DjRadioWrapper>
	)
})
