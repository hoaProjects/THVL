import React from 'react';
import CategoryList from './../common/SliderList';
import PopupVideo from './../common/PopupVideo';


const CategorySlider = () =>
    <section className="home">
        <div className="head">
            <h3 className="title">ĐANG XEM</h3>
            <a href="/listcategory" className="viewall">Tất cả</a>
        </div>
       
        <CategoryList categoryType = {'viewing'}/>
         <PopupVideo />
        <div className="head">
            <h3 className="title">THVL ĐỀ XUẤT</h3>
            <a href="/listcategory" className="viewall">Tất cả</a>
        </div>
        <CategoryList categoryType = {'recommend'}/>
        <div className="head">
            <h3 className="title">TV SHOW</h3>
            <a href="/listcategory" className="viewall">Tất cả</a>
        </div>
        <CategoryList categoryType = {'viewing'}/>
        <div className="head">
            <h3 className="title">CẢI LƯƠNG</h3>
            <a href="#" className="viewall">Tất cả</a>
        </div>
        <CategoryList categoryType = {'recommend'}/>
    </section>;
export default CategorySlider;
