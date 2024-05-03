import { useEffect } from "react";
import { useState } from "react";
import "../../style/Carousel02.css";

function Carousel02({ images }) {
  const [current02, setCurrent02] = useState(0);
  const [autoPlay02, setAutoPlay02] = useState(true);
  let timeOut = null;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timeOut =  autoPlay02 &&
      setTimeout(() => {
        slideRight();
      }, 3000);
  });

  const slideRight = () => {
    setCurrent02(current02 === images.length - 1 ? 0 : current02 + 1);
  };

  const slideLeft = () => {
    setCurrent02(current02 === 0 ? images.length - 1 : current02 - 1);
  };
  console.log(current02);
  return (
    <div
      className="carousel02"
     
      onMouseEnter={() => {
        setAutoPlay02(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay02(true);
      }}
    >
      <div className="carousel_wrapper02">
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index === current02
                  ? "carousel_card02 carousel_card-active02"
                  : "carousel_card02"
              }
            >
              <img className="card_image02" src={image.image} alt="" />
              <div className="card_overlay02">
                <h2 className="card_title">{image.title}</h2>
              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current02
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent02(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel02;
