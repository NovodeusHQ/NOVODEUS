import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/svgs/Logo.svg';
import ImportBootstrap from '../reusables/ImportBoostrap';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-black bg-black px-lg-5">
            <ImportBootstrap />
            <div className="container-fluid d-flex align-items-center">
                <Link className="navbar-brand py-0" href="/">
                    <Image src={Logo} alt='brand logo' className='my-2' />
                </Link>
                {/* <Image src={Logo} alt='brand logo' className='mt-0'/> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-link" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-5">
                            <Link className="nav-link active text-white" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link text-white" href="/our-projects">Projects</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link text-white" href="/about-us">About</Link>
                        </li>
                    </ul>
                    <span className="py-0">
                        <button type='button' className='btn contact-us-btn rounded-pill my-0'
                        >Contact Us</button>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Header