import React from 'react'

const Education = () => {
  return (
    <>
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 style={{textAlign:'left'}}>Education</h2>
          <div
            class="d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div class="flex-grow-1">
              <h3 class="mb-0">University of Calcutta</h3>
              <div class="subheading mb-3">Master of Computer Application(M.C.A)</div>
              <div>Computer Science and Application</div>
              <p>74.52%</p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">July 2011 - June 2014</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="flex-grow-1">
              <h3 class="mb-0">University of Calcutta</h3>
              <div class="subheading mb-3">B.sc with Computer Science Honours</div>
              <p>59.25%</p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">July 2008 - June 2011</span>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
    </>
  )
}

export default Education
