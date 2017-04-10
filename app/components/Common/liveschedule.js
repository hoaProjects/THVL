import React from 'react';

export class LiveSchedule extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section className="LiveSchedule">
                <article className="head">
                    <h3 className="title">LỊCH PHÁT SÓNG</h3>
                    <a href="/listcategory" className="viewall">Hôm nay</a>
                </article>
                <article className="scroll-list">
                    <div className="row">
                        <section className="col">
                            <div className="thumb"><img src="/app/assets/img/videolive.jpg"/></div>
                        </section>
                        <section className="col">
                            <span className="titleVideo">Ai sẽ thành sao</span>
                            <div className="clock">
                                <img className="clock-icon" src="/app/assets/img/icon/clock-icon.png"/>
                                <span className="time">18:00</span>
                                <img className="live-icon" src="/app/assets/img/icon/live-icon.png"/>
                            </div>
                        </section>
                    </div>
                    <div className="row">
                        <section className="col">
                            <div className="thumb"><img src="/app/assets/img/videolive.jpg"/></div>
                        </section>
                        <section className="col">
                            <span className="titleVideo">Ai sẽ thành sao</span>
                            <div className="clock">
                                <img className="clock-icon" src="/app/assets/img/icon/clock-icon.png"/>
                                <span className="time">18:00</span>
                                <img className="live-icon" src="/app/assets/img/icon/live-icon.png"/>
                            </div>
                        </section>
                    </div>
                </article>
            </section>
        );
    }
}

export default LiveSchedule;
