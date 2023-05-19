import React, { useEffect, useState } from 'react';
import InformativeNavbar from '../Navbar/Navbar';
import './BlogDetailMain.css';
import Tips from './Tips/Tips';
import Aos from 'aos';
import { getAPI } from '../BlogList/BlogListApi/ApiRequest';
import { apiEndpoints } from '../BlogList/BlogListApi/ApiEndpoint';
import { useParams } from "react-router-dom";




const BlogDetailMain = () => {
  const [blogDetails, setBlogsDetails] = useState([]);
  const params = useParams();
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);

  useEffect(() => {
    const getPropertyById = async () => {
      const response = await getAPI(`${apiEndpoints.getBlogBySlug}?slug=${params.slug}`
      );
      setBlogsDetails(response?.data[0]);
    };
    getPropertyById();
  }, []);

  console.log("blog image", blogDetails);

  return (
    <>
      <InformativeNavbar />
      <div className="blog-detail-banner"
        style={{ backgroundImage: `url(${blogDetails.thumbnailImage}` }}
      >{/* BannerImage */}</div>
      <Tips

      />
    </>
  );
};

export default BlogDetailMain;
