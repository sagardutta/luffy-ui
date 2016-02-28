import React, {Component} from 'react';
import {connect} from 'react-redux';


class SearchResults extends Component{


  renderResult(result){
    var tags = result.tags.map(function(tag){
      return(<span key={tag}>{tag} </span>);
    });
    return (
        <div  className="col-md-4" key={result.id}>
        <div>
        <image src={result.source} width="304" height="236" />
        </div>
        <div>Title:: {result.name}</div>
        <div>tags:: {tags}</div>
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
