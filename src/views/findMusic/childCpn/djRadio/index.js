import React, {memo,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {DjRadioWrapper} from './style'
import {getDjRadioCateAction} from "./store/actionCreators";

export default memo(function DJRadio() {
	//redux hook
	const dispatch=useDispatch();
	const {djCate}=useSelector(state=>({
		djCate:state.getIn(['djRadioReducer','djcate'])
	}))
	useEffect(()=>{
		dispatch(getDjRadioCateAction())
	},[dispatch])
	console.log(djCate)
 		return (
 			<DjRadioWrapper>
				主播电台
 			</DjRadioWrapper>
 		)
 	})
