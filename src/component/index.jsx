import React, { useState } from "react";
import "./ColorBox.scss";
ColorBox.propTypes = {};

function getRandomColor() {
  const COLORLIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLORLIST[randomIndex];
  //Math.trunc lay phan nguyen
  //Math.random return vemm  so thap phan tu 0-1,luon nho hon 1
}

function ColorBox() {
  // const initColor = localStorage.getItem("boxcolor") || "red"; // set mau cos trong browser, neu ban dau chua co mau de thanh red
  // console.log(initColor);
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("boxcolor") || "red"; //cho vao day de chay dung 1 lan, vi no luu lai mau vua chon
    console.log(initColor);
  });

  function handleBoxColor() {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("boxcolor", newColor); // dung luu lai mau ma ta vua click
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxColor}
    ></div>
  );
}

export default ColorBox;
