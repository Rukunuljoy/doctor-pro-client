import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../Banner/Banner';
import { Blog } from '../Blog/Blog';
import HappyClients from '../HappyClients/HappyClients';
import Service from '../Service/Service';
import { Content } from '../Content/Content';
import { Find } from '../Find/Find';
import { OnlineDetails } from '../OnlineDetails/OnlineDetails';
import { News } from '../News/News';
import { Work } from '../Work/Work';
import ReachUs from '../ReachUs/ReachUs';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Find/>
            <Service/>
            <Work/>
            <OnlineDetails/>
            <News/>
            <HappyClients/>
            <Blog/>
            <ReachUs/>
            <Content/>
        </div>
    );
};

export default Home;