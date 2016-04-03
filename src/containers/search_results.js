import React, {
  Component,
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import {
  editEntry
} from '../actions/index';
import Time from 'react-time';
import Modal from 'react-modal';
import Row from './row';
import AdmissionModal from './admission_modal';


class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.editEntry = this.editEntry.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.displayRow = this.displayRow.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      modalIsOpen: false,
      result: {}
    }

  }

  static contextTypes = {
    router: PropTypes.object
  };

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  editEntry(id) {
    this.props.editEntry(id).then(() => {
      this.context.router.push('posts/update');
    });
  }

  displayRow(result) {
    console.log(result._id);
    this.setState({
      modalIsOpen: true,
      result: result
    });

  }

  renderModal() {

    return (
      < Modal isOpen = {
        this.state.modalIsOpen
      }
      onRequestClose = {
        this.closeModal
      } >



      < h1 > {
        this.state.result._id
      } < /h1>


      < button onClick = {
        this.closeModal
      } > close < /button>

      < /Modal>
    );

  }


  renderResult(result) {



      return (

        <Row result={result}/>

      );
    }
    render() {

      if (this.props.searchResults.docs === undefined || this.props.searchResults.docs.length == 0) {
        return ( < div > No Search results to display < /div>);
      } else {

        return (


          < div >

          < table className = "table table-striped small" >
          < thead >
          < tr >
          <th>Notification Name</th>
<th>Qualification</th>
<th>Age</th>
<th>Application Procedure</th>
<th>Selection Process</th>
<th>Source</th>
<th>Last Date</th>
<th>Notification Date</th>
<th>Link ToSource</th>
<th>Duration</th>
<th>Contact Details</th>
<th>Tags</th>
<th>Entrance ExamDate</th>
<th>Required Certificates</th>
<th>Question Paper Language</th> < /tr> < /thead> < tbody > {
            this.props.searchResults.docs.map(this.renderResult)
          } < /tbody> < /table>


          <AdmissionModal />


          < /div>

        );
      }
    }
  }

  function mapStateToProps({
    searchResults
  }) {
    return {
      searchResults,
      editEntry
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      editEntry
    }, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
