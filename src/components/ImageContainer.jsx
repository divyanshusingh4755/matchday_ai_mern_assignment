import pvSindhu from "../assests/pv-sindhu.png"
import carolina from "../assests/carolina-china.png"
import india from "../assests/india.png"
import china from "../assests/china.png"

function ImageContainer() {
    return (
        <>
            <div className="image_container">
                <div className="game_detail">
                    <h3 className="game-detail-heading">Tokyo Olympics</h3>
                    <span className="game-detail-subheading">Semi Final Court 1</span>
                </div>
                <div className="match-detail">
                    <img src={pvSindhu} alt="" className="player-image" />
                    <div className="match-complete-detail">
                        <div className="match-detail-player-name">
                            <div className="country">
                                <img src={india} alt="" className="country_image" />
                                <span className="player_name">Shrikant Kadambi</span>
                            </div>
                            <div className="country">
                                <span>v/s</span>
                                <span className="score">11-21, 21-14, 21-19</span>
                            </div>
                            <div className="country">
                                <img src={china} alt="" className="country_image" />
                                <span className="player_name">Shrikant Kadambi</span>
                            </div>
                        </div>
                        <div>
                            <span className="additional-information">Average Rally Length: 9.6</span>
                            <span className="additional-information">Rest/Point: 6.8s</span>
                            <span className="additional-information">Match Duration: 1300s</span>
                        </div>
                    </div>
                    <img src={carolina} alt="" className="player-image" />
                </div>
            </div>
        </>
    )
}

export default ImageContainer;