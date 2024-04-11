import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/svgs/Logo.svg';
import Telephone from '../../assets/svgs/icons/telephone.svg';
import Message from '../../assets/svgs/icons/message.svg';
import Instagram from '../../assets/svgs/icons/instagram.svg';
import Behance from '../../assets/svgs/icons/behance.svg';

const Footer = () => {
    return (
        <footer className="footer text-white pt-4 px-0">

            <div className="container-fluid row px-0 mx-0 main-footer">

                <div className="col-12 col-md-3 fg-subtle px-5">
                    <Image src={Logo} alt='brand logo' className='my-2 ' />

                    <div className='mt-2'>
                        <Image src={Telephone} alt='telephone' className='my-2' />
                        &nbsp;
                        +012 345 6789
                        <br />
                        <Image src={Message} alt='message' className='my-2' />
                        &nbsp;
                        Hello@novodeus.co
                    </div>

                    <h3 className='connect-with-us mt-4'>Connect with us</h3>

                    <div className='mb-4'>
                        <Image src={Instagram} alt='instagram' className='' />
                        &nbsp; &nbsp;
                        <Image src={Behance} alt='instagram' className='' />
                    </div>

                </div>

                <div className="col-12 col-md-9 row">
                    <div className="d-none d-md-block col-md-2"></div>
                    <div className="col-12 col-md-3 mt-2 mt-md-0">
                        <div className="footer-col">
                            <div className="footer-header mb-3">
                                Main Pages</div>
                            <div className="footer-item mb-2">
                                Home</div>
                            <div className="footer-item mb-2">
                                Works</div>
                            <div className="footer-item mb-2">
                                ABout Us</div>
                            <div className="footer-item mb-2">
                                Blog</div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 mt-2 mt-md-0">
                        <div className="footer-col">
                            <div className="footer-header mb-3">
                                Services</div>
                            <div className="footer-item mb-2">
                                Branding</div>
                            <div className="footer-item mb-2">
                                Product Design</div>
                            <div className="footer-item mb-2">
                                Development</div>
                            <div className="footer-item mb-2">
                                Social Media Management</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="py-3 copyright container-fluid d-flex justify-content-end align-items-center mx-0">
                <div className="px-5 fg-subtle">
                    Novodeus © 2023
                </div>

            </div>

        </footer>
    )
}

export default Footer