import React from 'react'
import FirstSectionComponent from './first-section/first-section.component'
import FourthSectionComponent from './fourth-section/fourth-section.component';
import {
    firstSectionObj,
    secondSectionObj,
    thirdSectionObj,
    fourthSectionObj,
} from './home-config';
import SecondSectionComponent from './second-section/second-section.component';
import ThirdSectionComponent from './third-section/third-section.component';

function Home() {
    return (
        <>
            <FirstSectionComponent  {...firstSectionObj} />
            <SecondSectionComponent {...secondSectionObj} />
            <ThirdSectionComponent  {...thirdSectionObj} />
            <FourthSectionComponent {...fourthSectionObj} />
        </>
    )
}

export default Home
