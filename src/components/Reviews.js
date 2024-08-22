import React from 'react';
import './css/Reviews.css';

const Reviews = () => {
    return (
        <section id="reviews" className="reviews">
            <h2>What People Are Saying About Ludo King</h2>
            <div className="review">
                <p>"Love this game!"</p>
                <p>- User 1</p>
            </div>
            <div className="review">
                <p>"Great game to play with friends."</p>
                <p>- User 2</p>
            </div>
            {/* Add more reviews as needed */}
        </section>
    );
}

export default Reviews;
