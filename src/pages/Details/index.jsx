import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCredits } from '~/app/credits/creditsAsync';
import { getDetails } from '~/app/details/detailsAsync';
import { getRecommendations } from '~/app/recommendations/recommendationsAsync';
import { getSimilar } from '~/app/similar/similarAsync';
import { getVideos } from '~/app/videos/videosAsync';
import Cast from '~/components/Cast';
import DetailsBanner from '~/components/DetailsBanner';
import Recommendation from '~/components/Recommendation';
import Similar from '~/components/Similar';
import VideosSection from '~/components/VideosSection';

function Details() {
  const { mediaType, id } = useParams();
  const dispatch = useDispatch();

  const { detailsData, isLoading: isLoadingDetails } = useSelector(
    (state) => state.detailsReducer
  );
  const { creditsData, isLoading: isLoadingCredits } = useSelector(
    (state) => state.creditsReducer
  );
  const { videosData, isLoading: isLoadingVideos } = useSelector(
    (state) => state.videosReducer
  );
  const { similarData, isLoading: isLoadingSimilar } = useSelector(
    (state) => state.similarReducer
  );
  const { recommendationsData, isLoading: isLoadingRecommendations } =
    useSelector((state) => state.recommendationsReducer);

  useEffect(() => {
    dispatch(getDetails({ mediaType, id }));
    dispatch(getCredits({ mediaType, id }));
    dispatch(getVideos({ mediaType, id }));
    dispatch(getSimilar({ mediaType, id }));
    dispatch(getRecommendations({ mediaType, id }));
  }, [dispatch, mediaType, id]);

  return (
    <div>
      <DetailsBanner
        data={detailsData}
        isLoading={isLoadingDetails}
        video={videosData?.results?.[0]}
        credits={creditsData?.crew}
      />
      <Cast
        data={creditsData?.cast}
        isLoading={isLoadingCredits}
      />
      <VideosSection
        data={videosData?.results}
        isLoading={isLoadingVideos}
      />
      <Similar
        data={similarData?.results}
        isLoading={isLoadingSimilar}
        mediaType={mediaType}
      />
      <Recommendation
        data={recommendationsData?.results}
        isLoading={isLoadingRecommendations}
        mediaType={mediaType}
      />
    </div>
  );
}

Details.propTypes = {};

export default Details;
