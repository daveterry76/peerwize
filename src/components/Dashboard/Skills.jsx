import React from 'react'
import { CircularProgressBar } from './Track'
import '../Dashboard/styles/skills.scss'

const Skills = () => {
  return (
    <>
        <div className='skills'>
            <div>
                <h3>+ Skills</h3>
            </div>
            <ul>
                <li>
                    <p>Wireframing</p>
                    <div>
                        <CircularProgressBar />
                    </div>
                </li>
                <li>
                    <p>User interface design</p>
                    <div>
                        <CircularProgressBar />
                    </div>                
                </li>
                <li>
                    <p>Colour psychology</p>
                    <div>
                        <CircularProgressBar />
                    </div>                
                </li>
            </ul>
        </div>
    </>
  )
}

export default Skills