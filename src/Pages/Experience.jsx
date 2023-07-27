import React from "react";

const Experience = () => {
  return (
    <>
      <div>
        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <div style={{textAlign:'left'}}>
            <h2 class="mb-5"><u>Experience:</u></h2>
            </div>
            
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5" >
              <div class="flex-grow-">
                <h3 class="mb-2">School Coordinator</h3>
                <div class="subheading mb-4">School Net India Ltd.</div>
                <p>
                  1. Implimenting Technology Integration in teaching learning
                  process which enhances students digital literacy and make
                  education more effective.
                  2.Building and leading a cohesive team of teachers and staff, fostering a positive work environment
                and encouraging professional development oppurtunities for the school's educators.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">January 2022 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Academic Teacher</h3>
                <div class="subheading mb-3">Govt. aided Higher Secondary School.</div>
                <p>
                  1.Implemented an innivative curriculum that increased student engagement and improved overall grades by 20%.
                  2.Conducted workshops on coding and programming, resulting in five students qualifying for the inter school coding competition.
                  3.Initiated a cybersecurity awarness campaign, educating students on online safety, which received commendation from the school authority. 
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">June 2015 - March 2022</span>
              </div>
            </div>
            
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Experience;
