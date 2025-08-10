import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useGetDetailPersonQuery } from '../store/services/starwars';
import Loader from '../components/Loader';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const idNum = Number(id);
  const { data, isLoading, isError } = useGetDetailPersonQuery({ id: idNum });
  // console.log('data: ', data);
  const navigate = useNavigate();

  if (!id || isNaN(idNum)) return null;
  if (isLoading) return <Loader />;
  if (isError) return <div className="details">Sorry, we could not get data. Try later.</div>;
  if (!data) return null;

  return (
    <div className="details">
      <Button className="close" text="close" onClick={() => navigate('/')} />
      <div className="content_img">
        <img src={data.image} alt="person image" />
      </div>
      <h3>{data.name}</h3>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Hair color: {data.hairColor}</p>
      <p>Skin color: {data.skinColor}</p>
      <p>Eye color: {data.eyeColor}</p>
      <p>Gender: {data.gender}</p>
    </div>
  );
};

export default Details;
