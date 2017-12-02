import React, { Component } from 'react';

class LyricsList extends Component {

  onLike(lyricId) {
    console.log(lyricId);
  }

  renderLyrics() {
    return this.props.lyrics.map(({id, content}) => {
      return <li key={id} className="collection-item">
        <span className="animated__item">{content}</span>
        <i className="material-icons right fade" onClick={() => this.onLike(id)}>thumb_up</i>
      </li>;
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default LyricsList;