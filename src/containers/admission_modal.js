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
            < td > Min Age < /td> < td > {
            this.props.selectedRow.age
          } < /td> < /tr >

          < tr >
          < td > Max Age < /td> < td > {
        this.props.selectedRow.maxAge
      } < /td> < /tr >

      < tr >
        < td > Application Process < /td> < td > {
      this.props.selectedRow.applicationProcess
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
  < td > Last Date < /td> < td > < Time value = {
this.props.selectedRow.lastDate
}
format = "YYYY/MM/DD" / > < /td> < /tr >

  < tr >
  < td > link to source < /td> < td > {
this.props.selectedRow.linkToSource
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
