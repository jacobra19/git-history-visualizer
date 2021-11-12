import React from 'react';
import { Link } from 'react-router-dom';
import { Header, StyledOcticon, Avatar } from '@primer/components';
const APP_TITLE = import.meta.env.VITE_APP_TITLE || '';
const TopBar = () => {
    return (
        <Header>
            <Header.Item>
                <Header.Link fontSize={4} >
                    <Link style={{textDecoration:'none',color:'white'}} to="/">
                        <span >{APP_TITLE}</span>
                    </Link>
                </Header.Link>
            </Header.Item>
        </Header>
    );
};

export default TopBar;
