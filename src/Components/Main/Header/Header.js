import './Header.css'

function Header(){
    return(
        <header>

            <div className="header-main">
                <div className="header-main-bg">
                    <div className="header-main-title">Unveiling the Wonders of the Universe</div>
                </div>

                <div className="kid-in-space-absolute">
                    <div className="kid"></div>
                    <div className="space-walk-card">
                        <div className="log-and-name">
                            <div className="header-card-logo">
                                <div className="card-logo-image1"></div>
                            </div>
                            <div className="header-card-title">Spacewalks</div>
                        </div>
                        <div className='spacewalk-content'>
                            <div className='lineGraph'></div>
                            <div className='pieGraph'></div>
                        </div>
                    </div>
                    <div className="exer-walk-card">
                        <div className="log-and-name">
                            <div className="header-card-logo">
                                <div className="card-logo-image2"></div>
                            </div>
                            <div className="header-card-title">Exercising</div>
                        </div>
                        <div className='exer-content'>
                            <div className='heartGraph'></div>
                        </div>
                    </div>
                    <div className="total-walk-card">
                        <div className="log-and-name">
                            <div className="header-card-logo">
                                <div className="card-logo-image3"></div>
                            </div>
                            <div className="header-card-title">Total time in space</div>
                        </div>
                        <div className='totaWalkContent'>
                            <div className='totalWalkContentText'>352D 5H 49M 20S</div>
                        </div>
                    </div>
                </div>

                <div className='headerMainContent'>
                    <div className='ourMission'>At odissey, our mission is to inspire, educate, and ignite your passion for the <br></br> cosmos. We are your premier destination for all things related to space <br></br> exploration, astronomy, and the mysteries of the universe. Whether you're a <br></br> seasoned astronomer or a curious novice, join us on a journey to the furthest <br></br> reaches of the cosmos. </div>
                    <div className='bottomOfHMC'>
                        <button className='GetStartedButton'>Get Started</button>
                        <div className='WatchVideo'>
                            <div className='watchVideoText'>Watch the Video</div>
                            <button className='watchTheVideoButton'>
                                <div className='WatchTheVideoButtonImage'></div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='spaceCompanyLogo'></div>

            </div>

        </header>
    )
}
export default Header