import React from 'react';
import PropTypes from 'prop-types';

class ImgHold extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,  
    link: PropTypes.string
  }
  render() {
    const link = this.props.link;
    const image = this.props.image;
    return (
      <a href={link}> 
          <div className='imgHold' style={{backgroundImage:`url("${image}")`}}>
          </div>            
      </a>
    );
  }
}

export default ImgHold;