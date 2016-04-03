import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Time from 'react-time';
import {selectRow} from '../actions/index';
 class Row extends Component {

constructor(props){
  super(props);
  this.props = props;
  this.displayRow = this.displayRow.bind(this);
}

displayRow(result){
  this.props.selectRow(result);
}


render(){

  var tags = this.props.result.tags.map(function(tag) {
      return ( < span key = {
          tag
        } > {
          tag
        } < /span>);
      });

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
    <td>{this.props.result.tags}</td>
    <td> < Time value = {this.props.result.entranceExamDate}   format = "YYYY/MM/DD" / ></td>
    <td>{this.props.result.requiredCertificates}</td>
    <td>{this.props.result.questionPaperLanguage}</td>
   < td > {
            tags
          } < /td> < td onClick = {
            () => this.editEntry(result._id)
          } > < i className = "fa fa-pencil" > < /i> </td >

          <td onClick = { () => this.displayRow(this.props.result)}><i className = "fa fa-pencil"></i></td>
          < /tr>



);
}

}

function mapStateToProps(){
  return {};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectRow}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Row);
