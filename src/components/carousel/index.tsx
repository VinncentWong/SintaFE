import "./index.css";
import carousel1 from "../../images/carousel/carousel1.png";
import carousel2 from "../../images/carousel/carousel2.png";
import carousel3 from "../../images/carousel/carousel3.png";
import carousel4 from "../../images/carousel/carousel4.png";
import carousel5 from "../../images/carousel/carousel5.png";
import React, { PropsWithChildren, useEffect, useState } from "react";

const data = [
  carousel1, carousel2, carousel3, carousel4, carousel5
]

const Carousel = (children: PropsWithChildren) => {
  return(
    <div className="carousel"> 
        <div className="inner" style={{transform: "translateX(-0%)"}}> 
            {
              React.Children.map(children.children, (child, i) => {
                return React.cloneElement(child as React.ReactElement<any>, {
                  "width" : "100%"
                });
              })
            }
        </div>
    </div>
  )
};

export default Carousel;