import React from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './BlogListMain.css'

export default function BlogListMain() {
    return (
        <>
            <Header />
                <div className="blog-list">
                    <span className='blog-list-heading'>Blog</span>
                </div>
            <Footer />
        </>
    );
}