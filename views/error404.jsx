const React = require('react');
const Def = require('./default');

function error404() {
    return (
        <def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>this page is currently getting worked on</p>
            </main>
        </def>
    )
};

module.exports = error404;