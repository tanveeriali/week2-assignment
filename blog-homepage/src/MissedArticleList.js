import React from 'react';
import missedArticles from './missed-articles.json';
import Meta from './Meta';
import Fd from './Fd';
import ImgHold from './ImgHold';
import Content from './Content';

class MissedArticleList extends React.Component{
    render() {
       return (
            <div id='missedArticles'>
            <h2>In case you missed it</h2>
            {missedArticles.map((article,i) => 
                <div className='missedArticle' key={i}>
                    <ImgHold link={article.link} image={article.image}/>
                    <a href={article.link}> 
                    <div className='words'>
                        <Content title={article.title} description={article.description}/>
                        <Meta date={article.postedDate} minutes={article.minutesToRead} author={article.author} />
                    </div>
                    </a>
                    <Fd/>
                </div>
            )}
           </div>
        )
    }
}

export default MissedArticleList;