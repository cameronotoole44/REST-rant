const React = require('react');
const Def = require('./default');

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>this page is currently getting worked on</p>
                <img src="/images/jsxLolz.jpg" alt="jsx panic"></img>
            </main>
        </Def>
    )
};

module.exports = error404;