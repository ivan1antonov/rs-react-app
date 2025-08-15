'use client';

import { useRouter } from 'next/router';
import { useGetDetailPersonQuery } from '../../../store/services/starwars';
import Button from '../../../components/Button';
import Loader from '../../../components/Loader';

interface DetailsProps {
  params: { id: string };
}

const Details = ({ params }: DetailsProps) => {
  const idNum = Number(params.id);
  const { data, isLoading, isError } = useGetDetailPersonQuery({ id: idNum });
  const router = useRouter();

  if (isNaN(idNum)) return null;
  if (isLoading) return <Loader />;
  if (isError) return <div className="details">Sorry, we could not get data. Try later.</div>;
  if (!data) return null;

  return (
    <div className="details">
      <Button className="close" text="close" onClick={() => router.push('/')} />
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
