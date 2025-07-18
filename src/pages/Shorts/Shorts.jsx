import './Shorts.css'
import {useRef, useEffect} from 'react'


const shortsData = [
  {
    id: 1,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Amazing trick!',
  },
  {
    id: 2,
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    title: 'You won’t believe this!',
  },
   {
    id: 3,
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    title: 'Epic Animation!',
  },
  // Add more video URLs
];

const Shorts = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
            video.muted= false;
          }
           else {
            video.pause();
          }
        });
      },
      { threshold: 0.75 }
    );

    videoRefs.current.forEach(video => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach(video => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="shorts-container">
      {shortsData.map((short, index) => (
        <div key={short.id} className="short-item">
          <video
            ref={el => (videoRefs.current[index] = el)}
            src={short.videoUrl}
            className="short-video"
            controls={false}
            muted
            loop
          />
          <div className="short-overlay">
            <h3>{short.title}</h3>
            <div className="short-buttons">
              <button>❤️</button>
              <button>💬</button>
              <button>🔗</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Shorts;

