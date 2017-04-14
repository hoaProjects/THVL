import React from 'react';

export class Info extends React.Component {

    render() {

        return (
            <section className="infoBlock">
                <section className="col">
                    <article className="infoVideo">
                        <h3 className="title" id="infoTitle">DANH HÀI ĐẤT VIỆT</h3>
                        <p className="text">Dàn thí sinh Gương mặt thân quen nhí mùa thứ 3 đã lộ diện với nhiều gương mặt nhí được khán giả yêu thích thời gian qua: Công Quốc
                        , Nhã Thy, Diệp Nhi... Sau khi kết thúc mùa giải thứ 4 của người lớn với chiến thắng thuộc về Bạch Công Khanh, mùa giải 3 của phiên
                         bản nhí cũng đã được khởi động.</p>
                    </article>
                </section>
                <section className="col right">
                    <div className="row">
                        <span className="title">Năm sản xuất:</span>
                        <span className="text">Năm sản xuất:</span>
                    </div>
                    <div className="row">
                        <span className="title">Thời lượng:</span>
                        <span className="text">60 phút</span>
                    </div>
                    <div className="row">
                        <span className="title">Thể loại:</span>
                        <span className="text typeFilm">Gia đình, Hài hước</span>
                    </div>
                    <div className="row">
                        <span className="title">Diễn viên:</span>
                        <span className="text">Chí Tài, Hoài Linh, Việt Hương</span>
                    </div>
                    <div className="row">
                        <span className="title">Đạo diễn:</span>
                        <span className="text">Victor Vũ</span>
                    </div>
                </section>
            </section>
        );
    }
}

export default Info;
