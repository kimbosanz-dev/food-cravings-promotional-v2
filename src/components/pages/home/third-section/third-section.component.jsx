import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../../button/button.component';
import './third-section.component.scss';

function ThirdSectionComponent({
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
            <div className={lightBg ? 'third-section' : 'third-section darkBg'}>
                <div className="container">
                    <div className="row third-section-row" style={{
                        display: 'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
                    }}>
                        <div className="col">
                            <div className="third-section-img-wrapper">
                                <img src={img} alt={alt} className="third-section-img" />
                                {/* <img src={img} alt={alt} className="third-section-img-2" /> */}
                            </div>
                        </div>
                        
                        <div className="col">
                            <div className="third-section-text-wrapper">
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <div className="wrapped-text-container">
                                    <img src={imgDeal} height={height} width={width} alt="deal-template"/>
                                    <span>Equal opportunities for everyone</span>
                                    <p className="third-section-description"> Food Cravings PH supports small to medium <br/>
                                        businesses. Never worry about being <br/>
                                        outnumbered by large scale food businesses.</p>
                                </div>
                                <div className="wrapped-text-container">
                                    <img src={imgShop} height={height} width={width} alt="shope-template"/>
                                    <span>Setup your store for FREE</span>
                                    <p className="third-section-description"> Build your new or existing store for free! No  <br/>
                                        No service fees, no high commission, no extra <br/>
                                        anything to pay just to build your store.</p>
                                </div>
                                <div className="wrapped-text-container">
                                    <img src={imgGroup} height={height} width={width} alt="group-template"/>
                                    <span>Grow and support within us</span>
                                    <p className="third-section-description"> Because Food Cravings PH is a community <br/>
                                        driven app, supporting each other greatly helps <br/>
                                        everyone to grow!</p>
                                </div>
                                <div>
                                    <Link to="/">
                                        <Button buttonSize='btn--wide' buttonColor='primary'>
                                            <span>Get in on PlayStore</span>
                                        </Button>
                                    </Link>
                                    <Link to="/">
                                        <Button buttonSize='btn--wide' buttonColor='primary'>
                                            <span>Download on the App Store</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdSectionComponent
