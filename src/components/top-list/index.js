import React,{memo} from 'react';

import {Header,BodyList} from './style'
import {resetImgSize} from "../../utils/data-format";

export default memo(function TopListCpn(props){
    const {info}=props;
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

            </BodyList>
        </div>
    )
})