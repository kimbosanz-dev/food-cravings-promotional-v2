import React from 'react';
import './fourth-section.component.scss';

function FourthSectionComponent({
    lightBg,
    headline,
    colDesc,
    imgStart,
    imgDeal,
    height,
    width,
    contentTitle
}) {
    return (
        <>
             <div className={lightBg ? 'fourth-section' : 'fourth-section darkBg'}>
                <div className="container">
                    <div className="row fourth-section-row" style={{
                        display: 'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
                    }}>
                        <div className="col" style={{textAlign: 'center'}}>
                            <h1>{headline}</h1>
                        </div>
                    </div>
                    <div className="row fourth-section-row">
                        <div className="col fourth-section-col">
                            <img src={imgDeal} height={height} width={width} alt="deal-template" />
                            <div className="content">
                                <span>{contentTitle}</span>
                                <p className="fourth-section-description">{colDesc}</p>
                            </div>
                        </div>
                        <div className="col fourth-section-col">
                            <img src={imgDeal} height={height} width={width} alt="deal-template" />
                            <div className="content">
                                <span>{contentTitle}</span>
                                <p className="fourth-section-description">{colDesc}</p>
                            </div>
                        </div>
                        <div className="col fourth-section-col">
                            <img src={imgDeal} height={height} width={width} alt="deal-template" />
                            <div className="content">
                                <span>{contentTitle}</span>
                                <p className="fourth-section-description">{colDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FourthSectionComponent
