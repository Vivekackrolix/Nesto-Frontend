import React from 'react';
import InformativeNavbar from '../Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './BlogListMain.css'
import ArticleNews from './ArticleNews/ArticleNews';
import ListProperty from '../PartnersDetail/ListProperty/ListProperty'
import LatestPost from './LatestPost/LatestPost';

export default function BlogListMain() {
    return (
        <>
            <InformativeNavbar/>
            <div className="blog-list-banner">
                <span className='blog-list-banner-heading'>Blog</span>
            </div>
            <div className='container'>
                {/* ArticleNews===
                ============== */}
                <ArticleNews />
                {/* ListProperty===
                =============== */}
                <ListProperty />
                {/* LatestPost======
                ================ */}
                <LatestPost />
                <br/><br/><br/><br/>
            </div>
            <Footer />
        </>
    );
}