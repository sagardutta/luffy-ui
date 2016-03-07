import React, {Component} from 'react';
import {connect} from 'react-redux';


class SearchResults extends Component{


  renderResult(result){
    var tags = result.tags.map(function(tag){
      return(<span key={tag}>{tag}, </span>);
    });
    return (
        <div  className="col-md-4" key={result._id}>
        <div>
          <image src={result.image} width="320" height="320" />
        </div>

        <div> <b>minAge</b> :: {result.minAge}</div>
        <div> <b>maxAge </b> :: {result.maxAge}</div>
        <div> <b> applicationProcess </b>:: {result.applicationProcess}</div>
        <div> <b>selectionProcess </b>:: {result.selectionProcess}</div>
        <div> <b>source </b> :: {result.source}</div>
        <div> <b>lastDate</b>:: {result.lastDate} </div>
        <div> <b>notificationDate</b>:: {result.notificationDate} </div>
        <div> <b>linkToSource</b>:: {result.linkToSource} </div>
        <div> <b>contactDetails</b>:: {result.contactDetails} </div>
        <div><b>tags</b>:: {tags}</div>
        </div>
    );
  }
  render(){



    return(
        <div>
          {this.props.searchResults.map(this.renderResult)}
        </div>
    );
  }
}

function mapStateToProps({searchResults}){
  return {searchResults};
}

export default connect (mapStateToProps)(SearchResults);
