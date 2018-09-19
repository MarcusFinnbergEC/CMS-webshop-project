import React, { Component } from 'react';
import FormReviews from './FormReviews';


class Reviews extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
        }
    }

    componentDidMount() {
        this.getReviews();
        console.log("cdm körs");
    }
    getReviews() {
        fetch(`http://localhost:1337/review`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(reviews => reviews.json())
            .then((res) => {
                this.setState({
                    reviews: res.reverse(),
                });
                console.log("första hämtning: ", res)
            });
    }

    /*reviewID: review._id,
    id: review.ProductID,
    review: review.Review,
    created: review.createdAt,
    author: review.Author*/
    render() {
        console.log("render körs");
        const rev = this.state.reviews.map(review => {
            if (review.ProductID.match(this.props.id)) {
                console.log("console log", review);
                return (

                <div className="review-post">
                    <div>
                        <em>Rating</em>
                        <h3>{review.Rating}</h3>
                    </div>
                    <div className="review-review-div">
                        <p>{review.Review}</p>
                        <div className="review-details">
                        <p>{review.Author}</p>
                        <em>{review.createdAt.substring(0,10)}</em>
                        </div>
                    </div>
                </div>
                )
            }
            return null;
        }).filter((review) => review !== null);
        console.log("rev after map", rev);
        if (rev.length >= 1 ) {
            return (
                <div id="review-main-div">
                    <header>
                        <h3>Reviews</h3>
                    </header>
                    <div>
                    {rev}
                        <FormReviews id={this.props.id} updateReview={this.getReviews.bind(this)}/>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <header>
                    <h3>Reviews</h3>
                </header>
                <div>
                    <p>There are no reviews for this product</p>
                    <FormReviews id={this.props.id} updateReview={this.getReviews.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default Reviews;