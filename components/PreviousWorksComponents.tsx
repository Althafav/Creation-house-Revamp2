import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import Globals from '@/modules/Globals';


export default function PreviousWorksComponents() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className="previous-work-wrapper" >

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading-wrapper mb-4">
                            <h2 className="section-heading">Previous Projects</h2>
                            <div className="underline" />
                        </div>
                        <p className='desc mb-4'>Discover Our Portfolio of Spectacular Creations.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <div className="embla" ref={emblaRef}>
                            <div className="embla__container">
                                <div className="embla__slide">
                                    <div className="">
                                        <div className="previous-work-card">
                                            <Image width={520} height={450} src={`${Globals.BASE_URL}/assets/imgs/ADX.png`} alt="Adx" />
                                            <div className="text-content-box">
                                                <div className="legend mb-3">
                                                    <span>Exhibition</span>
                                                </div>
                                                <div className="heading-wrap mb-2">
                                                    <h3>ADX: Showcasing Financial Sector Innovations</h3>
                                                </div>
                                                <p className='description'>Explore our impactful designs at ADX, where financial expertise meets creative exhibition excellence.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="embla__slide">
                                    <div className="">
                                        <div className="previous-work-card">
                                            
                                        </div>
                                    </div>

                                </div>

                                <div className="embla__slide">
                                    <div className="">
                                        <div className="previous-work-card">
                                           
                                        </div>
                                    </div>

                                </div>

                                <div className="embla__slide">
                                    <div className="">
                                        <div className="previous-work-card">
                                           
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <button className="embla__next glow-on-hover" onClick={scrollNext}>
                            <svg className="glow-svg" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.96 23.4745L17.0067 14.1453C16.5983 13.7987 16 14.1112 16 14.6708V33.3292C16 33.8888 16.5983 34.2013 17.0067 33.8547L27.96 24.5255C28.2735 24.2585 28.2735 23.7415 27.96 23.4745Z" fill="#7BD0E0" />
                                <path d="M35.7649 23.4745L24.8117 14.1453C24.4032 13.7987 23.8049 14.1112 23.8049 14.6708V33.3292C23.8049 33.8888 24.4032 34.2013 24.8117 33.8547L35.7649 24.5255C36.0784 24.2585 36.0784 23.7415 35.7649 23.4745Z" fill="#7BD0E0" />
                                <circle cx="24" cy="24" r="22.5" stroke="#8BE2C6" strokeWidth="3" />
                            </svg>
                        </button>
                    </div>


                </div>


            </div>
        </section>
    )
}
