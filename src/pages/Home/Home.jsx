import React from 'react';
import ShowCase from '../../components/ShowCase/ShowCase';
import Icons from '../../components/Icons/Icons';
import Card from '../../components/Card/Card';
import Cases from '../../components/Cases/Cases';


const Home = () => {
    return(
        <div>
           <ShowCase />
           <Icons />
           <Card />
           <Cases />
           <Card />
        </div>
    )
};

export default Home;