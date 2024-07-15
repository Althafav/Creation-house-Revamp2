import Globals from '@/modules/Globals'
import Image from 'next/image'
import React from 'react'

export default function ServiceSectionComponent() {
    return (
        <section className="services-section-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="heading-wrapper">
                            <h2 className="section-heading">Our Services</h2>
                            <div className="underline" />
                        </div>
                    </div>
                </div>

                <div className="row mt-5 no-gutters justify-content-center">
                    <div className="col-lg-4 mb-4">
                        <div className="service-card">
                            <div className="service-head">
                                <p>CUSTOMIZED BOOKING STAND</p>
                            </div>
                            <Image width={600} height={600} src={`${Globals.BASE_URL}assets/imgs/service1.jpg`} alt="service" className="service-img" quality={100} />
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="service-card">
                            <div className="service-head">
                                <p>EVENT SERVICE</p>
                            </div>
                            <Image width={600} height={600} src={`${Globals.BASE_URL}assets/imgs/service-2.jpg`} alt="service" className="service-img" quality={100} />
                        </div>
                    </div>


                    <div className="col-lg-4 mb-4">
                        <div className="service-card">
                            <div className="service-head">
                                <p>Audio Visual Service</p>
                            </div>
                            <Image width={600} height={600} src={`${Globals.BASE_URL}assets/imgs/service-3.jpg`} alt="service" className="service-img" quality={100} />
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="service-card">
                            <div className="service-head">
                                <p>Furniture Rental</p>
                            </div>
                            <Image width={600} height={600} src={`${Globals.BASE_URL}assets/imgs/service-4.jpg`} alt="service" className="service-img" quality={100} />
                        </div>
                    </div>


                    <div className="col-lg-4 mb-4">
                        <div className="service-card">
                            <div className="service-head">
                                <p>Official Contractor</p>
                            </div>
                            <Image width={600} height={600} src={`${Globals.BASE_URL}assets/imgs/service-5.jpg`} alt="service" className="service-img" quality={100} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
