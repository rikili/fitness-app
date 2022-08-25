import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { VariableSizeList as List } from 'react-window';
import PreviewCard from './PreviewCard';
import '../styles/CardColumn.scss';
import DaySummary from './DaySummary';
import sizeMap from '../constants/CardColumn';

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

type WorkoutInfoType = {
  __typename: string;
  title: string;
  theme: string;
  exercises: ExerciseType[];
};

type ExerciseType = {
  __typename: string;
  name: string;
};

function CardColumn() {
  const screenHeight: number = window.innerHeight - 130;
  const longerListSpacing: number = 265;
  const { loading, error, data } = useQuery(GET_WORKOUTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Query Error</p>;
  const third = Math.ceil(data.getWorkouts.length / 3);
  const workoutData: WorkoutInfoType[] = [...data.getWorkouts];
  const columnOne: WorkoutInfoType[] = workoutData.splice(0, third);
  const columnTwo: WorkoutInfoType[] = workoutData.splice(0, third);
  const columnThree: WorkoutInfoType[] = workoutData.splice(0);

  const colOne: any = (index: number) => {
    if (columnOne[index].exercises.length <= 6) {
      return sizeMap.get(columnOne[index].exercises.length);
    }
    return longerListSpacing;
  };

  const colTwo: any = (index: number) => {
    if (columnTwo[index].exercises.length <= 6) {
      return sizeMap.get(columnTwo[index].exercises.length);
    }
    return longerListSpacing;
  };

  const colThree: any = (index: number) => {
    if (columnThree[index].exercises.length <= 6) {
      return sizeMap.get(columnThree[index].exercises.length);
    }
    return longerListSpacing;
  };

  return (
    <div>
      {!loading && !error && (
        <div className="columns">
          {/* eslint-disable-next-line max-len */}
          <List height={screenHeight} itemCount={columnOne.length} itemSize={colOne} width={280} className="list">
            {({ index, style }) => (
              <PreviewCard
                style={style}
                title={columnOne[index].title}
                exercises={columnOne[index].exercises}
                theme={columnOne[index].theme}
              />
            )}
          </List>
          {/* eslint-disable-next-line max-len */}
          <List height={screenHeight} itemCount={columnTwo.length} itemSize={colTwo} width={280} className="list">
            {({ index, style }) => (
              <PreviewCard
                style={style}
                title={columnTwo[index].title}
                exercises={columnTwo[index].exercises}
                theme={columnTwo[index].theme}
              />
            )}
          </List>
          <div>
            <DaySummary />
            {/* eslint-disable-next-line max-len */}
            <List height={screenHeight} itemCount={columnThree.length} itemSize={colThree} width={280} className="list">
              {({ index, style }) => (
                <PreviewCard
                  style={style}
                  title={columnThree[index].title}
                  exercises={columnThree[index].exercises}
                  theme={columnThree[index].theme}
                />
              )}
            </List>
          </div>
        </div>
      )}
    </div>
  );
}
export default CardColumn;
