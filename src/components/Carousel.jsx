import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

const Carousel = () => {
  return (
    <MDBCarousel interval={2500}>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://wallpapercave.com/wp/4nHuE6f.jpg' alt='dog looking pensive' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://wallpapercave.com/wp/xQf2O8c.jpg' alt='dog in grass' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://www.hdwallpaper.nu/wp-content/uploads/2015/11/Golden_Retriever_wallpaper_005.jpg' alt='dog in field' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://wallup.net/wp-content/uploads/2016/01/23947-animals-dog-bowtie-depth_of_field-hedges.jpg' alt='dog looking pensive' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://wallpapercave.com/wp/wp2289869.jpg' alt='dog looking pensive' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://wallup.net/wp-content/uploads/2018/10/08/969865-nature-golden-retrievers-dog-bokeh-depth-of-field-sunlight.jpg' alt='dog looking pensive' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://wallup.net/wp-content/uploads/2018/10/07/2390-dog-neck-belt.jpg' alt='dog looking pensive' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default Carousel;