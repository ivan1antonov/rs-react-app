import React from 'react';
import loader from '../assets/loader.gif';

export default class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        <img className="loader_img" src={loader} alt="loading..." />
      </div>
    );
  }
}
