import React, { Component } from "react";

class Filter extends Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div  className="filter">
          <div className="filter-result">{this.props.count}Products</div>
            <div className="filter-sort"> 
            Order
            <select>
                <option>Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
                </select></div>
            <div className="filter-size">Filter<select>
                <option value="">ALL</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                </select></div>
        </div>;
    }
}

//Filter.propTypes = propTypes;
//Filter.defaultProps = defaultProps;
// #endregion

export default Filter;