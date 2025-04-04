import "./Section1.scss"
import Women from "../../../assets/Homepage/Svg/Women.svg"
import meditation from "../../../assets/Homepage/Svg/meditation.svg"
import yoga from "../../../assets/Homepage/Svg/yoga.svg"
import sound from "../../../assets/Homepage/Svg/sound.svg"
function Section1() {
  return (
    <section className="section1">
        <div className="section1-container">
            <h1 className="section1-container__title">Meditations Helps You Detoxify Your Body</h1>
            <p className="section1-container__text">“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout point of using Lorem Ipsum is that it has a more-or-less.”</p>
            <button className="section1-container__btn">Get Start</button>
        </div>
        <img src={Women} alt="Women" className="section1__img" />
        <div className="section1-container2">
            <div className="section1-box">
                <img src={meditation} alt="meditation" className="section1-box__img" />
                <p className="section1-box__text1">Meditation</p>
                <p className="section1-box__text2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <button className="section1-box__btn">Learn More</button>
            </div>
            <div className="section1-box">
                <img src={yoga} alt="yoga" className="section1-box__img" />
                <p className="section1-box__text1">Yoga</p>
                <p className="section1-box__text2"> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button className="section1-box__btn">Learn More</button>
            </div>
            <div className="section1-box">
                <img src={sound} alt="sound" className="section1-box__img" />
                <p className="section1-box__text1">Sound</p>
                <p className="section1-box__text2"> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.</p>
                <button className="section1-box__btn">Learn More</button>
            </div>
        </div>
    </section>
  )
}

export default Section1