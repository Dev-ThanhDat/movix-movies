import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDiscover } from '~/app/discover/discoverAsync';
import CarouselItem from '~/components/CarouselItem';
import LoadingCarousel from '~/components/LoadingCarousel';

function Explore() {
  const { mediaType } = useParams();
  const dispatch = useDispatch();

  const { discoverData, isLoading } = useSelector(
    (state) => state.discoverReducer
  );

  const [totalPages, setTotalPages] = useState(0);
  const [, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const handlePageClick = (event) => {
    setPage(+event.selected + 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (discoverData) {
      setTotalResults(discoverData.total_results);
      setTotalPages(discoverData.total_pages);
    }
  }, [discoverData]);

  useEffect(() => {
    dispatch(getDiscover({ mediaType, page }));
  }, [dispatch, mediaType, page]);

  return (
    <div className='contentWrapper min-h-[700px] mt-[100px]'>
      <div className='text-2xl leading-[34px] mb-[25px]'>
        {mediaType === 'tv' ? 'Explore TV Shows' : 'Explore Movies'}
      </div>
      <div>
        <div className='grid grid-cols-1 mb-[25px] md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10'>
          {!isLoading ? (
            <>
              {discoverData?.results &&
                discoverData?.results.length > 0 &&
                discoverData?.results?.map((item) => (
                  <div key={item?.id}>
                    <CarouselItem
                      data={item}
                      params={mediaType}
                    />
                  </div>
                ))}
            </>
          ) : (
            <>
              {Array(15)
                .fill(0)
                .map((item, index) => (
                  <div key={index}>
                    <LoadingCarousel />
                  </div>
                ))}
            </>
          )}
        </div>
        <div className='mb-[50px]'>
          <ReactPaginate
            breakLabel='...'
            nextLabel='>'
            onPageChange={handlePageClick}
            pageCount={totalPages}
            previousLabel='<'
            renderOnZeroPageCount={null}
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination'
            activeClassName='active'
          />
        </div>
      </div>
    </div>
  );
}

Explore.propTypes = {};

export default Explore;
