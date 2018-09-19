import React, { Component } from 'react';


class FormReviews extends Component {
    constructor() {
        super();
        this.state = {
            reviewObject: {
                ProductID: null,
                Author: '',
                Review: '',
                Rating: null
            },
        }
    }

    getInputValue(e) {
            e.preventDefault();
            this.setState({
                reviewObject: {
                    ProductID: this.props.id,
                    Author: this.refs.author.value,
                    Review: this.refs.review.value,
                    Rating: Number(this.refs.rating.value)
                }
            })
    }
    postReview(e) {
        e.preventDefault();
        fetch(`http://localhost:1337/review`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.reviewObject)
        }).then(() => this.props.updateReview());


                this.setState({
                    reviewObject: {
                        ProductID: null,
                        Author: '',
                        Review: '',
                        Rating: null
                    }
                    }
                );
                this.refs.clearForm.reset();
            };


    /*reviewID: review._id,
    id: review.ProductID,
    review: review.Review,
    created: review.createdAt,
    author: review.Author*/
    render() {
        return (
        <div>
            <form onSubmit={this.postReview.bind(this)} ref="clearForm">
                <header>
                    <h5>Review it!</h5>
                </header>
                <textarea type="text" ref="review" required minlength="8" maxlength="500" placeholder="Review" rows="7" cols="50" onChange={this.getInputValue.bind(this)}/>
                <div>
                <input type="text" ref="author" placeholder="Name" required onChange={this.getInputValue.bind(this)}/>
                <input type="number" ref="rating" required placeholder="Rating (1-5)" min="1" max="5" onChange={this.getInputValue.bind(this)}/>
                </div>
                <button type="submit">Send review</button>
            </form>
        </div>
        )
    }
}
export default FormReviews;