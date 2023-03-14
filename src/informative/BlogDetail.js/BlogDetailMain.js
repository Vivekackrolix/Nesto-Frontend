import React, {useEffect} from 'react'
import InformativeNavbar from '../Navbar/Navbar'
import './BlogDetailMain.css'
import Tips from './Tips/Tips'
import Aos from 'aos'

const BlogDetailMain = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
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