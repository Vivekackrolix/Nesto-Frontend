import React from 'react'
import InformativeNavbar from '../Navbar/Navbar'
import './BlogDetailMain.css'
import Tips from './Tips/Tips'

const BlogDetailMain = () => {
    return (
        <>
            <InformativeNavbar />
            <div className="blog-detail-banner">
                {/* BannerImage */}
            </div>
            <Tips />
        </>
    )
}

export default BlogDetailMain