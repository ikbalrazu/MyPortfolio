import React from "react";

import p1img1 from '../images/projects/project2/img1.PNG';
import p1img2 from '../images/projects/project2/img2.PNG';
import p1img3 from '../images/projects/project2/img3.PNG';

//pchat images
import pchat1 from '../images/projects/P-Chat/pchat1.PNG';
import pchat2 from '../images/projects/P-Chat/pchat2.PNG';
import pchat3 from '../images/projects/P-Chat/pchat3.PNG';
import pchat4 from '../images/projects/P-Chat/pchat4.PNG';
import pchat5 from '../images/projects/P-Chat/pchat5.PNG';

//Portfolio - muhammadiqbal
import portfolio1 from '../images/projects/PortfolioMdIqbal/portfolio1.PNG';
import portfolio2 from '../images/projects/PortfolioMdIqbal/portfolio2.PNG';
import portfolio3 from '../images/projects/PortfolioMdIqbal/portfolio3.PNG';

//Investment Portal
import investmentportal1 from '../images/projects/InvestmentPortal/investmentportal1.PNG';
import investmentportal2 from '../images/projects/InvestmentPortal/investmentportal2.PNG';

//Zoho CRM - Extension | Find Address From Google Map
import findaddress1 from '../images/projects/FindAddress/findaddress1.png';
import findaddress2 from '../images/projects/FindAddress/findaddress2.png';
import findaddress3 from '../images/projects/FindAddress/findaddress3.png';

export const projects = [
    {
      Project:"1",
      ProjectName:"MyGroup",
      StartDate:"Sep 2019",
      EndDate:"Jan 2020",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"Django ",
      Backend:"Django"
    },
    {
      Project:"2",
      ProjectName:"E-commerce",
      StartDate:"Feb 2020",
      EndDate:"Jul 2020",
      ProjectURL:"https://loopbari.herokuapp.com",
      Description:"",
      ProjectImage:"",
      Frontend:"",
      Backend:"Django",
      Images:[
        {url:p1img1,caption:'Slide 1'},
        {url:p1img2,caption:'Slide 2'},
        {url:p1img3,caption:'Slide 3'},
      ] 
    },
    {
      Project:"3",
      ProjectName:"Zoho CRM - Duplicate Merge",
      StartDate:"Sep 2021",
      EndDate:"Oct 2021",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:""
    },
    {
      Project:"4",
      ProjectName:"Zoho CRM - Extension | Find Address From Google Map",
      StartDate:"Oct 2021",
      EndDate:"Nov 2021",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:"",
      Images:[
        {url:findaddress1,caption:'Slide 1'},
        {url:findaddress2,caption:'Slide 2'},
        {url:findaddress3,caption:'Slide 3'},
      ] 
    },
    {
      Project:"5",
      ProjectName:"Zoho CRM - Extension | Email & Phone validation and verify",
      StartDate:"Dec 2021",
      EndDate:"Jan 2022",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:""
    },
    {
      Project:"6",
      ProjectName:"Zoho CRM - Widget | Twilio Bulk SMS",
      StartDate:"Feb 2022",
      EndDate:"Mar 2022",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js | Bootstrap 5",
      Backend:"Node.js"
    },
    {
      Project:"7",
      ProjectName:"Portfolio - muhammadiqbal",
      StartDate:"Apr 2022",
      EndDate:"Present",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:"Node.js",
      Images:[
        {url:portfolio1,caption:'Slide 1'},
        {url:portfolio2,caption:'Slide 2'},
        {url:portfolio3,caption:'Slide 3'},
      ] 
    },
    {
      Project:"8",
      ProjectName:"Investment Portal",
      StartDate:"Jul 2022",
      EndDate:"Present",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:"Node.js | Zoho Creator",
      Images:[
        {url:investmentportal1,caption:'Slide 1'},
        {url:investmentportal2,caption:'Slide 2'},
      ] 
    },
    {
      Project:"9",
      ProjectName:"P-Chat-Pro",
      StartDate:"Jul 2022",
      EndDate:"Present",
      ProjectURL:"https://realchatappbyiqbal.netlify.app",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:"Node.js | Socket.io | MongoDB",
      Images:[
        {url:pchat1,caption:'Slide 1'},
        {url:pchat2,caption:'Slide 2'},
        {url:pchat3,caption:'Slide 3'},
        {url:pchat4,caption:'Slide 4'},
        {url:pchat5,caption:'Slide 5'},
      ] 
    },
]