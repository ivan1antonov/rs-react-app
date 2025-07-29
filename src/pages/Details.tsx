import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Person } from '../types/types';
import Button from '../components/Button';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Person>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    fetch(`https://swapi.py4e.com/api/people/${id}/`)
      .then((res) => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [id]);

  if (!id) return null;
  if (loading) return <div className="details">Загрузка...</div>;
  if (!data) return null;

  return (
    <div className="details">
      <Button className="close" text="close" onClick={() => navigate('/')} />
      <h3>{data.name}</h3>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Hair color: {data.hair_color}</p>
      <p>Skin color: {data.skin_color}</p>
      <p>Eye color: {data.eye_color}</p>
      <p>Gender: {data.gender}</p>
      <p>Birth Year: {data.birth_year}</p>
    </div>
  );
};

export default Details;
