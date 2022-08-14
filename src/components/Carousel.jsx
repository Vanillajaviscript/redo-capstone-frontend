import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';

const Carousel = () => {
  return (
    <div>
    <div style={{
        width: "100vw",
        height: "2em",
        background:"linear-gradient(to top, rgba(7, 4, 1, 0.735), rgba(0, 0, 0, 0.171))"

    }} >
    </div>
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
      <MDBCarouselCaption>
            <h1 style={{color: "darkgray", textShadow: "2px 2px 2px black"}}>Dr. Barker's Soap</h1>
            <h3 style={{color: "white", textShadow: "2px 2px 2px black"}}>A dog works hard to love his enemy, to help unite all dogkind free, or that being is not yet a dog; so, go the second mile, hold the other cheek brave, not meek! For we're All-One or none! All-One!!</h3>
          </MDBCarouselCaption>
    </MDBCarousel>
    </div>
  );
}

export default Carousel;