import React, {useState} from 'react'
import arrowIcon from "./../../icons/arrow.svg";
import "./PhotoSlider.scss";

export default function PhotoStack({images}) {
  let [currentImg, setCurrentImg] = useState(0);
  const dots = Array.from(Array(images.length).keys());

  function next() {
    if(currentImg < images.length - 1) {
      const result = currentImg + 1
      setCurrentImg(result);
    } else {
      setCurrentImg(0);
    }
  }

  function prev() {
    if(currentImg === 0) {
      setCurrentImg(images.length - 1);
    } else {
      const result = currentImg - 1
      setCurrentImg(result);
    }
  }

  function doClick(number) {
    setCurrentImg(number);
  }

  return (
    <div className="PhotoStack" style={{background: `url(${images[currentImg]}) 50% 50%/ cover no-repeat`}}>
      <div className="PhotoStack__left_arrow" onClick={prev}>
        <img src={arrowIcon} alt="Arrow Icon" />
      </div>
      <div className="PhotoStack__circlesWrapper">
        {dots.map(dot => {
          return <div
            key={dot}
            className={currentImg === dot? "PhotoStack__circlesWrapper_dotActive" : "PhotoStack__circlesWrapper_dot"}
            onClick={() => doClick(dot)}
          />
        })}
      </div>
      <div className="PhotoStack__right_arrow" onClick={next}>
        <img src={arrowIcon} alt="Arrow Icon" />
      </div>
    </div>
  );
}