import "./Feed.css"
import { Link } from "react-router-dom"
import { API_KEY, value_converter } from "../../data"
import { useEffect, useState } from "react"
import moment from "moment"

const Feed = (category) => {
  

    const[data, setData]= useState([]);

    const fetchData = async () => {
      const videoList_Url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}&videoCategoryId=${category.category}`;
            try {
        const response = await fetch(videoList_Url);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        setData(data.items || []); // Ensure data is always an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
  useEffect(()=>{
      fetchData();
  },[category])

  return(
    <div className="feed">
      {data.map((item,index)=>{
        return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={index}>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow}</p>
          </Link>
        )
      }
          )
      }
    
        </div>
  )
}

export default Feed
