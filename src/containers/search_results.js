import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editEntry} from '../actions/index';
import Time from 'react-time';


class SearchResults extends Component{
constructor(props){
  super(props);
  this.editEntry = this.editEntry.bind(this);
  this.renderResult = this.renderResult.bind(this);
}

static contextTypes = {
    router: PropTypes.object
};

editEntry(id){
  this.props.editEntry(id).then(() =>{
      this.context.router.push('posts/update');
  });
}
  renderResult(result){
    var tags = result.tags.map(function(tag){
      return(<span key={tag}>{tag} </span>);
    });
    return (
        // <div  className="col-md-4" key={result._id}>
        <tr key={result._id}>

<td>{result.minAge}</td>
<td>{result.maxAge}</td>
<td>{result.applicationProcess}</td>
<td>{result.selectionProcess}</td>
<td>{result.source}</td>
<td><Time value={result.lastDate} format="YYYY/MM/DD" /></td>
<td><Time value={result.notificationDate} format="YYYY/MM/DD" /></td>
<td><a href={result.linkToSource}>{result.linkToSource}</a></td>
<td>{result.contactDetails}</td>
<td> {tags}</td>
<td onClick={() => this.editEntry(result._id)}> <i className="fa fa-pencil"></i> </td>



      </tr>
        // </div>
    );
  }
  render(){

    if(this.props.searchResults.docs === undefined || this.props.searchResults.docs.length == 0 ){
      return(
        <div> No Search results to display</div>
      );
    }else{

    return(



        <table className="table table-striped small">
<thead>
<tr>
  <th>Min Age</th>
  <th>Max Age</th>
  <th>Application Process</th>
  <th>Selection Process</th>
  <th>Source</th>
  <th>Last Date</th>
  <th>Notification Date</th>
  <th>Link To Source</th>
  <th>Contact Details</th>
  <th>Tags</th>
  <th>edit</th>
  </tr>
</thead>
<tbody >
          {this.props.searchResults.docs.map(this.renderResult)}
          </tbody>
          </table>

    );
  }
}
}

function mapStateToProps({searchResults}){
  return {searchResults,editEntry};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({editEntry}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(SearchResults);
