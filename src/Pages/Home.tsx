import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Components/Spinner";
import { HomePageVideos } from "../Types";
import Card from "../Components/Card";
import { clearVideos } from "../store";

function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

useEffect(()=>{
  return() =>{
    dispatch(clearVideos())
  }
},[dispatch])

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);
  return (
    <div className="max-h-screen overflow-hidden ">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh"}}>
        <Sidebar />
  <div className="w-full h-full">
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={900}
          
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] p-8 w-full">
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
        </div>
      </div>
    </div>
  );
}

export default Home;
