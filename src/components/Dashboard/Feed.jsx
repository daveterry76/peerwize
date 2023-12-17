import React from 'react'
import firstCourseImg from '../Dashboard/assets/first-course.svg'
import secondCourseImg from '../Dashboard/assets/second-course.svg'
import thirdCourseImg from '../Dashboard/assets/third-course.svg'
import rating from '../Dashboard/assets/rating.svg'

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
]

const Feed = () => {
  return (
    <>
      <div style={{marginTop: '1rem', marginInline: '0.5rem', borderRadius: '16px', background: 'var(--Primary-00, #F7FCFD)', paddingBlock: '0.5rem', paddingInline: '0.5rem', borderWidth: '1px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingInline: '1rem'}}>
          <div>+ Feed</div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 9V3H15" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 15V21H9" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 3L13.5 10.5" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 13.5L3 21" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div style={{display: 'flex', gap: '0.5rem', marginTop: '2rem'}}>
          {courses.map((course) => (
            <>
              <div style={{borderWidth: '0.5px', boxShadow: '0px 2px 8px 0px rgba(17, 0, 255, 0.16)', borderRadius: '8px 8px 0px 0px'}}>
                <img width='285' src={course.image} alt='course img' />
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
        </div>
      </div>
    </>
  )
}

export default Feed