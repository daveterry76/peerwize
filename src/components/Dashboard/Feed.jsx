import React from 'react'
import firstCourseImg from '../Dashboard/assets/first-course.svg'
import secondCourseImg from '../Dashboard/assets/second-course.svg'
import thirdCourseImg from '../Dashboard/assets/third-course.svg'
import rating from '../Dashboard/assets/rating.svg'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

const courses = [
  {
    image: firstCourseImg,
    courseName: '',
    rating: 4.3
  },
  {
    image: secondCourseImg,
    courseName: '',
    rating: 4.3
  },
  {
    image: thirdCourseImg,
    courseName: '',
    rating: 4.3
  },
  {
    image: secondCourseImg,
    courseName: '',
    rating: 4.3
  },
]

const responsive = {
  // superLargeDesktop: {
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5
  // },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Feed = () => {
  return (
    <>
      <div style={{width: '850px', marginTop: '1rem', marginInline: '0.5rem', borderRadius: '16px', background: 'var(--Primary-00, #F7FCFD)', paddingBlock: '0.5rem', paddingInline: '0.5rem', borderWidth: '1px', }}>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingInline: '1rem', marginBlock: '1rem'}}>
          <div style={{fontSize: '16px', fontWeight: 700}}>+ My Feed</div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 9V3H15" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 15V21H9" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 3L13.5 10.5" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 13.5L3 21" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className="mt-6"
              infinite
              keyBoardControl
              minimumTouchDrag={80}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              slidesToSlide={1}
              swipeable
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-width-300-px"
            >
        {/* <div style={{display: 'flex', gap: '0.5rem', marginTop: '2rem'}}> */}
              {courses.map((course) => (
                <>
                  <div style={{width: '275px', borderWidth: '0.5px', boxShadow: '0px 2px 8px 0px rgba(17, 0, 255, 0.16)', borderRadius: '8px 8px 0px 0px'}}>
                    <img width='275' src={course.image} alt='course img' />
                    <div style={{padding: '0.5rem'}}>
                      <p
                        style={{
                          color: 'var(--Accent-Black, #141414)',
                          fontSize: '11px',
                          fontWeight: '700',
                          lineHeight: '150%'
                        }}
                      >Course</p>
                      <h3
                        style={{
                          color: 'var(--Accent-Black, #141414)',
                          fontSize: '16px',
                          fontWeight: '400',
                          lineHeight: '150%'
                        }}
                      >Conducting Interview for better research enviro...</h3>
                      <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <img src={rating} alt='stars' />
                        <p
                          style={{
                            color: 'var(--Accent-Black, #141414)',
                            fontSize: '13px',
                            fontWeight: '400',
                            lineHeight: '150%'
                          }}
                        >{course.rating}(2)</p>
                      </div>
                      <button
                        style={{
                          background: 'var(--primary-primary-05-main, #37BBCA)',
                          border: '1px',
                          borderRadius: '4px',
                          color: '#fff',
                          cursor: 'pointer',
                          display: 'flex',
                          padding: '8px 16px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '8px',
                          alignSelf: 'stretch',
                          width: '100%'
                        }}
                      >
                        View Course
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </Carousel>
          {/* </div> */}
      </div>
    </>
  )
}

export default Feed