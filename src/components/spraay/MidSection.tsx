import React from 'react';
import styles  from "../../app/our-projects/spraay/page.module.scss";
import Image from 'next/image';
import { images } from '@/exports/image';

const loremIpsumPlaceholder = "Lorem ipsum dolor sit amet consectetur. Convallis at neque nibh nec et ornare. Sollicitudin rutrum sed lacus mi pharetra. Tortor volutpat posuere a sed fames molestie augue. In faucibus nec placerat ultrices sed amet quis. Dapibus at enim amet ut nunc mauris interdum. Sagittis sit sed vitae lectus duis porttitor. Placerat bibendum morbi interdum imperdiet a orci in purus. Sed lectus facilisi aliquam viverra. Amet lacus enim tempor augue malesuada libero. Odio posuere integer turpis venenatis a arcu.\nDonec sed aliquam ullamcorper tincidunt. Laoreet cursus pharetra sed non nam eleifend aliquam blandit sed. Amet faucibus facilisi nunc risus morbi massa egestas. Fusce sed purus faucibus erat hendrerit elementum adipiscing aliquam morbi. Aliquam orci blandit ullamcorper lectus malesuada nulla eu varius dolor. Quam pellentesque auctor id at odio quis. Nunc sem enim nisl magna id amet. Nunc nibh sit at odio eleifend. Id id metus et odio. Congue nisi dolor eget vel nibh amet facilisi amet. Aliquam ultrices ipsum lectus nisl nunc felis tristique in pellentesque. Et dignissim tortor vestibulum accumsan ultrices cras vitae praesent non. In cursus consectetur consectetur purus maecenas a velit. Aliquam adipiscing cras vestibulum cursus in amet sapien amet mus. Ultricies euismod nunc rhoncus purus felis gravida id nec a.";

const MidSection = () => {
  return (
    <section className={`${styles.midSection} container-fluid row px-5`}>
        <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <hgroup>
                <h3 className=''>Date</h3>
                <p>November 6, 2023</p>
            </hgroup>

            <hgroup>
                <h3>Client</h3>
                <p>Spraay Technologies</p>
            </hgroup>

            <hgroup className=''>
                <h3>Service</h3>
                <p>Product Design</p>
                <p>Mobile App</p>
                <p>Branding</p>
                <p>Development</p>
            </hgroup>
        </div>

        <div className='col-12 col-md-9 pe-0 pe-md-6'>
            <article>
                <h3>About</h3>
                <p>{loremIpsumPlaceholder}</p>
            </article>

            <article>
                <h3>Challenge</h3>
                <p>{loremIpsumPlaceholder}</p>
            </article>

            <article>
                <h3>What We Did</h3>
                <p>{loremIpsumPlaceholder}</p>
                <Image src={images.ProjectWhatWeDidPlaceholder} alt="what we did" className='img-fluid'/>
            </article>

            <article>
                <h3>Solution</h3>
                <p>{loremIpsumPlaceholder}</p>
                <div className='d-flex flex-column flex-lg-row align-items-center justify-content-lg-between'>
                    <Image src={images.ProjectSolutionPlaceholder} alt="solution" className='img-fluid mb-3 mb-lg-0' />
                    <Image src={images.ProjectSolutionPlaceholder} alt="solution" className='img-fluid' />
                </div>
            </article>

            <article>
                <h3>Result</h3>
                <p>{loremIpsumPlaceholder}</p>
                <Image src={images.ProjectWhatWeDidPlaceholder} alt="what we did" className='img-fluid'/>
            </article>

        </div>

    </section>
  )
}

export default MidSection