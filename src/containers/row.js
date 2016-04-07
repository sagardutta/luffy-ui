import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Time from 'react-time';
import {selectRow, updateRow} from '../actions/index';
 class Row extends Component {

constructor(props){
  super(props);
  this.props = props;
  this.displayRow = this.displayRow.bind(this);
  this.editEntry = this.editEntry.bind(this);
}

static contextTypes = {
    router: PropTypes.object
};

displayRow(result){
  this.props.selectRow(result);
}

editEntry(result){
  this.props.updateRow(result);
  this.context.router.push('posts/update');
}
renderList(list){
  if(list){
    var renderedList = list.map(function(object){
      return ( < div key = {
          object
        } > {
          object
        } < /div>);
    });

    return renderedList;

  }else{
    return '';
  }


}


render(){

  var tags = this.renderList(this.props.result.tags);


  var requiredCertificates = this.renderList(this.props.result.requiredCertificates);
  var questionPaperLanguages = this.renderList(this.props.result.questionPaperLanguages);
return(


          // <div  className="col-md-4" key={this.props.result._id}>
          < tr key = {
            this.props.result._id
          } >

          <td>{this.props.result.notificationName}</td>
    <td>{this.props.result.qualification}</td>
    <td>{this.props.result.age}</td>
    <td>{this.props.result.applicationProcedure}</td>
    <td>{this.props.result.selectionProcess}</td>
    <td>{this.props.result.source}</td>
    <td>< Time value ={this.props.result.lastDate} format = "YYYY/MM/DD" /></td>
    <td>< Time value ={this.props.result.notificationDate} format = "YYYY/MM/DD" /></td>
    <td>{this.props.result.linkToSource}</td>
    <td>{this.props.result.duration}</td>
    <td>{this.props.result.contactDetails}</td>
    < td > {
             tags
           } < /td>
    <td> < Time value = {this.props.result.entranceExamDate}   format = "YYYY/MM/DD" / ></td>
    <td>{requiredCertificates}</td>
    <td>{questionPaperLanguages}</td>
 < td onClick = {
            () => this.editEntry(this.props.result)
          } > < i className = "fa fa-pencil" > < /i> </td >

          <td onClick = { () => this.displayRow(this.props.result)}><i className = "fa fa-eye"></i></td>
          < /tr>



);
}

}

function mapStateToProps(){
  return {};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectRow, updateRow}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Row);
