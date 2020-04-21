import React from 'react';
import PropTypes from 'prop-types';
import Meta from './Meta';
import Content from './Content';
import Fd from './Fd';
import ImgHold from './ImgHold';

class Box extends React.Component {
    static propTypes = {
      article: PropTypes.object.isRequired,
      type: PropTypes.string.isRequired
    }
    render() {
        const article = this.props.article;
        const type = this.props.type;
        return (
        <div className={type}>
        <ImgHold link={article.link} image={article.image}/>
        <a href={article.link}>         
        <div className='words'>
            <Content title={article.title} description={article.description}/>
            <Meta date={article.postedDate} minutes={article.minutesToRead} author={article.author} />
        </div>
        </a>
        <Fd />
        </div>
      );
    }
  }



export default Box;

