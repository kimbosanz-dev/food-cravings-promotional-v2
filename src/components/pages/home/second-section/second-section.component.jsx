import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../../button/button.component';
import './second-section.component.scss';

function SecondSectionComponent({
    lightBg,
    lightText,
    headline,
    img,
    alt,
    imgStart,
    imgDeal,
    imgShop,
    imgGroup,
    height,
    width,
}) {
    return (
        <>
            <div className={lightBg ? 'second-section' : 'second-section darkBg'}>
                <div className="container">
                    <div className="row second-section-row" style={{
                        display: 'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
                    }}>
                        <div className="col">
                            <div className="second-section-text-wrapper">
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <div className="wrapped-text-container">
                                    <img src={imgDeal} height={height} width={width} alt="deal-template"/>
                                    <span>Equal opportunities for everyone</span>
                                    <p className="second-section-description"> Food Cravings PH supports small to medium <br/>
                                        businesses. Never worry about being <br/>
                                        outnumbered by large scale food businesses.</p>
                                </div>
                                <div className="wrapped-text-container">
                                    <img src={imgShop} height={height} width={width} alt="shope-template"/>
                                    <span>Setup your store for FREE</span>
                                    <p className="second-section-description"> Build your new or existing store for free! No  <br/>
                                        No service fees, no high commission, no extra <br/>
                                        anything to pay just to build your store.</p>
                                </div>
                                <div className="wrapped-text-container">
                                    <img src={imgGroup} height={height} width={width} alt="group-template"/>
                                    <span>Grow and support within us</span>
                                    <p className="second-section-description"> Because Food Cravings PH is a community <br/>
                                        driven app, supporting each other greatly helps <br/>
                                        everyone to grow!</p>
                                </div>
                                <div className="btn-container">
                                        <Link to="/">
                                            <Button buttonSize='btn--medium' buttonColor='primary'>
                                                    <img style={{marginTop: '0', marginRight: '15px'}}src="images/google-playstore-icon.png" alt="playstore.png" height="25" width="25"/>
                                                    <span>
                                                        Get in on PlayStore
                                                    </span>
                                            </Button>
                                        </Link>
                                        <Link to="/">
                                            <Button buttonSize='btn--medium' buttonColor='primary'>
                                                    <img style={{marginTop: '-6px', marginBottom: 'auto', marginRight: '0px'}} src="images/apple-icon.png" alt="apple.png" height="40" width="40"/>
                                                    <span>
                                                        Download on the App Store
                                                    </span>
                                            </Button>
                                        </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="second-section-img-wrapper">
                                <img src={img} alt={alt} className="second-section-img" />
                                {/* <img src={img} alt={alt} className="second-section-img-2" /> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondSectionComponent
