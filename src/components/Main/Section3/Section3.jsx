import "./Section3.scss"
import buttonPlay from "../../../assets/Homepage/Svg/buttonPlay.svg"
import buttonPause from "../../../assets/Homepage/Png/buttonPause.png"
import yogaMasters from "../../../assets/Homepage/Svg/yogaMasters.svg"
import Audio1 from "../../../Audio/Audio1.mp3"
import Audio2 from "../../../Audio/Audio2.mp3"
import Audio3 from "../../../Audio/Audio3.mp3"
import { useRef, useState } from "react"

function Section3() {
    const audio1 = useRef(new Audio(Audio1));
    const audio2 = useRef(new Audio(Audio2));
    const audio3 = useRef(new Audio(Audio3));
  
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
    const [isPlaying3, setIsPlaying3] = useState(false);
  
    const start1 = () => {
      audio1.current.play();
      setIsPlaying1(true);
    }
    const pause1 = () => {
      audio1.current.pause();
      setIsPlaying1(false);
    }
  
    const start2 = () => {
      audio2.current.play();
      setIsPlaying2(true);
    }
    const pause2 = () => {
      audio2.current.pause();
      setIsPlaying2(false);
    }
  
    const start3 = () => {
      audio3.current.play();
      setIsPlaying3(true);
    }
    const pause3 = () => {
      audio3.current.pause();
      setIsPlaying3(false);
    }
  return (
    <section className="section3">
      <div className="section3-textbox">
        <h2 className="section3-textbox__title">Take a Deep Breath</h2>
        <p className="section3-textbox__text">“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.”</p>
      </div>
      <div className="section3-container">
        <div className="section3-wrap">
            <div className="section3-box">
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">Turning off Auto Pilot</p>
                    <p className="section3-box__textbox-text2">Intriduction, Strees Assesment</p>
                </div>
                <button
                    className="section3-box__btn"
                    onClick={() => {
                        if (isPlaying1) {
                        pause1();
                        } else {
                        start1();
                        }
                    }}
                    >
                    <img
                        src={isPlaying1 ? buttonPause : buttonPlay}
                        alt="buttonPlay"
                        className="section3-box__btn-img"
                    />
                </button>
                </div>
                <div className="section3-box">
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">Crazy Wind Sound</p>
                    <p className="section3-box__textbox-text2">Relex Mind</p>
                </div>
                <button
                    className="section3-box__btn"
                    onClick={() => (isPlaying2 ? pause2() : start2())}
                >
                    <img
                    src={isPlaying2 ? buttonPause : buttonPlay}
                    alt="buttonPlay"
                    className="section3-box__btn-img"
                    />
                </button>
                </div>
                <div className="section3-box">
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">Mental Wellness</p>
                    <p className="section3-box__textbox-text2">Strees Relief</p>
                </div>
                <button
                    className="section3-box__btn"
                    onClick={() => (isPlaying3 ? pause3() : start3())}
                >
                    <img
                    src={isPlaying3 ? buttonPause : buttonPlay}
                    alt="buttonPlay"
                    className="section3-box__btn-img"
                    />
                </button>
                </div>
            </div>
            <img src={yogaMasters} alt="yogaMasters" className="section3-container__img" />
      </div>
    </section>
  )
}

export default Section3