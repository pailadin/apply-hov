import React, { memo } from 'react';
import { useQuery } from 'utils';
import { ANIME_LIST as QUERY } from 'queries';

const Anilist = () => {
  const x = useQuery(QUERY, {
    onCompleted: (...z) => console.log(z),
  });

  return (
    <div>
      TODO
    </div>
  )
}

export default memo(Anilist);
