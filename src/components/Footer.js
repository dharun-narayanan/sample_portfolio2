import React, { Component } from "react";
import Coffee from './Coffee'

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function(network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul><Coffee></Coffee></ul>
            <ul className="social-links">{networks}</ul>
            
            <ul className="copyright">
              <li>&copy;2021 All rights reserved</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
