import React from "react";
import * as CgIcons from 'react-icons/cg';
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
//import resumeicon from '../icons/resume.png';

export const SidebarData = [
    {
        title: 'About',
        path:"/#aboutpage",
        icon:<CgIcons.CgProfile/>,
        cName:'nav-text'
    },
    {
        title: 'Experience',
        path:"/#experiencepage",
        icon:<GiIcons.GiGiftOfKnowledge/>,
        cName:'nav-text'
    },
    {
        title: 'Work',
        path:"/work",
        icon:<MdIcons.MdWork/>,
        cName:'nav-text'
    },
    {
        title: 'Contact',
        path:"/contact",
        icon:<MdIcons.MdContactMail/>,
        cName:'nav-text'
    },
    {
        title: 'Resume',
        path:"/",
        icon:<ImIcons.ImProfile/>,
        cName:'nav-text'
    }
]