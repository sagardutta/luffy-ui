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
    var tags = result.tags.map(function(tag) {
        return ( < span key = {
            tag
          } > {
            tag
          } < /span>);
        });
      return (



        // <div  className="col-md-4" key={result._id}>
        < tr key = {
          result._id
        }
        onClick = {
          () => this.displayRow(result)
        } >

        < td > {
          result.minAge
        } < /td> < td > {
          result.maxAge
        } < /td> < td > {
          result.applicationProcess
        } < /td> < td > {
          result.selectionProcess
        } < /td> < td > {
          result.source
        } < /td> < td > < Time value = {
          result.lastDate
        }
        format = "YYYY/MM/DD" / > < /td> < td > < Time value = {
          result.notificationDate
        }
        format = "YYYY/MM/DD" / > < /td> < td > < a href = {
          result.linkToSource
        } > {
          result.linkToSource
        } < /a></td >
        < td > {
          result.contactDetails
        } < /td> < td > {
          tags
        } < /td> < td onClick = {
          () => this.editEntry(result._id)
        } > < i className = "fa fa-pencil" > < /i> </td >



        < /tr>


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
          < th > Min Age < /th> < th > Max Age < /th> < th > Application Process < /th> < th > Selection Process < /th> < th > Source < /th> < th > Last Date < /th> < th > Notification Date < /th> < th > Link To Source < /th> < th > Contact Details < /th> < th > Tags < /th> < th > edit < /th> < /tr> < /thead> < tbody > {
            this.props.searchResults.docs.map(this.renderResult)
          } < /tbody> < /table>



          < Modal isOpen = {
            this.state.modalIsOpen
          }
          onRequestClose = {
            this.closeModal
          } >



          < h1 > Admission Details < /h1>

          < table className = "table table-bordered small" >
          < tbody >
          < tr >
          < td > Min Age < /td> < td > {
            this.state.result.minAge
          } < /td> < /tr>

          < tr >
          < td > Max Age < /td> < td > {
            this.state.result.maxAge
          } < /td> < /tr>

          < tr >
          < td > Application Process < /td> < td > {
            this.state.result.applicationProcess
          } < /td> < /tr>

          < tr >
          < td > Selection Process < /td> < td > {
            this.state.result.selectionProcess
          } < /td> < /tr>

          < tr >
          < td > Source < /td> < td > {
            this.state.result.source
          } < /td> < /tr>

          < tr >
          < td > Last Date < /td> < td > < Time value = {
            this.state.result.lastDate
          }
          format = "YYYY/MM/DD" / > < /td> < /tr>

          < tr >
          < td > link to source < /td> < td > {
            this.state.result.linkToSource
          } < /td> < /tr>

          < /tbody> < /table>


          < button onClick = {
            this.closeModal
          } > close < /button>

          < /Modal>

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
