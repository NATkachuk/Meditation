import "./Section2.scss"
import lotos from "../../../assets/Homepage/Png/lotos.png"
function Section2() {
  return (
    <section className="section2">
        <div className="section2-textbox">
            <h2 className="section2-textbox__title">Practice Wherever You Want, Whenever You Need</h2>
            <p className="section2-textbox__text">“These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.”</p>
        </div>
        <div className="section2-container">
            <img src={lotos} alt="" className="section2-container__img" />
            <div className="section2-container__box">
                <div className="section2-container__box-cont">
                    <p className="section2-container__box-cont-text">Meditation Wind</p>
                    <p className="section2-container__box-cont-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected.</p>
                </div>
                <div className="section2-container__box-cont">
                    <p className="section2-container__box-cont-text">Strees Reduction</p>
                    <p className="section2-container__box-cont-text">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally can procure him some great pleasure.</p>
                </div>
                <div className="section2-container__box-cont">
                    <p className="section2-container__box-cont-text">Self Compassion</p>
                    <p className="section2-container__box-cont-text">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2