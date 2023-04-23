import React, { useEffect } from 'react';
import InformativeNavbar from '../Navbar/Navbar'
import './BlogListMain.css'
import ArticleNews from './ArticleNews/ArticleNews';
import ListProperty from '../PartnersDetail/ListProperty/ListProperty'
import LatestPost from './LatestPost/LatestPost';
import Aos from 'aos';
import InformativeFooter from '../InformativeFooter/InformativeFooter'

export default function BlogListMain() {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <InformativeNavbar />
            <div className="blog-list-banner">
                <span className='blog-list-banner-heading' data-aos='zoom-in'>Blog</span>
            </div>
            <div className='container' style={{ overflowX: 'hidden' }}>
                {/* ArticleNews===
                ============== */}
                <ArticleNews />
                {/* ListProperty ===
                ================ */}
                <ListProperty />
                {/* LatestPost======
                ================ */}
                <LatestPost />
                <br /><br /><br /><br />
            </div>
            <InformativeFooter />
        </>
    );
}