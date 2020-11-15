import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../button/button.component';
import './first-section.component.scss';

function FirstSectionComponent({
    lightBg,
    lightText,
    headline,
    img,
    alt,
    imgStart,
}) {
    return (
        <>
            <div className={lightBg ? 'first-section' : 'first-section darkBg'}>
                <div className="container">
                    <div className="row first-section-row" style={{
                        display: 'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
                    }}>
                        <div className="col">
                            <div className="first-section-text-wrapper">
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className="first-section-sub">
                                Craving for something? Or looking to grow your food business? 
                                <span style={{color: '#FFC43D', fontWeight: '700'}}> Food Cravings PH </span> is definitely for you!
                                </p>
                                <div>
                                    <Link to="/">
                                        <Button buttonSize='btn--wide' buttonColor='primary'>
                                            <div style={{
                                                display: 'flex',
                                                flexWrap: 'nowrap',
                                                justifyContent: 'center',
                                            }}>
                                                <img style={{marginTop: '0'}}src="images/google-playstore-icon.png" alt="playstore.png" height="25" width="25"/>
                                                <span>Get in on Play</span> 
                                            </div>
                                        </Button>
                                    </Link>
                                    <Link to="/">
                                        <Button buttonSize='btn--wide' buttonColor='primary'>
                                            <div style={{
                                                display: 'flex',
                                                flexWrap: 'nowrap',
                                                justifyContent: 'center',
                                            }}>
                                                <img style={{marginTop: '0', marginBottom: '30px'}}src="images/apple-icon.png" alt="apple.png" height="40" width="40"/>
                                                <span>Download on the App Store</span>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="first-section-img-wrapper">
                                {/* <img src={img} alt={alt} className="first-section-img" height="500" width="300" style={{marginTop: '100px', marginRight: '0px'}}/>
                                <img src={img} alt={alt} className="first-section-img" height="500" width="300" style={{marginLeft: '10px'}}/> */}
                                <img src={img} alt={alt} className="first-section-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstSectionComponent
