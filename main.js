'use strict';
{
  const header = document.querySelector("header");
  const gnav_btn = document.querySelector(".gnav-btn");
  const gnav_btn_lines = document.querySelector(".gnav-btn-lines");
  const modal_window = document.querySelector(".modal-window");



  gnav_btn.addEventListener("click", () => {
    gnav_btn_lines.classList.toggle("active");
    modal_window.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    if (header.classList.contains("scroll")) {
      let currentScroll = document.documentElement.scrollTop;
      if (currentScroll < 300) {
        header.classList.remove("scroll");
      }
    } else {
      let currentScroll = document.documentElement.scrollTop;
      if (currentScroll >= 300) {
        header.classList.add("scroll");
      }
    }
  });








}