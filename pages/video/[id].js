import { useRouter } from 'next/router';
import VideoDetails from '../../components/VideoDetails';

const VideoDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return <VideoDetails></VideoDetails>;
};

export default VideoDetails;
