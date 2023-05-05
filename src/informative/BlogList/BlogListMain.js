import React, { useEffect } from 'react';
import InformativeNavbar from '../Navbar/Navbar'
import './BlogListMain.css'
import ArticleNews from './ArticleNews/ArticleNews';
import ListProperty from '../PartnersDetail/ListProperty/ListProperty'
import LatestPost from './LatestPost/LatestPost';
import Aos from 'aos';
import InformativeFooter from '../InformativeFooter/InformativeFooter'
import { Zoom } from 'react-reveal'

export default function BlogListMain() {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <InformativeNavbar />
            <div className="blog-list-banner">
                <Zoom duration={1000} delay={100}>
                    <span className='blog-list-banner-heading'>Blog</span>
                </Zoom>
            </div>
            <div className='container' style={{ overflowX: 'hidden' }}>
                {/* ArticleNews===
                ============== */}
                <ArticleNews />
                {/* ListProperty===
                =============== */}
                <ListProperty />
                {/* LatestPost======
                ================ */}
                <LatestPost />
                <br /><br /><br />
            </div>
            <InformativeFooter />
        </>
    );
}