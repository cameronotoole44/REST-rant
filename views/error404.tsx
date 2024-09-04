import React from 'react';
import Def from './default';

const Error404: React.FC = () => {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>This page is currently getting worked on</p>
                <img src="/images/jsxLolz.jpg" alt="jsx panic" />
            </main>
        </Def>
    );
};

export default Error404;
