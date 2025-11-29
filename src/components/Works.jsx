import React from "react";

import {Swiper,SwiperSlide}from"swiper/react";
import { Pagination,Navigation,Autoplay } from "swiper/modules";

// swiperのスタイル
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// データファイル
import worksData from"./worksData";

const swiperStyle={
  paddingBottom:"40px",
  width:"100%",
};

export default function Works() {
  return (
    <section className="Works" id="wrapper">
      <div className="works-top" id="works">
        <h2 className="title">Works</h2>
        <p className="text">ー作品一覧</p>
      </div>

      <div style={{
        width:"100%",
        overflow:"hidden"
      }}>
        <Swiper
        modules={[Pagination,Navigation,Autoplay]}
        autoplay={{
          delay:3000,
          disableOnInteraction:false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        pagination={{clickable:true}}
        navigation
        breakpoints={{
          768:{
            slidesPerView:3,
            centeredSlides:false
          }
        }}
        style={swiperStyle}

   >

     
        {/* データを使って繰り返し表示（map）する形に修正 */}
        {worksData.map((item, index) => (
          <SwiperSlide  key={index}>
            <div className="box" style={{margin: "0 auto"}}>
            <figure className="box__image">
              <img src={item.imageUrl} alt={item.title} />
            </figure>
            <div className="box__body">
              <h2>{item.title}</h2>
              <p className="box-text">
                {item.text}
              </p>
              <div className="box-link">
                <p className="box_txt">{item.skill}</p>
                <p>
                  <a href={item.url}target="_blank">Site-Link</a>
                </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  );
}
