import React from 'react';
import PropTypes from 'prop-types';
const m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

class Meta extends React.Component {
    static propTypes = {
      author: PropTypes.object.isRequired,  
      date: PropTypes.string.isRequired,
      minutes: PropTypes.number.isRequired,
    }
    render() {
      const date = new Date(this.props.date);
      const minutes = this.props.minutes;
      const author = this.props.author;
      const mIndex = date.getMonth()
      const day = date.getDate()
      const month = m[mIndex]
      return (
        <div className='meta'>
          <div className='authorImg'><img src={author.image} alt={author.name}/></div>
          <div className='metaWords'>
          <div className='authName'>{author.name}</div>
          <div className='info'>{month} {day} - {minutes} min read</div>
          </div>
        </div>
      );
    }
  }



export default Meta;

