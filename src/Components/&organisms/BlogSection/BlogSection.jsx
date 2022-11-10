import axios from 'axios';
import React from 'react';
import { useRequest } from '../../../hooks';
import { Button } from '../../@atoms';
import { SectionTop } from '../../^molecules';

function BlogSection() {
    const [blogSection, loading, error] = useRequest(requestBlogSection);

    function requestBlogSection() {
        return axios.get('http://localhost:3001/blog_section');
    }

    return (
        blogSection && <section id="blog" className="blog-section">
            <div className="container">
                <div className="section-body blog-section__body">
                    <SectionTop className="blog-section__top" {...blogSection} />
                </div>
                <div className="blog-section__grid">
                    <Button className="blog-section__link-btn" {...blogSection.linkBtn} />
                    <div className="blog-section__success">
                        
                    </div>
                    <Button className="blog-section__more" {...blogSection.btn} />
                </div>
            </div>
        </section>
    );
}

export default BlogSection;