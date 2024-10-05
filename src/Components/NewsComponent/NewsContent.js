import { Container } from '@mui/material';
import React from 'react'
import "./NewsContent.css"
import NewsCard from '../NewsCard/NewsCard';
const NewsContent = ({newsArray,newsData,loadmore,setloadmore}) => {
    console.log("NEWSArray",newsArray);
    
  return (
    <div>
        <Container maxWidth="md">
            <div className='content'>
                    <div className='downloadmessage'>
<span className='downloadText'>For the best experience use inshorts app on your smartphone</span>
<img src='https://assets.inshorts.com/website_assets/images/appstore.png' alt='download image' height="80%"/>
<img src='https://assets.inshorts.com/website_assets/images/playstore.png' alt='playstore image' height="80%"/>
                    </div>

                    {newsArray.map((newsItem, index) => (
    <NewsCard key={index} news={newsItem} />
))}

{loadmore<=newsData &&
<>
    <button className='loadmore' onClick={()=>setloadmore(loadmore+5)}>Load More</button></>}
            </div>

        </Container>
    
    </div>
  
  )
}

export default NewsContent;
