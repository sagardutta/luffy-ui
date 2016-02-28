import React,{Component} from 'react';
import {connect} from 'react-redux';
import {searchTag} from '../actions/index';
import {bindActionCreators} from 'redux';
import SearchResults from './search_results';

class SearchPage extends Component{

  constructor(props){
    super(props);
    this.state = {term:'test'};
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(value){
    this.setState({term:value});
  }

  onButtonClick(){
    this.props.searchTag(this.state.term);
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
      </div>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({searchTag}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchPage);
