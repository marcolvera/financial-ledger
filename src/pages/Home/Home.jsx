import React from 'react';
import ShowCase from '../../components/ShowCase/ShowCase';
import Icons from '../../components/Icons/Icons';
import Card from '../../components/Card/Card';
import Cases from '../../components/Cases/Cases';
import Blog from '../../components/Blog/Blog';
import Team from '../../components/Team/Team';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return(
        <div>
           <ShowCase />
           <Icons />
           <Card />
           <Cases />
           <Blog />
           <Team />
           <Contact />
           <Footer />
        </div>
    )
};

export default Home;