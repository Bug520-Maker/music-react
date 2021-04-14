import React, {memo,useEffect} from "react";
import {ArtistWrapper,
	LeftContent,
	RightContent
 } from './style';
import {
	getArtistCateAction
} from "./store/actionCreators";
import {useDispatch} from "react-redux";
import ArtistCate from "../../../../components/artist-cate";

export default memo(function Artist()
{    //redux hook
    const dispatch=useDispatch();
 	useEffect(()=>{
      dispatch(getArtistCateAction(0,10,-1,-1))
	})
 		return (
 			<ArtistWrapper>
				<LeftContent>
					<ArtistCate title="['推荐','华语','欧美','日本','韩国','其它']"
								list={['推荐歌手','入住歌手',
						        '华语男歌手','华语女歌手','华语组合/乐队',
								'欧美男歌手','欧美女歌手','欧美组合/乐队',
								'日本男歌手','日本女歌手','日本组合/乐队',
								'韩国男歌手','韩国女歌手','韩国组合/乐队',
								'其他男歌手','其他女歌手','其他组合/乐队']} />
				</LeftContent>
				<RightContent>

				</RightContent>
 			</ArtistWrapper>
 		)
 	})
