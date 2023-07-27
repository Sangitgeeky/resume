import React from 'react'
import mern_certificate from './mern_certificate.jpg'

const Courses = () => {
  return (
    <>
    <section class='resume-section'>
        <div class="resume-section-content" >
        <div style={{textAlign:'left'}}>
            <h2 class="mb-5"><u>Courses and Certifications:</u></h2>
            <div class="flex-grow-">
                <p>Web Development with Mern Stack</p>
                </div>
                <img src={mern_certificate} height={300} width={600} alt=''/>
            </div>

        </div>

    </section>
      
    </>
  )
}

export default Courses
