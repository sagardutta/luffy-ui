import React,{Component} from 'react';
import {connect} from 'react-redux';
import {searchTag, nextPageOfResults} from '../actions/index';
import {bindActionCreators} from 'redux';
import SearchResults from './search_results';

class SearchPage extends Component{

  constructor(props){
    super(props);
    this.state = {term:'test'};
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.nextPageOfResults = this.nextPageOfResults.bind(this);
  }

  onInputChange(value){
    this.setState({term:value});
  }

  onButtonClick(){
    this.props.searchTag(this.state.term);
  }

  nextPageOfResults(offset){

    return () => {
      let term = this.state.term;
      let page = this.props.searchResults.page + offset;
      this.props.nextPageOfResults(term, page)
    }

    }

  render(){
    return(
      <div>
      <div className="row">
        <div>
        <input className="col-md-4 m-a-2" type="text" value={this.state.term} onChange= {event => this.onInputChange(event.target.value)} />

        <input type="button" className="col-md-1 btn btn-primary m-a-2" value="Search" onClick={this.onButtonClick} />
        </div>
        </div>
        <div className="row">
        <SearchResults />
       </div>




      <div className="row">
      <input  type="button" className="btn btn-primary col-md-2" value="Prev Page"  disabled={ !(this.props.searchResults.pages > 1 && this.props.searchResults.page > 1)} onClick={this.nextPageOfResults(-1)}/>
      <div className="col-md-8">
      <label className="text-center">Page {this.props.searchResults.page}</label>
      </div>
      <input  type="button" className="btn btn-primary col-md-2" value="Next Page" disabled={ this.props.searchResults.page == this.props.searchResults.pages}  onClick={this.nextPageOfResults(1)}/>

      </div>
       </div>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({searchTag, nextPageOfResults}, dispatch);
}

function mapStateToProps({searchResults}){
  return {searchResults};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
