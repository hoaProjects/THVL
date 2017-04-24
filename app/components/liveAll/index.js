import React from 'react';
import SliderListLive from '../../components/Common/sliderListLive';
import TitleSlider from '../../components/Common/titleList';

export default class LiveAll extends React.Component {
    constructor() {
        super();
        this.state = {
            data1:
            [
                { 'src': '../app/assets/img/live/THVL1HD.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-2-HD.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Cai-Luong.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Ca-Nhac.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Dien-Anh.png'},
                { 'src': '../app/assets/img/live/HTV-1.png'},
                { 'src': '../app/assets/img/live/HTV-2.png'},
                { 'src': '../app/assets/img/live/HTV-3.png'},
                { 'src': '../app/assets/img/live/HTV-4.png'},
                { 'src': '../app/assets/img/live/HTV-7.png'},
                { 'src': '../app/assets/img/live/HTV-2.png'},
            ],
            data2:
            [
                { 'src': '../app/assets/img/live/HTV-1.png'},
                { 'src': '../app/assets/img/live/HTV-2.png'},
                { 'src': '../app/assets/img/live/HTV-3.png'},
                { 'src': '../app/assets/img/live/HTV-4.png'},
                { 'src': '../app/assets/img/live/HTV-7.png'},
                { 'src': '../app/assets/img/live/HTV-2.png'},
                { 'src': '../app/assets/img/live/THVL1HD.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-2-HD.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Cai-Luong.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Ca-Nhac.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Dien-Anh.png'},
            ],
            data3:
            [
                { 'src': '../app/assets/img/live/VTV-1-HD.png'},
                { 'src': '../app/assets/img/live/VTV-2.png'},
                { 'src': '../app/assets/img/live/VTV-3.png'},
                { 'src': '../app/assets/img/live/VTV-4.png'},
                { 'src': '../app/assets/img/live/HTV-7.png'},
                { 'src': '../app/assets/img/live/HTV-2.png'},
                { 'src': '../app/assets/img/live/THVL1HD.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-2-HD.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Cai-Luong.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Ca-Nhac.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Dien-Anh.png'},
                { 'src': '../app/assets/img/live/HTV-1.png'},
                { 'src': '../app/assets/img/live/HTV-2.png'},
                { 'src': '../app/assets/img/live/HTV-3.png'},
                { 'src': '../app/assets/img/live/HTV-4.png'},
                { 'src': '../app/assets/img/live/HTV-7.png'},
                { 'src': '../app/assets/img/live/HTV-2.png'},
            ],
            data4:
            [
                { 'src': '../app/assets/img/live/AXN.png'},
                { 'src': '../app/assets/img/live/BBC-Earth.png'},
                { 'src': '../app/assets/img/live/BBC-News.png'},
                { 'src': '../app/assets/img/live/Bloomberg.png'},
                { 'src': '../app/assets/img/live/Cinemax.png'},
                { 'src': '../app/assets/img/live/THVL1HD.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-2-HD.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Cai-Luong.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Ca-Nhac.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Dien-Anh.png'},
                { 'src': '../app/assets/img/live/HTV-1.png'},
                { 'src': '../app/assets/img/live/HTV-2.png'},
                { 'src': '../app/assets/img/live/HTV-3.png'},
                { 'src': '../app/assets/img/live/HTV-4.png'},
                { 'src': '../app/assets/img/live/HTV-7.png'},
                { 'src': '../app/assets/img/live/HTV-2.png'},
            ],
            number: 5
        };
    }
    render() {

        return (
            <section className="LiveHome All">
                <TitleSlider title="Kênh THVL" />
                <SliderListLive number={this.state.number} cls="item itemLive"  data={this.state.data1} />
                <TitleSlider title="KÊNH HTV" />
                <SliderListLive number={this.state.number}  cls="item itemLive" data={this.state.data2} />
                <TitleSlider title="VTV" />
                <SliderListLive number={this.state.number}  cls="item itemLive" data={this.state.data3} />
                <TitleSlider title="KÊNH NƯỚC NGOÀI" />
                <SliderListLive number={this.state.number}  cls="item itemLive" data={this.state.data4} />
            </section>
        );
    }

}
