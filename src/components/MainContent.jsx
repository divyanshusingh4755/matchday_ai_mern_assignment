import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import court from "../assests/court.png"

function MainContent() {
    useEffect(() => {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    panel.style.marginTop = null
                    panel.style.marginBottom = null
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    panel.style.marginTop = "20px"
                    panel.style.marginBottom = "20px"
                }
            });
        }
    }, [])
    return (
        <>
            <div className="main_content">
                <div className="tab">
                    <button className="tablinks">Game Analytics</button>
                    <button className="tablinks">Game Footage</button>
                </div>

                <div id="Game Analytics" className="tabcontent">
                    <div className="content">
                        <ul className="sidebar-link">
                            <li className="heading">Basic Analysis</li>
                            <li>Short Analysis</li>
                            <li>Game Overview</li>
                            <li>Winner & Errors</li>
                            <li>Rally Length Analysis</li>
                            <li className="heading">Advacned Analysis</li>
                            <li>Area Wise Defence</li>
                            <li>Points won v/s lost</li>
                            <li>Attack & Defence</li>
                            <li>Winner Short Combination</li>
                        </ul>
                        <div className="main-sidebar-content">
                            <div className="card-border">
                                <div className="content-sidebar">
                                    <h2 className="content-heading">Area Wise Analysis</h2>
                                    <div className="content-heading-content">
                                        <img className="content-image" src={court} alt="" />
                                        <div className="select-game">
                                            <label>Select Game</label><br />
                                            <select className="content-select">
                                                <option>Overview</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab">
                                    <button className="tablinks-inner">Shrikanth Kadambi</button>
                                    <button className="tablinks-inner">Tanongsak Saensomboonsuk</button>
                                </div>

                                <div id="India" className="tabcontent">
                                    <button className="accordion"><span className="shots">10%</span>{" "}Drop</button>
                                    <div className="panel">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td></td>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Straight <br /><span className="arrow">&#8593;</span></th>
                                                    <th scope="col">Cross <br /> <span className="arrow">&#8599;</span></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Count</th>
                                                    <td>36</td>
                                                    <td>23</td>
                                                    <td>19</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="winner">Winner</th>
                                                    <td className="winner">6</td>
                                                    <td className="winner">1</td>
                                                    <td className="winner">5</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="error">Errors</th>
                                                    <td className="error">9</td>
                                                    <td className="error">1</td>
                                                    <td className="error">1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <button className="accordion"><span className="shots">20%</span>{" "}Toss</button>
                                    <div className="panel">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td></td>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Straight <br /><span className="arrow">&#8593;</span></th>
                                                    <th scope="col">Cross <br /> <span className="arrow">&#8599;</span></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Count</th>
                                                    <td>36</td>
                                                    <td>23</td>
                                                    <td>19</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="winner">Winner</th>
                                                    <td className="winner">6</td>
                                                    <td className="winner">1</td>
                                                    <td className="winner">5</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="error">Errors</th>
                                                    <td className="error">9</td>
                                                    <td className="error">1</td>
                                                    <td className="error">1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <button className="accordion"><span className="shots">20%</span>{" "}Smash</button>
                                    <div className="panel">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td></td>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Straight <br /><span className="arrow">&#8593;</span></th>
                                                    <th scope="col">Cross <br /> <span className="arrow">&#8599;</span></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Count</th>
                                                    <td>36</td>
                                                    <td>23</td>
                                                    <td>19</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="winner">Winner</th>
                                                    <td className="winner">6</td>
                                                    <td className="winner">1</td>
                                                    <td className="winner">5</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="error">Errors</th>
                                                    <td className="error">9</td>
                                                    <td className="error">1</td>
                                                    <td className="error">1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="more-content">
                                <span className="more-content-text"> <FontAwesomeIcon icon={faChevronLeft} className="more-content-icon" />{" "}Rally Length Analysis</span>
                                <span className="more-content-text">Area Wise Defence{" "}<FontAwesomeIcon icon={faChevronRight} className="more-content-icon" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent;