// import { useRouter } from 'next/dist/client/router';
import Video from '../../components/video/Video';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// const url = `http://localhost:8000/items/`
const API_KEY = `AIzaSyBv_LJcdWv4OVTn4aZjUPvk9vtd6KsvBus`;
const playlistId = `PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw`;
const dataApi = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=20&playlistId=${playlistId}&key=${API_KEY}`;

export const getStaticPaths = async () => {
  const res = await fetch(dataApi);
  const data = await res.json();

  const paths = data.items.map((video) => {
    // NOTE Use either position or resourceId.videoId
    return {
      params: { id: `${video.snippet.position}` },
    };
  }); // id should be string

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(dataApi);
  const playlistData = await res.json();
  let data;

  let videoArray = playlistData?.items.map((video) => {
    if (video.snippet.position == id) {
      return (data = JSON.stringify(video));
      // return {
      //   props: { videoData },
      // };
    }
  });

  data = JSON.stringify({ data });
  // console.log(data);
  return {
    props: { data },
  };
};

const Tutorial = ({ data }) => {
  const [Video, setVideo] = useState(null);
  let videoData = JSON.parse(data);
  videoData = JSON.parse(videoData.data);
  // videoData = JSON.parse(videoData.snippet);
	// videoData =

  useEffect(() => {
    setVideo(videoData);
  }, []);
  return (
    <section>
      <h2>Video Dynamic</h2>
      <h3>{JSON.stringify(videoData)}</h3>
      <h3>{typeof videoData}</h3>
      <h3>{typeof videoData.snippet}</h3>
      <h3>{JSON.stringify( videoData.snippet )}</h3>

      {/* <Video props={videoData} /> */}
    </section>
  );
};

export default Tutorial;
