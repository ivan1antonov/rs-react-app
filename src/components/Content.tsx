import ContentBox from './ContentBox';
import Button from './Button';
import RefreshButton from './RefreshButton';

const Content = async () => {
  function shouldThrow() {
    throw new Error('Error inside to Content');
  }

  const getData = async () => {
    const response = await fetch('https://www.swapi.tech/api/people/', {
      next: {
        revalidate: 120,
      },
    });
    return response.json();
  };

  const data = await getData();

  return (
    <div>
      <main className="results">
        <ContentBox data={data} />
      </main>
      <Button className="create error" onClick={shouldThrow} text="break the universe" />
      <RefreshButton />
    </div>
  );
};

export default Content;
