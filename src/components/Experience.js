import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import DiuIcon from '../images/diulogo.png';
import W3scloud from '../images/w3scloud.png';
import '../styles/experience.css';


const Experience = () => {

    return (
        <div className='parent-container'>

            <div className='child-container'>
            <h1>Experience</h1>
            </div>

            <div className='Timeline'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Aug 2021 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img className="time-icon" src={W3scloud} style={{borderRadius:"40%"}}/>}
                    >
                    <h3 className="vertical-timeline-element-title">Software Developer</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p>
                    W3S Cloud Technology | Full-time
                    </p>
                    <p>Junior React/Javascript at w3scloud technology</p>
                    <p>Dhaka, Bangladesh</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    className="vertical-timeline-element--work"
                    date="May 2016 - April 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img className="time-icon" src={DiuIcon} style={{borderRadius:"40%"}}/>}
                    >
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
                    <p>
                    Daffodil International University-DIU
                    </p>
                    <p>Bachelor of Science - BS, Computer Software Engineering</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            
        </div>
    )
}

export default Experience;
