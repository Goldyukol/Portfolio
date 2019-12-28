import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../NavMenu.sass';

export default props => {
    return (
        <Menu width={'100vw'} right {...props}>
            <Link
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='menu-item'
            >Main</Link>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='menu-item'
            >Skills</Link>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='menu-item'
            >Projects</Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='menu-item'
            >Contacts</Link>
        </Menu>
    );
};
