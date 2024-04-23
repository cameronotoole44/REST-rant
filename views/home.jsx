const React = require('react');
const Def = require('./default');

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/breakfast.jpg" height="600px" alt="french toast breakfast"></img>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@randyfath?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Randy Fath</a> on <a href="https://unsplash.com/photos/food-photography-of-strawberries-oranges-and-pancakes-on-plates-SQ20tWzxXO0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
};

module.exports = home;
