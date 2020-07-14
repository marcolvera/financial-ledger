import React from 'react';
import ShowCase from '../../components/ShowCase/ShowCase';
import Icons from '../../components/Icons/Icons';
import Card from '../../components/Card/Card';
import Cases from '../../components/Cases/Cases';
import Blog from '../../components/Blog/Blog';
import Team from '../../components/Team/Team';


const Home = () => {
    return(
        <div>
           <ShowCase />
           <Icons />
           <Card />
           <Cases />
           <Blog />
           <Team />
        </div>
    )
};

export default Home;