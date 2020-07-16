import React from 'react';
import BlogCase from '../../components/BlogCase/BlogCase';
import Post1 from '../../components/Post1/Post1';
import Post2 from '../../components/Post2/Post2';
import Post3 from '../../components/Post3/Post3';
import Footer from '../../components/Footer/Footer';

const Blog = () => {
    return(
        <div>
            <BlogCase />
            <Post1 />
            <Post2 />
            <Post3 />
            <Footer />
        </div>
    );
}

export default Blog;

