import React from 'react';
import Def from './default';

const Home: React.FC = () => {
    return (
        <Def>
            <main>
                <h1>RESTRANT</h1>
                {/* <a href="/places">See our places</a> */}
                <div>
                    <img src="/images/breakfast.jpg" height="600px" alt="french toast breakfast" />
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@randyfath?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Randy Fath</a> on <a href="https://unsplash.com/photos/food-photography-of-strawberries-oranges-and-pancakes-on-plates-SQ20tWzxXO0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn btn-secondary">Places Page</button>
                </a>
            </main>
        </Def>
    );
};

export default Home;

