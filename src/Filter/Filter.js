import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    sendActiveFilters(e) {
        e.preventDefault();

        let filter = [];
        let checks = document.getElementsByClassName('sortAndFilter');

        for ( let i = 0; i < checks.length; i++) {
            if(checks[i].checked) {
                filter.push(checks[i].value);
            }
        }
        console.log("filters", filter);
        this.props.checkboxes(filter);
    }
    clearFilters(e) {
        e.preventDefault();

        let checks = document.getElementsByClassName('sortAndFilter');

        for ( let i = 0; i < checks.length; i++) {
            checks[i].checked = false;
        }
        this.props.checkboxes([]);
    }
        render() {
    return (
        <div id="filter-div">
            <form id="sort-and-filter-form">
                <div className="form-group-box">
                <em>Sort by:</em>
                <div className="checkbox-div">
                    <input type="radio" className="sortAndFilter" name="sort" value="?_sort=Price:asc" />
                    <span className="sort-filter-text">Price, ascending</span>
                </div>
                <div className="checkbox-div">
                    <input type="radio" className="sortAndFilter" name="sort" value="?_sort=Price:desc" />
                    <p className="sort-filter-text">Price, descending</p>
                </div>
                    <div className="checkbox-div">
                        <input type="radio" className="sortAndFilter" name="sort" value="?_sort=Brand" />
                        <p className="sort-filter-text">Brand</p>
                    </div>
                    <div className="checkbox-div">
                        <input type="radio" className="sortAndFilter" name="sort" value="?_sort=Category" />
                        <p className="sort-filter-text">Category</p>
                    </div>
                </div>
                <div className="form-group-box">
                <em>Filter:</em>
                <div className="checkbox-div">
                    <input type="checkbox" className="sortAndFilter" value="?Brand=Bauer" />
                    <p className="sort-filter-text">Bauer</p>
                </div>
                <div className="checkbox-div">
                    <input type="checkbox" className="sortAndFilter" name="test" value="?Brand=CCM" />
                    <p className="sort-filter-text">CCM</p>
                </div>
                    <div className="checkbox-div">
                        <input type="checkbox" className="sortAndFilter" value="?Brand=Warrior" />
                        <p className="sort-filter-text">Warrior</p>
                    </div>
                    <div className="checkbox-div">
                        <input type="checkbox" className="sortAndFilter" value="?Category=Stick" />
                        <p className="sort-filter-text">Sticks</p>
                    </div>
                    <div className="checkbox-div">
                        <input type="checkbox" className="sortAndFilter" value="?Category=Skate" />
                        <p className="sort-filter-text">Skates</p>
                    </div>
                <div className="checkbox-div">
                    <input type="checkbox" className="sortAndFilter" value="?Availability_gt=0" />
                    <p className="sort-filter-text">In stock</p>
                </div>
                </div>
                <div className="form-group-box">
                    <button className="form-button" onClick={this.sendActiveFilters.bind(this)}>Set filter</button>
                    <button className="form-button" id="clear" onClick={this.clearFilters.bind(this)}>Clear filter</button>
                </div>
            </form>
        </div>
    );
  }
}

export default Filter;