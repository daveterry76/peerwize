import React from 'react'
import '../Dashboard/styles/track.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Track = () => {


  return (
    <>
      <div className='track'>
        <div>
          <div className='track__one'>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2H18V10.635C18 11.0567 17.9083 11.4325 17.725 11.7625C17.5417 12.0925 17.285 12.3583 16.955 12.56L13.05 14.87L13.82 17.4H18L14.59 19.82L15.91 24L12.5 21.415L9.09 24L10.41 19.82L7 17.4H11.18L11.95 14.87L8.045 12.56C7.715 12.3583 7.45833 12.0925 7.275 11.7625C7.09167 11.4325 7 11.0567 7 10.635V2ZM9.2 4.2V10.635L11.4 11.955V4.2H9.2ZM15.8 4.2H13.6V11.955L15.8 10.635V4.2Z" fill="#2C96A2"/>
              </svg>
              <div>
                <h3>Track</h3>
                <p>Product Design</p>
              </div>
            </div>
            <div>
              <p>Learner</p>
              <CircularProgressBar />
            </div>
          </div>
        </div>

        <div>
          <div className='active__learning'>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.05 2.52979L4.03002 6.45979C2.10002 7.71979 2.10002 10.5398 4.03002 11.7998L10.05 15.7298C11.13 16.4398 12.91 16.4398 13.99 15.7298L19.98 11.7998C21.9 10.5398 21.9 7.72979 19.98 6.46979L13.99 2.53979C12.91 1.81979 11.13 1.81979 10.05 2.52979Z" stroke="#2C96A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.63012 13.0801L5.62012 17.7701C5.62012 19.0401 6.60012 20.4001 7.80012 20.8001L10.9901 21.8601C11.5401 22.0401 12.4501 22.0401 13.0101 21.8601L16.2001 20.8001C17.4001 20.4001 18.3801 19.0401 18.3801 17.7701V13.1301" stroke="#2C96A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.3999 15V9" stroke="#2C96A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h3>Active Learning</h3>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 9V3H15" stroke="#2C96A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 15V21H9" stroke="#2C96A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 3L13.5 10.5" stroke="#2C96A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5 13.5L3 21" stroke="#2C96A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='course'>
            <div>
              <h3>Course</h3>
              <p>Conducting Interview for better research enviro...</p>
            </div>
            <div>
              <CircularProgressBar />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Track


export const CircularProgressBar = () => {

  const percentage = 80;

  return (
    <>
      <CircularProgressbar 
                className='circular__progress--bar'
                value={percentage} 
                text={`${percentage}%`}
                styles={{
                  path: {
                    stroke: `#FBA04B`
                  }
                }}
                strokeWidth={15}
              />
    </>
  )
}