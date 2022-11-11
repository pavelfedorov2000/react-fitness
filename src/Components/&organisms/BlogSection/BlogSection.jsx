import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../helpers/Loader';
import { useRequest } from '../../../hooks';
import { fetchBLog } from '../../../redux/actions/blog';
import { Button } from '../../@atoms';
import { ArticleCard, SectionTop } from '../../^molecules';

function BlogSection() {
    const dispatch = useDispatch();
    const blogItems = useSelector(({ blog }) => blog.articles);
    const isLoaded = useSelector(({ blog }) => blog.isLoaded);
    const [blogSection, loading, error] = useRequest(requestBlogSection);
    const [blogSliderItems, setBlogSliderItems] = useState([]);
    const [blogSuccessItems, setBlogSuccessItems] = useState([]);

    function requestBlogSection() {
        return axios.get('http://localhost:3001/blog_section');
    }

    useEffect(() => {
        dispatch(fetchBLog());
    }, []);

    useEffect(() => {
        setBlogSliderItems(blogItems.filter(article => !article.sale));
        setBlogSuccessItems(blogItems.filter(article => article.sale));
    }, [blogItems]);

    if (!blogSection) return;

    return (
        <section id="blog" className="blog-section">
            <div className="container">
                <div className="section-body blog-section__body">
                    <SectionTop className="blog-section__top" {...blogSection} />

                    <div className="blog-section__grid">
                        <Button className="blog-section__link-btn" {...blogSection.linkBtn} />
                        <div className="blog-section__items">
                            {isLoaded ?
                                blogSliderItems.map(article => (
                                    <ArticleCard key={article.id} badgeBg="white" {...article} />
                                ))
                                : Array(blogSliderItems.length).fill(0).map((_, index) => <Loader key={index} />)
                            }
                        </div>
                        <div className="blog-section__success">
                            {isLoaded ?
                                blogSuccessItems.map(article => (
                                    <ArticleCard key={article.id} badgeBg="black" {...article} />
                                ))
                                : Array(blogSuccessItems.length).fill(0).map((_, index) => <Loader key={index} />)
                            }
                        </div>
                        <Button className="blog-section__more" {...blogSection.btn} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;