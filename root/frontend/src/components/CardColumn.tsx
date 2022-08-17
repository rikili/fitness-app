import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { VariableSizeList as List } from 'react-window';
import PreviewCard from './PreviewCard';
// import PreviewCard from './PreviewCard';

const GET_WORKOUTS = gql`
  query getWorkouts {
    getWorkouts(accountId: "62d64c95cc8ff1221cf7dfa2") {
      title
      theme
      exercises {
        name
      }
    }
  }
`;

const sizeMap = new Map<number, number>([
  [1, 80],
  [2, 110],
  [3, 140],
  [4, 200],
  [5, 205],
  [6, 244],
]);

function CardColumn() {
  const { loading, error, data } = useQuery(GET_WORKOUTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Query Error</p>;
  const getPreviewHeight: any = (index: number) => {
    if (data.getWorkouts[index].exercises.length <= 5) {
      return sizeMap.get(data.getWorkouts[index].exercises.length);
    }
    return 244;
  };

  return (
    <div>
      {/* eslint-disable-next-line max-len */}
      {/* {!loading && !error && data.getWorkouts.map((work: any) => <PreviewCard title={work.title} exercises={work.exercises} theme={work.theme} />)} */}
      {!loading && !error && (
        /* eslint-disable-next-line max-len */
        <List height={350} itemCount={data.getWorkouts.length} itemSize={getPreviewHeight} width={300}>
          {({ index, style }) => (
            /* eslint-disable-next-line max-len */
            <PreviewCard style={style} title={data.getWorkouts[index].title} exercises={data.getWorkouts[index].exercises} theme={data.getWorkouts[index].theme} />
          )}
        </List>
      )}
    </div>
  );
}
export default CardColumn;
