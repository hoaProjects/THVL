import React from 'react';
import ScrollArea from 'react-scrollbar';

export class LiveSchedule extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            itemsCount : 40
        };
    }

    handleScroll(scrollData){
      console.log(scrollData);
    }

    render() {
        var itemElements = [];
        for( var i = 0; i< this.state.itemsCount; i++){
            itemElements.push(
                <div className="row" key={i}>
                    <section className="col">
                        <div className="thumb"><img src="/app/assets/img/videolive.jpg"/></div>
                    </section>
                    <section className="col content">
                        <h6 className="titleVideo">Ai sẽ thành sao</h6>
                        <div className="clock">
                            <span className="time">18:00</span>
                            <span className="live-icon">LIVE</span>
                        </div>
                    </section>
                </div>
            );
        }
        const settings = {

        };
        let scrollbarStyles = {borderRadius: 5};

        return (
            <section className="LiveSchedule">
                <article className="head">
                    <h3 className="title">LỊCH PHÁT SÓNG</h3>
                    <a href="/listcategory" className="viewall">Hôm nay</a>
                </article>
                <article className="scroll-list">
                    <ScrollArea
                      className="area"
                      contentClassName="content"
                      verticalScrollbarStyle={scrollbarStyles}
                      verticalContainerStyle={scrollbarStyles}
                      horizontalScrollbarStyle={scrollbarStyles}
                      horizontalContainerStyle={scrollbarStyles}
                      smoothScrolling= {true}
                      minScrollSize={40}
                      onScroll={this.handleScroll}>
                        {itemElements}
                    </ScrollArea>
                </article>
            </section>
        );
    }
}

export default LiveSchedule;
