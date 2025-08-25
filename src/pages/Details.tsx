import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { PersonTransform } from '../types/types';
import Button from '../components/Button';
import { getPersonById } from '../services/services';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<PersonTransform>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPerson = async () => {
      if (!id) return;
      try {
        const person = await getPersonById(id);
        setData(person);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPerson();
  }, [id]);

  if (!id) return null;
  if (loading) return <div className="details">Loading...</div>;
  if (!data) return null;

  return (
    <div className="details">
      <Button className="close" text="close" onClick={() => navigate('/')} />
      <h3>{data.name}</h3>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Hair color: {data.hairColor}</p>
      <p>Skin color: {data.skinColor}</p>
      <p>Eye color: {data.eyeColor}</p>
      <p>Gender: {data.gender}</p>
      <p>Birth Year: {data.birthYear}</p>
    </div>
  );
};

export default Details;
