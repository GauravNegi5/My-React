import './Search.css'
// import '../Recommended/Recommended.css'
// import thumbnail1 from '../../assets/thumbnail1.png'
import { useEffect, useState } from 'react';
import { API_KEY } from '../../data';
import { Link , useParams} from 'react-router-dom';
// import { value_converter } from '../../data';
// import { useParams } from 'react-router-dom';



const Search = () => {
  console.log("✅ Search component mounted! 🚀");

  const { query } = useParams();
  console.log("Component Rendered!");
  console.log("Component Rendered with query:", query);


  
  const [results, setResults] = useState([]); // API results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      console.warn("Query is empty, skipping fetch...");
      return;
    }

    setLoading(true);
    setError(null);

    const fetchResults = async () => {
      console.log(`Fetching results for: ${query}`);

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&regionCode=IN&key=${API_KEY}`
        );
        const data = await response.json();

        console.log("Full API Response:", data);

        if (!data.items || data.items.length === 0) {
          console.warn("No results found");
          setResults([]);
          return;
        }

        setResults(data.items);
        console.log("Updated Results:", data.items);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch results");
      } finally {
        setLoading(false);
      }
    };

    // Delay API call to prevent excessive requests (debounce)
    const timer = setTimeout(fetchResults, 500);

    return () => clearTimeout(timer); // Cleanup function to cancel previous request
  }, [query ]);  
  
  
  
  
  return (
    
   <div className="recommended">
         {results.map((item,index)=>{
        return(
          <Link to={`/video/${item.snippet.channelId}/${item.id.videoId}`} className="side-video-list" key={index}>
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <div className="vid-info">
          <h4>{item.snippet.title}</h4>
          <p>{item.snippet.channelTitle}</p>
          {/* <p>{value_converter(item.statistics.viewCount)} Views</p> */}
        </div>
      </Link>
        )
      })}
      </div>
   
  )
}

export default Search;
