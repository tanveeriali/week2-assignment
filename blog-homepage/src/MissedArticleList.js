import React from 'react';
import missedArticles from './missed-articles.json';
import Box from './Box';
import PropTypes from 'prop-types';

class MissedArticleList extends React.Component{
    static propTypes = {
        missedArticles: PropTypes.object.isRequired,  
    }
    render() {
       return (
            <div id='missedArticles'>
            <h2>In case you missed it</h2>
            {missedArticles.map((article,i) => 
                <Box article={article} key={i} type='missedArticle'/>
            )}
           </div>
        )
    }
}

export default MissedArticleList;