import React from 'react';
import TitleCategory,{ItemVideo,Paging} from '../../components/Common/common';
import VideoData from '../../components/json/dataVideo';
const Video=VideoData.data;

export default class TVShow extends React.Component {
    constructor() {
        super();
        this.state={
            data: Video
        }
    }
    render() {

        return (
            <section className="TVShow">
                <TitleCategory name="THVL ĐỀ XUẤT" />
                <section className="list-video">
                    {this.state.data.map((item, i) => (<ItemVideo key={i} img={item.imgVideo} title= {item.title} numberPlay={item.numberPlay} numberHeart={item.numberHeart}  />))}
                </section>
                <Paging />
            </section>
        );
    }

}
