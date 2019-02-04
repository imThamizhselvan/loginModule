import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions';
import { Table } from './styles';

class DataArea extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { getData } = this.props;
    console.log('1');
    fetch('https://ipapi.co/json/')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const data = myJson;
      getData(data);
    });
  }

  render() {
    return (
      <div>
        {this.props.value &&
          <Table>
            <tbody>
              <tr><td>{this.props.value.org}</td></tr>
              <tr><td>{this.props.value.city}</td></tr>
              <tr><td>{this.props.value.region}</td></tr>
              <tr><td>{this.props.value.country}</td></tr>
              <tr><td>{this.props.value.postal}</td></tr>
            </tbody>
          </Table>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.result
})

function mapDispatchToProps (dispatch) {
  return {
    getData: (data) => dispatch(getData(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataArea);
