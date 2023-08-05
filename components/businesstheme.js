import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../containers/navbar';
import Loader from 'react-loader-spinner'
import Banner from '../containers/banner';
import Service from '../containers/service';
import About from '../containers/about';
import Blog from '../containers/blog';
import Video from '../containers/video';
import Skills from '../containers/skills';
import Project from '../containers/project';
import Portfolio from '../containers/portfolio';
import Testimonial from '../containers/testimonial';
import Contact from '../containers/contact';
import Brand from '../containers/brands';
import Footer from '../containers/footer';
import CopyRight from '../containers/copyright_text';
import ThemeColor from '../containers/themecolor';
import ThemeOption from '../containers/themeoptions';
import '../public/assets/scss/style.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const BusinessTheme = (props) => {
    const [loader, setLoader] = React.useState(false)
    React.useEffect(() => {
        const interval = setInterval(() => {
            setLoader(true)
        }, 3000);
        return () => clearInterval(interval);
    }, [])

    return (
        loader ?
            <React.Fragment>
                <Navbar />
                <div id="main-content">
                    <Banner ChangeClass={props.ThemeClass} />
                    <Service />
                    <About />
                    <Blog />
                    <Video />
                    <Skills />
                    <Project />
                    <Portfolio />
                    <Testimonial />
                    <Contact />
                    <Brand />
                    <Footer />
                    <CopyRight />
                    <ThemeColor />
                    <ThemeOption />
                </div>
            </React.Fragment>
            :
            <div className="theme-loader">
                <Loader
                    type="Triangle"
                    color="#e100ff "
                    height={150}
                    width={150}
                    timeout={3000}
                />
            </div>

    )
}

export default BusinessTheme