import React, { Component } from 'react';
import axios from 'axios';
import Preload from '../Assert/pre-load';
import { connect } from 'react-redux';
import * as actionType from '../reducer/const';
import ListItem from './ListItems';

const buttons = [
  {page: '1',value: 0},
  {page: '2',value: 5},
  {page: '3',value: 10},
  {page: '4',value: 15}
]

class App extends Component {
  state = {
    template: [],
    position: localStorage.getItem('page') ? localStorage.getItem('page') : localStorage['page'] = 0 
  }
  componentDidMount() {
    axios.get('json/users.json', {mode:'no-cors'})
      .then((response) => {
        console.log(response);
        this.setState({template: response.data.users})
      })
    axios.get('json/images/u_1.png', {mode: 'no-cors'})
      .then(response => {
        console.log(response);
        this.setState({img: response.config.url})
      })
  }
  prevPage = () => {
    this.setState({position: this.state.position - 5});
    this.props.activeLoading();
    this.props.disactiveLoading();
  }
  nextPage = () => {
    this.setState({position: this.state.position + 5});
    this.props.activeLoading();
    this.props.disactiveLoading();
  }
  pageHandler = (value) => {
    this.setState({ position: value });
    this.props.activeLoading();
    this.props.disactiveLoading();
  }
  render() {
    return (
      <div className="App">
        {this.props.load 
          ? <Preload />
          : <ListItem
              template={this.state.template}
              position={this.state.position}
              img={this.state.img}  />}
        <div className='button-container'>
          <button onClick={this.state.position === 0 ? null : this.prevPage}>PrevPage</button>
          {buttons.map(item => (
              <button key={item.value} onClick={() => this.pageHandler(item.value)}>{item.page}</button>
          ))}
          <button onClick={this.state.position === 15 ? null : this.nextPage}>NextPage</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    load: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activeLoading: () => dispatch({type: actionType.PRE_LOAD_ACTIVE}),
    disactiveLoading: () =>
      setTimeout(() => 
        dispatch({type: actionType.PRE_LOAD_DISACTIVE}), 1000)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
