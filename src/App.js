import logo from './logo.svg';
import './App.css';
import NavInshorts from './Components/Navbar/NavInshorts';
import { useEffect, useState } from 'react';
import category from './Components/Category';
import NewsContent from './Components/NewsComponent/NewsContent';
import axios from "axios";

function App() {
  const [Catrogry,setCateogry]=useState("");
  const[newsArray,setNewsArray]=useState([])
  const [newsData, setNewsData] = useState();
  const[loadmore,setloadmore]=useState(20);
const newsApi=async()=>{
  try {
    const axiosConfig = {
      headers: {
        'Upgrade': 'websocket',
        'Connection': 'Upgrade',
      },
    };
   
    const news = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=c529e234979d47948630ba767607e387&category=${Catrogry}&pageSize=${loadmore}`,
      axiosConfig
    );
   
    setNewsArray(news.data.articles);
    setNewsData(news.data.totalResults)   
    
  } catch (error) {
    console.log(error);
  }
}
console.log(newsArray);
console.log(newsData);



useEffect(() => {
  newsApi(); // Fetch news when category changes
}, [Catrogry,loadmore]);
 
  return (
    
    <div className="">
      <NavInshorts setCateogry={setCateogry}/>
      <NewsContent newsArray={newsArray} newsData={newsData} loadmore={loadmore}setloadmore={setloadmore}/>
    </div>
  );
}

export default App;
