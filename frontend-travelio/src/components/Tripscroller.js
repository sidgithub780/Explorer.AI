import React, { useEffect } from "react";
import Swiper, { Mousewheel } from "swiper/bundle";
import "swiper/css";
import "./Tripscroller.css";

const Tripscroller = ({ tuff }) => {
  const blogCards = [
    {
      date: "26 December 2019",
      title: "Lorem Ipsum Dolor 1",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    },
    {
      date: "27 December 2019",
      title: "Lorem Ipsum Dolor 2",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    },
    {
      date: "27 December 2019",
      title: "Lorem Ipsum Dolor 2",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    },
    {
      date: "27 December 2019",
      title: "Lorem Ipsum Dolor 2",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    },
    // Add more blog card data as needed
  ];

  useEffect(() => {
    const swiper = new Swiper(".blog-slider", {
      direction: "vertical", // Change direction to vertical
      spaceBetween: 30,
      effect: "fade",
      loop: false,
      mousewheel: true,
      scrollbar: {
        el: ".blog-slider__scrollbar", // Add scrollbar configuration
        hide: false, // Show scrollbar
      },
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });
  }, []);

  const blogCardElements = tuff.map((card, index) => (
    <div className="blog-slider__item swiper-slide" key={index}>
      <div className="blog-slider__content">
        <div className="blog-slider__title">{card.title}</div>
        <div className="blog-slider__text">{card.text}</div>
        <a href="#" className="blog-slider__button">
          READ MORE
        </a>
      </div>
    </div>
  ));

  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">{blogCardElements}</div>
      <div className="blog-slider__scrollbar"></div> {/* Add this */}
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export default Tripscroller;
