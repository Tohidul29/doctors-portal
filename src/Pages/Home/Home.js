import React from 'react';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import Info from './Info/Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;