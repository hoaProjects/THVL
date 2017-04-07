import React from 'react';
import PhotoData from '../../components/json/comment';
import '../../styles/style.scss';
const Photo=PhotoData.data;

export class ItemComment extends React.Component {

    render() {

        return (
            <article className="itemUser">
                <div className="imgBox"><img src={this.props.photo} /></div>
                <div className="time">{this.props.time}</div>
                <div className="content">
                    <p className="name">{this.props.Name}</p>
                    <p className="text">{this.props.text}</p>
                </div>
            </article>
        );
    }
}

export class Comments extends React.Component {
    constructor() {
        super();
        this.state={
            data: Photo
        }
    }
    render() {
        return (
            <section className="commentBlock">
                <div className="box-input">
                    <textarea rows="4" cols="50" placeholder="Nhập nội dung bình luận..."></textarea>
                    <div className="control">
                        <p className="text">Tối thiểu 20 ký tự</p>
                        <a href="#" className="btn"><span>GỬI</span></a>
                    </div>
                </div>
                <div className="comment">
                    {this.state.data.map((item, i) => (<ItemComment key={i} photo={item.photo} Name= {item.Name} text={item.text} time={item.time}  />))}
                </div>
            </section>
        );
    }
}

export default Comments;
