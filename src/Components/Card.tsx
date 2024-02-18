// import React, { useEffect, useRef, useState } from "react";
// import { HomePageVideos } from "../Types";
// import { Link } from "react-router-dom";

// function Card({ data }: { data: HomePageVideos }) {
  
//  const[isVideoPlaying, setIsVideoPlaying] = useState(false)

//   return <div className="w-90 h-85 flex gap-3 flex-col"
  
//   >
//     <div className="ralative">
      
//       <Link to={`/watch/${data.videoId}`}  
//       onMouseEnter={()=>setIsVideoPlaying(true)}
//       onMouseLeave={()=>setIsVideoPlaying(true)}
//       >
//       <img src={data.videoThumbnail} className={`block h-full w-99 object-cover  rounded-xl `} alt="thumbnail"/>
//       </Link>
//       <span className="relative text-sm bg-gray-900 px-0.5 mr-auto  py-0.5  rounded" style={{bottom:"1.6rem",left:"19.6rem"}}>
//         {
//         data.videoDuration
//         }
//       </span>
//       <video
//       className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${isVideoPlaying ? "opacity-100":"opacity-0"}`}
      
//       muted
//       playsInline
//       src={data.videoLink}
//       />
//     </div>
//     <div className="flex gap-2">
//       <div className="min-w-fit">
//         <a href="#">
//           <img src={data.channelInfo.image} alt="channel" className="h-9 w-9 rounded-full" />
//         </a>
//       </div>
//       <div>
//         <h3>
//           <a href="#" className="line-clamp-2">
//             {data.videoTitle}
//           </a>
//         </h3>
//         <div className="text-sm text-gray-400">
//           <div>
//             <a href="#" className="hover:text-white">
//               {data.channelInfo.name}
//             </a>
//           </div>
//           <div>
//             <span className="after:content-['•'] after:mx-1">
//               {data.videoViews}
//             </span>
//             <span>{data.videoAge}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// }

// export default Card;



import React, { useRef, useState } from "react";
import { HomePageVideos } from "../Types";
import { Link } from "react-router-dom";

function Card({ data }: { data: HomePageVideos }) {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // const handleMouseEnter = () => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //     setIsVideoPlaying(true);
  //   }
  // };

  // const handleMouseLeave = () => {
  //   if (videoRef.current) {
  //     videoRef.current.pause();
  //     setIsVideoPlaying(false);
  //   }
  // };

  return (
    <div className="md:w-90 md:h-85 md:flex gap-3 md:flex-col  flex flex-col justify-center items-center h-full w-full">
      <div className="ralative">
        <Link
          to={`/watch/${data.videoId}`}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <img
            src={data.videoThumbnail}
            className={`block h-full w-99 object-cover rounded-xl`}
            alt="thumbnail"
          />
          <span
            className="relative text-sm bg-gray-900 px-0.5 mr-auto py-0.5 rounded"
            style={{ bottom: "1.6rem", left: "19.6rem" }}
          >
            {data.videoDuration}
          </span>
        </Link>
        {/* <video
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${
            isVideoPlaying ? "opacity-100" : "opacity-0"
          }`}
          ref={videoRef}
          muted
          playsInline
          src={data.videoLink}
        /> */}
      </div>
      <div className="md:flex gap-2  flex w-[340px] items-start">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-sm text-gray-400">
            <div>
              <a href="#" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews}
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

