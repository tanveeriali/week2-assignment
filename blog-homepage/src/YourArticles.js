import React from 'react';
import yourArticles from './your-articles.json';
import Meta from './Meta';
import Fd from './Fd';
import ImgHold from './ImgHold';
import Content from './Content';
import PropTypes from 'prop-types';

class YourArticles extends React.Component{
    static propTypes = {
        yourArticles: PropTypes.object.isRequired,  
    }
    render() {
       return (
            <div id='yourArticles'>
            <h2>For you</h2>
            {yourArticles.map((article,i) =>  
                <div className='yourArticle' key={i}>
                    <ImgHold link={article.link} image={article.image}/>
                    <a href={article.link}>         
                    <div className='words'>
                        <Content title={article.title} description={article.description}/>
                        <Meta date={article.postedDate} minutes={article.minutesToRead} author={article.author} />
                    </div>
                    </a>
                    <Fd />
                </div>
            )}
           </div>
        )
    }
}

export default YourArticles;