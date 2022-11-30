import React from 'react';
import { useTitle } from '../hooks/useTitle';
import Banner from './Banner';
import PhotoGallery from './PhotoGallery';

import Services from './Services';
import TeamMember from './TeamMember';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <PhotoGallery></PhotoGallery>
            <TeamMember></TeamMember>
            
        </div>
    );
};

export default Home;