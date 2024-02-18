import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Components/Spinner";
import { HomePageVideos } from "../Types";
import { clearVideos } from "../store";
import { useNavigate } from "react-router-dom";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import SearchCard from "../Components/SearchCard";

function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state)=>state.youtubeApp.searchTerm)

useEffect(()=>{
  return() =>{
    dispatch(clearVideos())
    if(searchTerm === "") navigate("/");
    else
    {
      dispatch(getSearchPageVideos(false))
    }
  }
},[dispatch,navigate,searchTerm])

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {videos.length ? (
            <div className="py-8 pl-8 flex flex-col gap-5 w-full">
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getSearchPageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            
              {videos.map((item: HomePageVideos) => {
                return(
                  <div className="my-5">
                  <SearchCard data={item} key={item.videoId} />
                  </div>
                )
              })}
           
          </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Search;
