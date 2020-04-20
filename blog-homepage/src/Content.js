import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,  
        description: PropTypes.string
    }
    render() {
      const title = this.props.title;
      const description = this.props.description;
      return (
        <div className='contentDetails'>
            <h3>{title}</h3>
            <p className='desc'>{description}</p>
        </div>
      );
    }
  }


export default Content;