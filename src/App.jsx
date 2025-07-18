import {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
import Search from './Components/Search/Search.jsx';
import Shorts from './pages/Shorts/Shorts.jsx'


function App() {
  const [sidebar, setSidebar]= useState(true);
  const [query, setQuery] = useState("");
  console.log("Query state in App:", query);

  
  return (
    
    <div>
      
      <Navbar query={query} setQuery={setQuery} setSidebar= {setSidebar}  />
      <Routes>
      <Route path='/' element={<Home sidebar={sidebar} />} />;
      <Route  path="/search/:query"  element={<Search results={Video} />} />
      <Route path='/video/:categoryId/:videoId' element={<Video />} />
      <Route path='/Shorts' element={<Shorts />} />
      

      

      </Routes>
    </div>
  )
}

export default App
