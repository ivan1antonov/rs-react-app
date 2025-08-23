import ContentBox from './ContentBox';
import RefreshButton from './RefreshButton';
import getPeople from './services/ApiSearch';
import shouldThrow from './services/CreateError';
import Loader from './Loader';
import Pagination from './Pagination';

export default async function Content({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const data = await getPeople(searchParams?.query, searchParams?.page);
  return (
    <div>
      <main className="results">{data ? <ContentBox getPeople={data} /> : <Loader />}</main>
      <button className="create error" onClick={shouldThrow}>
        break the universe
      </button>
      <RefreshButton />
      <Pagination count={data.count} />
    </div>
  );
}
