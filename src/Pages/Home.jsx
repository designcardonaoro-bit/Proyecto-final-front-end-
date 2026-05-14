import "../Styles/Home.css"; 
import Swal from "sweetalert2";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const Home = () => {
  const handleReportButtonClick = (e) => {
    e.preventDefault(); 
    Swal.fire({
      title: "Te redireccionaremos a nuestra pagina principal",
      icon: "success",
      draggable: true
    }).then(() => {
      window.location.href = "https://zehn.com.co/";
    });
  };



  return (
    <>
      
    </>
  );
}

export default Home;