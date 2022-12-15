import { useRouter } from 'next/router';
import SearchResult from '../../components/SearchResult';

const SearchResult = () => {
  const router = useRouter();
  const { id } = router.query;

  return <SearchResult></SearchResult>;
};

export default SearchResult;
