import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSearch } from '~/app/search/searchAsync';
import noResults from '~/assets/images/no-results.png';
import CarouselItem from '~/components/CarouselItem';
import LoadingCarousel from '~/components/LoadingCarousel';

function ResultSearch() {
  const { params, query } = useParams();
  const dispatch = useDispatch();

  const { searchData, isLoading } = useSelector((state) => state.searchReducer);

  const [totalPages, setTotalPages] = useState(0);
  const [, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const handlePageClick = (event) => {
    setPage(+event.selected + 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (searchData) {
      setTotalResults(searchData.total_results);
      setTotalPages(searchData.total_pages);
    }
  }, [searchData]);

  useEffect(() => {
    dispatch(getSearch({ query, page }));
  }, [dispatch, page, query]);

  return (
    <div className='min-h-[700px] pt-[100px] contentWrapper mb-[20px]'>
      <div className='text-2xl leading-[34px] mb-[25px]'>{`Search results of '${query}'`}</div>
      {searchData?.results.length > 0 ? (
        <>
          <div className='grid grid-cols-1 mb-[25px] md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10'>
            {!isLoading ? (
              <>
                {searchData?.results &&
                  searchData?.results.length > 0 &&
                  searchData?.results?.map((item) => (
                    <div key={item?.id}>
                      <CarouselItem
                        data={item}
                        params={params}
                        search
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
        </>
      ) : (
        <div className='flex items-center justify-center'>
          <img
            src={noResults}
            alt='Not results'
            className='w-[300px]'
          />
        </div>
      )}
    </div>
  );
}

ResultSearch.propTypes = {};

export default ResultSearch;
