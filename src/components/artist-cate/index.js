import React,{memo,useState} from 'react';
import PropTypes from 'prop-types';
import {
    ArtistCateWrapper
} from './style'
function ArtistCate(props)
{
    //state,props
    const [currentIndex,setCurrentIndex]=useState(0);
    const {title,list}=props;
    //handler
    const liClick=(index)=>{
        setCurrentIndex(index)
    }
    return (
        <ArtistCateWrapper>
            <ul className="artist-list">
                {
                    list.map((item,index)=>{
                        return (
                            <li key={item}
                                onClick={e=>liClick(index)}
                                className={currentIndex===index?"active":''}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </ArtistCateWrapper>
    )
}
ArtistCate.propTypes={
    title:PropTypes.array,
    list:PropTypes.array
}
ArtistCate.defaultProps={
    title:[],
    list:[]
}
export default memo(ArtistCate);