import React from 'react';
import yourArticles from './your-articles.json';
import Box from './Box';
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
                <Box article={article} key={i} type='yourArticle'/>
            )}
           </div>
        )
    }
}

export default YourArticles;