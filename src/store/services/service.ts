import { useGetPersonStarWarsQuery } from './starwars';
import { callAction } from './dispatch';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const usePeopleWithPagination = (search: string) => {
  const { data, ...rest } = useGetPersonStarWarsQuery(search);
  const dispatch = useDispatch();
  const { setPagination } = callAction(dispatch);

  useEffect(() => {
    if (data) {
      setPagination(Math.ceil(data.response.length / 10));
    }
  }, [data, dispatch]);

  return { data, ...rest };
};
