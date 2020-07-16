import React from 'react';
import styles from './BlogCase.module.css'
import Nav from '../../components/Nav/Nav';
import BlogTxt from '../../components/BlogTxt/BlogTxt';


const BlogCase = () => {
    return (
        <div className={styles.background}>
            <Nav />
            <BlogTxt />
           
        </div>
    )
};

export default BlogCase;