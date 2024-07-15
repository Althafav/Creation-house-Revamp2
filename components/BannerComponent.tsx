import React from 'react'

export default function BannerComponent() {
    return (
        <div className="banner-wrapper">
            <div className="video-section">

                <video width="100%" autoPlay loop muted controls={false} preload="auto">
                    <source src="/assets/videos/26.mp4" type="video/mp4" className='banner-video' />
                </video>
            </div>

            <div className="text-container container">
                <h1 className='banner-heading'>We build premium events, exhibitions, and branded environments.</h1>

                <div className='menu-cta-wrapper mt-5'>
                    <button className='menu-cta-btn'><span>CONNECT WITH US</span></button>
                </div>
            </div>
        </div>
    )
}
