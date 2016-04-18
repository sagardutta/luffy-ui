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
import Row from './row-1';
import AdmissionModal from './admission_modal';
import ReactTable,{Table, Tr, Td} from 'reactable';



class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.editEntry = this.editEntry.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.displayRow = this.displayRow.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.convertRowsForTable = this.convertRowsForTable.bind(this);
    this.convertRowsForTable = this.convertRowsForTable.bind(this);
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

    return ( < Modal isOpen = {
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
      < Row key={result._id} result = {result} />
    );
  }


  convertRowsForTable(docs){

    const rowsForTable = docs.map((doc) => {
          console.log(doc.notificationName);
          let  {notificationName:notificationName, qualification:qualification, tags:tags} = doc;
          return {notificationName:notificationName, qualification:qualification, tags:tags};
    })
    return rowsForTable;
  }


  render() {

    if (this.props.searchResults.docs === undefined || this.props.searchResults.docs.length == 0) {
      return ( < div > No Search results to display < /div>);
      }
      else {



        return (


          <div>


          <Table className="table table-striped">

          {this.convertRowsForTable(this.props.searchResults.docs).map((row) => {
            return(
              <Tr>
                <Td column = "notificationName">{row.notificationName}</Td>
                <Td column = "qualification" >{row.qualification}</Td>
                <Td column = "tags" >{row.tags}</Td>
              </Tr>
            )
          })}


          </Table>

          < AdmissionModal / >


          < /div>

      )
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
