import "./Section5.scss"
import twisted from "../../../assets/Homepage/Svg/twisted.svg"
import fitnes from "../../../assets/Homepage/Svg/fitnes.svg"

function Section5() {
  return (
    <section className="section5">
        <div className="section5-textbox">
            <h2 className="section5-textbox__title">Transform Your Body, Mind and Life Today</h2>
            <p className="section5-textbox__text">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos  sint occaecati cupiditate non provident.”</p>
        </div>
        <div className="section5-container">
            <div className="section5-box">
                <img src={twisted} alt="twisted" className="section5-box__img" />
                <div className="section5-box__cont">
                    <p className="section5-box__cont-text1">Antistrees Meditation</p>
                    <p className="section5-box__cont-text2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected.</p>
                    <p className="section5-box__cont-text3">These cases are perfectly simple and easy to distinguish. In a free hour when our power of choice is untrammelled.</p>
                    <button className="section5-box__cont-btn">Learn More</button>
                </div>
            </div>
            <div className="section5-box">
                <div className="section5-box__cont">
                    <p className="section5-box__cont-text1">Backyark Band Meditation</p>
                    <p className="section5-box__cont-text2">To take a trivial example, which of us ever undertakes laborious physical exercise except to obtain some advantage from it...</p>
                    <p className="section5-box__cont-text3">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <button className="section5-box__cont-btn">Learn More</button>
                </div>
                <img src={fitnes} alt="fitnes" className="section5-box__img" />
            </div>
        </div>
    </section>
  )
}

export default Section5