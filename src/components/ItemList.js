import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData, deleteItem } from "../actions/items";
import PropTypes from "prop-types";




class ItemList extends Component {
componentDidMount() {
  this.props.fetchData("https://api.songkick.com/api/3.0/metro_areas/12283/calendar.json?apikey=rdVTbRJce6Sz8yUJ");
}

  render() {
    console.log(this.props.items);
    
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    if (!this.props.items.length) {
        return <p>No items to display</p>;
    }
    
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={item.id}>
          {item.displayName}
          <br></br>
            <a href={item.performance[0].artist.uri}>Go to site</a>
          <button onClick={() => this.props.removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  }
}

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};


const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        removeItem: (index) => dispatch(deleteItem(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
