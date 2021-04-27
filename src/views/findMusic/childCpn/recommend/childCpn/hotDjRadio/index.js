/*热门主播*/
import React,{memo,useEffect,useState} from 'react';
import {withRouter} from 'react-router-dom'
import {HotDjRadioWrapper} from "./style";

//网络请求、
import {getHotDjRadio} from "../../../../../../network/recommend/recommend";
//handle
import {resetImgSize} from "../../../../../../utils/data-format";

function HotDjRadio(){
    //prop state
    const [hotDjRadio,setHotDjRadio]=useState([]);
    //react-hook
    useEffect(()=>{
        getHotDjRadio().then(data=>{
            //console.log(data.data.list)
            setHotDjRadio(data.data.list)
        })
    },[])
    return (
        <HotDjRadioWrapper>
            <p className="hot-dj-title">热门主播</p>
            <ul className="djRadio-list">
                {
                    hotDjRadio.length!==0&&hotDjRadio.map((item,index)=>{
                        return (
                            <li key={item.id}>
                                <div className="img-container">
                                    <img src={resetImgSize(item.avatarUrl,40)} alt={item.name}/>
                                </div>
                                <div className="create-name">{item.nickName}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </HotDjRadioWrapper>
    )
}
export default withRouter(memo(HotDjRadio))