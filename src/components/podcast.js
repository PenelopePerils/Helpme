import React, { Component } from 'react';
//import searchbar from './searchbar';
import searchblogterms from './searchblogterms';
import Skills from './skills';
import Education from './education';
import Experience from './experience';
import SearchBar from './searchbar';




class Blog extends Component {
    render() {
      return(
        <div>
          {/* <Grid>
            <Cell col={4}> */}
            <SearchBar />
              <div>
                <img
                  src="https://www.maxpixel.net/static/photo/1x/Eyes-Animal-Farm-Milking-Cattle-Milk-Cow-Farming-35561.png"
                  alt="avatar"
                  style={{height: '200px'}}
                   />
              </div>
  
              <h2>SearchBlog</h2>
               
                 <Education
                   startYear={2007}
                   endYear={2009}
                   schoolName="My 2nd University"
                   schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                  <hr style={{borderTop: '3px solid #e22947'}} />
                <h2>Experience</h2>

              <Experience
                startYear={2009}
                endYear={2012}
                jobName="First Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

                <Experience
                  startYear={2012}
                  endYear={2016}
                  jobName="Second Job"
                  jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />

                <hr style={{borderTop: '3px solid #e22947'}} />

                <h2>Skills</h2>

                <Skills
                  skill="Funny"
                  progress={100}
                  />

                  <Skills
                    skill="Silly"
                    progress={80}
                    />

                    <Skills
                      skill="Adorable"
                      progress={50}
                      />

                      <Skills
                        skill="Precious"
                        progress={25}
                        />
            {/* </Cell>
          </Grid> */}
        </div>
      )
    }
  }
  export default Blog;
