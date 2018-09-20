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
                <div className="form-group-filter-box">
                    <b>Filter:</b>
                    <div>
                        <div className="brand-filter-div">
                            <em className="sub-headline-filter">Brands:</em>
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
                                <input type="checkbox" className="sortAndFilter" value="?Brand=Reebok" />
                                <p className="sort-filter-text">Reebok</p>
                            </div>
                            <div className="checkbox-div">
                                <input type="checkbox" className="sortAndFilter" value="?Brand=Adidas" />
                                <p className="sort-filter-text">Adidas</p>
                            </div>
                        </div>
                        <div className="category-filter-div">
                            <div className="skater-filter-div">
                                <em className="sub-headline-filter">Gear:</em>
                                <div>
                                    <div className="checkbox-div">
                                        <input type="checkbox" className="sortAndFilter" value="?Category=Stick" />
                                        <p className="sort-filter-text">Sticks</p>
                                    </div>
                                    <div className="checkbox-div">
                                        <input type="checkbox" className="sortAndFilter" value="?Category=Elbowpads" />
                                        <p className="sort-filter-text">Elbow pads</p>
                                    </div>
                                    <div className="checkbox-div">
                                        <input type="checkbox" className="sortAndFilter" value="?Category=Gloves" />
                                        <p className="sort-filter-text">Gloves</p>
                                    </div>
                                    <div className="checkbox-div">
                                        <input type="checkbox" className="sortAndFilter" value="?Category=Helmet" />
                                        <p className="sort-filter-text">Helmets</p>
                                    </div>
                                    <div className="checkbox-div">
                                        <input type="checkbox" className="sortAndFilter" value="?Category=Mouthguard" />
                                        <p className="sort-filter-text">Mouthguards</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="checkbox-div">
                                        <input type="checkbox" className="sortAndFilter" value="?Category=Pants" />
                                        <p className="sort-filter-text">Pants</p>
                                    </div>
                                    <div className="checkbox-div">
                                        <input type="checkbox" className="sortAndFilter" value="?Category=Shinpads" />
                                        <p className="sort-filter-text">Shin pads</p>
                                    </div>

                                    <div className="checkbox-div">
                                        <input type="checkbox" className="sortAndFilter" value="?Category=Shoulderpads" />
                                        <p className="sort-filter-text">Shoudler pads</p>
                                    </div>
                                    <div className="checkbox-div">
                                        <input type="checkbox" className="sortAndFilter" value="?Category=Skate" />
                                        <p className="sort-filter-text">Skates</p>
                                    </div>
                                </div>
                            </div>
                            <div className="textile-filter-div">
                                <em className="sub-headline-filter">Textile:</em>
                                <div className="checkbox-div">
                                    <input type="checkbox" className="sortAndFilter" value="?Category=Jersey" />
                                    <p className="sort-filter-text">Jerseys</p>
                                </div>
                                <div className="checkbox-div">
                                    <input type="checkbox" className="sortAndFilter" value="?Category=Shorts" />
                                    <p className="sort-filter-text">Shorts</p>
                                </div>
                                <div className="checkbox-div">
                                    <input type="checkbox" className="sortAndFilter" value="?Category=Socks" />
                                    <p className="sort-filter-text">Socks</p>
                                </div>
                            </div>
                            <div className="misc-filter-div">
                                <em className="sub-headline-filter">Stock:</em>
                                <div className="checkbox-div">
                                    <input type="checkbox" className="sortAndFilter" value="?Availability_gt=0" />
                                    <p className="sort-filter-text">In stock</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group-box">
                <b>Sort by:</b>
                <div className="checkbox-div">
                    <input type="radio" className="sortAndFilter" name="sort" value="?_sort=Price:asc" />
                    <p className="sort-filter-text">Price <span>&uarr;</span></p>
                </div>
                <div className="checkbox-div">
                    <input type="radio" className="sortAndFilter" name="sort" value="?_sort=Price:desc" />
                    <p className="sort-filter-text">Price <span>&darr;</span></p>
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
                    <button className="form-button" onClick={this.sendActiveFilters.bind(this)}>Set filter</button>
                    <button className="form-button" id="clear" onClick={this.clearFilters.bind(this)}>Clear filter</button>
                </div>
            </form>
        </div>
    );
  }
}

export default Filter;