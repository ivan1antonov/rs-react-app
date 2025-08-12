import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Person } from '../types/types';
import Button from '../components/Button';
import { getResults } from '../services/services';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Person>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getResults(id)
      .then((res) => {
        setData(res);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (!id) return null;
  if (loading) return <div className="details">Загрузка...</div>;
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
