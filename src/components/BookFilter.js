import React, { Component } from 'react'
import {connect} from 'react-redux'
import {filterText, startYear, endYear, sortBy} from '../actions/filters'

export class BookFilters extends Component {
  filterYear = () => {
    let start = (+this.startYear.value) !== 0 ? (+this.startYear.value) : null;
    let end = (+this.endYear.value) !== 0 ? (+this.endYear.value) : null;
    this.props.dispatch(startYear(start));
    this.props.dispatch(endYear(end));
  }

  render() {
    return (
      <div style={{marginBottom: '15px'}}>
        <input type="text" placeholder='search' value={this.props.filters.text} onChange={e => this.props.dispatch(filterText(e.target.value))}/>
        sorted By:
        <select value={this.props.filters.sortBy} onChange={e => this.props.dispatch(sortBy(e.target.value))}>
          <option value="none">---</option>
          <option value="title">Title</option>
          <option value="published">Published</option>
        </select>
        <br/><br/>
        <input type="number" placeholder='startYear' value={this.props.startYear} style={{width:'80px'}} ref={el => this.startYear = el}/>
        <input type="number" placeholder='endYear' value={this.props.endYear} style={{width:'80px'}} ref={el => this.endYear = el}/>        
        <button onClick={this.filterYear}>>-></button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(BookFilters)
