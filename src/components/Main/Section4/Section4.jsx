import "./Section4.scss"
import meditationWomen from "../../../assets/Homepage/Svg/meditationWomen.svg"
function Section4() {
  return (
    <section className="section4">
        <div className="section4-textbox">
            <h2 className="section4-textbox__title">The Best Of Meditation</h2>
            <p className="section4-textbox__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        </div>
        <div className="section4-wrap">
            <div className="section4-container1">
                <div className="section4-container1__box">
                    <p className="section4-container1__box-text1">The Peace</p>
                    <p className="section4-container1__box-text2">which of us ever undertakes laborious physical exercise, except to obtain some advantage from it.</p>
                </div>  
            
                <div className="section4-container1__box">
                    <p className="section4-container1__box-text1">Strength Building</p>
                    <p className="section4-container1__box-text2">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore.</p>
                </div>
                <div className="section4-container1__box">
                    <p className="section4-container1__box-text1">Quick Relextion</p>
                    <p className="section4-container1__box-text2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            <img src={meditationWomen} alt="meditationWomen" className="section4-img" />
            <div className="section4-container2">
                <div className="section4-container2__box">
                    <p className="section4-container2__box-text1">Relex & Refresh</p>
                    <p className="section4-container2__box-text2">The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                </div>
                <div className="section4-container2__box">
                    <p className="section4-container2__box-text1">Beauty Of Body</p>
                    <p className="section4-container2__box-text2">Various versions have evolved over the years  sometimes by accident sometimes on purpose injected humour and the like.</p>
                </div>
                <div className="section4-container2__box">
                    <p className="section4-container2__box-text1">Strees Relief</p>
                    <p className="section4-container2__box-text2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.</p>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Section4