import { useEffect, useState } from "react";
import image1 from "./assets/img1.png";
import image2 from "./assets/img2.png";
import image3 from "./assets/img3.png";
import image4 from "./assets/img4.png";
import image5 from "./assets/img5.png";
import image6 from "./assets/img6.png";
import image7 from "./assets/img7.png";
import image8 from "./assets/img8.png";
import "./App.css";

function MainBlock() {
  const [curImg, setCurImg] = useState(0);
  const [moveImg, setMoveImg] = useState(
    window.innerWidth < 1250 && window.innerWidth > 1000
      ? 2891.5
      : 3813.5 + 1089.5 * curImg
  );
  const [isAnim, setIsAnim] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  //images
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  useEffect(() => {
    const handleResize = () => {
      setMoveImg(
        window.innerWidth < 1250 && window.innerWidth > 1000
          ? 2891.5 - 826 * curImg
          : 3813.5 - 1089.5 * curImg
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [curImg]);

  const handleClickNext = () => {
    if (isDisabled) return;
    setIsDisabled(true);
    setTimeout(() => {
      setIsAnim(true);
      if (window.innerWidth > 1250) {
        setMoveImg((prevState) => prevState - 1089.5);
        console.log("NEXT = " + moveImg);
      } else if (window.innerWidth < 1250 && window.innerWidth > 1000) {
        setMoveImg((prevState) => prevState - 826);
      }
      curImg >= 7 ? setCurImg(0) : setCurImg((prevState) => prevState + 1);
      setTimeout(() => {
        if (window.innerWidth > 1250) {
          if (moveImg < -3600) {
            setIsAnim(false);
            setMoveImg(3813.5);
          }
        } else if (window.innerWidth < 1250 && window.innerWidth > 1000) {
          if (moveImg < -2800) {
            setIsAnim(false);
            setMoveImg(2891.5);
          }
        }
        setIsDisabled(false);
      }, 300);
    }, 300);
  };
  const handleClickPrev = () => {
    if (isDisabled) return;
    setIsDisabled(true);
    setTimeout(() => {
      console.log("PREV = " + moveImg);
      setIsAnim(true);
      if (window.innerWidth > 1250) {
        setMoveImg((prevState) => prevState + 1089.5);
      } else if (window.innerWidth < 1250 && window.innerWidth > 1000) {
        setMoveImg((prevState) => prevState + 826);
      }
      curImg <= 0
        ? setCurImg(images.length - 1)
        : setCurImg((prevState) => prevState - 1);

      setTimeout(() => {
        if (window.innerWidth > 1250 && window.innerWidth > 1000) {
          if (moveImg > 3800) {
            setIsAnim(false);
            setMoveImg(-3813);
          }
        } else if (window.innerWidth < 1250) {
          if (moveImg > 2800) {
            setIsAnim(false);
            setMoveImg(-2890.5);
          }
        }

        setIsDisabled(false);
      }, 300);
    }, 300);
  };

  return (
    <section className="main-sec2">
      <h2>
        Динамічні події ☼ Молодіжні ініціативи ☼ Креативні проекти ☼ Спілкування
        та підтримка ☼ Партнерство та співпраця ☼ Інформація та ресурси ☼
        Динамічні події ☼ Молодіжні ініціативи ☼ Креативні проекти ☼ Спілкування
        та підтримка ☼ Партнерство та співпраця ☼ Інформація та ресурси ☼
        Динамічні події ☼ Молодіжні ініціативи ☼ Креативні проекти ☼ Спілкування
        та підтримка ☼ Партнерство та співпраця ☼ Інформація та ресурси ☼
        Динамічні події ☼ Молодіжні ініціативи ☼ Креативні проекти ☼ Спілкування
        та підтримка ☼Партнерство та співпраця ☼ Інформація та ресурси ☼
        Динамічні події ☼ Молодіжні ініціативи ☼ Креативні проекти ☼ Спілкування
        та підтримка ☼
      </h2>
      <div className="main-sec2-img-wrap">
        <div className="main-sec2-left" />
        <div className="main-sec2-img">
          <button
            className="main-sec2-img-Sizes-Arrow1"
            onClick={() => handleClickPrev()}
          >
            <svg width="60" height="60" viewBox="1 -1 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="main-sec2-img-Sizes">
            {window.innerWidth > 1000 && (
              <div className="main-sec2-img-wrap">
                <img
                  src={images[images.length - 2]}
                  style={{
                    transform: `translateX(${moveImg}px)`,
                    transition: isAnim ? "0.3s" : "none",
                  }}
                  className="main-sec2-img-wrap-Image"
                />
                <img
                  src={images[images.length - 1]}
                  style={{
                    transform: `translateX(${moveImg}px)`,
                    transition: isAnim ? "0.3s" : "none",
                  }}
                  className="main-sec2-img-wrap-Image"
                />
                {images.map((newsItem, index) => (
                  <img
                    src={images[index]}
                    style={{
                      transform: `translateX(${moveImg}px)`,
                      transition: isAnim ? "0.3s" : "none",
                    }}
                    className="main-sec2-img-wrap-Image"
                  />
                ))}
                <img
                  src={images[0]}
                  style={{
                    transform: `translateX(${moveImg}px)`,
                    transition: isAnim ? "0.3s" : "none",
                  }}
                  className="main-sec2-img-wrap-Image"
                />
                <img
                  src={images[1]}
                  style={{
                    transform: `translateX(${moveImg}px)`,
                    transition: isAnim ? "0.3s" : "none",
                  }}
                  className="main-sec2-img-wrap-Image"
                />
              </div>
            )}
            {window.innerWidth < 1000 && (
              <div className="main-sec2-img-wrap">
                <img
                  src={images[curImg]}
                  className="main-sec2-img-wrap-Image"
                />
                <div className="main-sec2-img-wrap-bottom"></div>
              </div>
            )}

            <p className="main-sec2-img-info">{curImg + 1} / 8</p>
          </div>

          <button
            className="main-sec2-img-Sizes-Arrow2"
            onClick={() => handleClickNext()}
          >
            <svg width="60" height="60" viewBox="-1 -1  24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="main-sec2-right" />
      </div>
    </section>
  );
}

export default MainBlock;
