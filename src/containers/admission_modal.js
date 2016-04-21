import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import Modal from 'react-modal';
import {bindActionCreators} from 'redux';
import {closeModal} from '../actions/index';
import Time from 'react-time';
class AdmissionModal extends Component {

constructor(props){
  super(props);
  this.renderList = this.renderList.bind(this);
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

  renderValue(value){
    return value ? value :'';
  }


  render() {

      if (this.props.selectedRow === undefined) {

        console.log("row not selected");
        return (<div>{this.props.isModalOpen}</div>);


      } else {

        console.log("row selected");

        return ( < Modal isOpen = {
              this.props.isModalOpen
            }
            onRequestClose = {
              this.closeModal
            } >



            < h1 > Admission Details < /h1>

            < table className = "table table-bordered small" >
            < tbody >


            < tr >
            < td > Notification Name < /td> < td > {
          this.props.selectedRow.notificationName
        } < /td> < /tr >


        < tr >
        < td > Qualification  < /td> < td > {
      this.props.selectedRow.qualification
    } < /td> < /tr >


            < tr >
            < td >  Age < /td> < td > {
            this.props.selectedRow.age
          } < /td> < /tr >



      < tr >
        < td > Application Procedure < /td> < td > {
      this.props.selectedRow.applicationProcedure
    } < /td> < /tr >

    < tr >
    < td > Selection Process < /td> < td > {
  this.props.selectedRow.selectionProcess
} < /td> < /tr >

< tr >
  < td > Source < /td> < td > {
this.props.selectedRow.source
} < /td> < /tr >

< tr >
  < td > Duration < /td> < td > {
this.props.selectedRow.duration
} < /td> < /tr >

< tr >
  < td > Last Date < /td> < td > < Time value = {
this.props.selectedRow.lastDate
}
format = "YYYY/MM/DD" / > < /td> < /tr >

< tr >
  < td > Notification Date < /td> < td > < Time value = {
this.props.selectedRow.notificationDate
}
format = "YYYY/MM/DD" / > < /td> < /tr >


< tr >
  < td > Entrance Exam Date < /td> < td > < Time value = {
this.props.selectedRow.entranceExamDate
}
format = "YYYY/MM/DD" / > < /td> < /tr >




< tr >
< td > Tags < /td> < td > {
 this.renderList(this.props.selectedRow.tags)
} < /td> < /tr >


< tr >
< td > Required Certificates < /td> < td > {
this.renderList(this.props.selectedRow.requiredCertificates)
} < /td> < /tr >


< tr >
< td > Question Paper Languages < /td> < td > {
this.renderList(this.props.selectedRow.questionPaperLanguages)
} < /td> < /tr >


< /tbody> < /table >


< button onClick = {
this.props.closeModal
} > close < /button>

< /Modal>
);



}
}

}

function mapStateToProps({
  selectedRow,
  isModalOpen
}) {
  return {
    selectedRow,
    isModalOpen
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({closeModal}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdmissionModal);
