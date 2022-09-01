import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { VariableSizeList as List } from 'react-window';
import PreviewCard from './PreviewCard';
import '../styles/CardColumn.scss';
import DaySummary from './DaySummary';
import { vertGap, screenHeight, longerListSpacing } from '../constants/CardColumn';

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
  const { loading, error, data } = useQuery(GET_WORKOUTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Query Error</p>;
  const third = Math.ceil(data.getWorkouts.length / 3);
  const workoutData: WorkoutInfoType[] = [...data.getWorkouts];
  const columnOne: WorkoutInfoType[] = workoutData.splice(0, third);
  const columnTwo: WorkoutInfoType[] = workoutData.splice(0, third);
  const columnThree: WorkoutInfoType[] = workoutData.splice(0);

  function getHeight(sizeList: number): number {
    const listSpacing: number = (sizeList - 1) * 30;
    const header: number = 50;
    return listSpacing + header + vertGap + 40;
  }

  const colOne: any = (index: number) => {
    if (columnOne[index].exercises.length <= 6) {
      return getHeight(columnOne[index].exercises.length);
    }
    return longerListSpacing;
  };

  const colTwo: any = (index: number) => {
    if (columnTwo[index].exercises.length <= 6) {
      return getHeight(columnTwo[index].exercises.length);
    }
    return longerListSpacing;
  };

  const colThree: any = (index: number) => {
    if (columnThree[index].exercises.length <= 6) {
      return getHeight(columnThree[index].exercises.length);
    }
    return longerListSpacing;
  };

  return (
    <div>
      {!loading && !error && (
        <div className="columns">
          <List height={screenHeight} itemCount={columnOne.length} itemSize={colOne} width={280} className="list">
            {({ index, style }) => (
              <PreviewCard
                style={style}
                title={columnOne[index].title}
                exercises={columnOne[index].exercises}
                theme={columnOne[index].theme}
                key={index}
              />
            )}
          </List>
          <List height={screenHeight} itemCount={columnTwo.length} itemSize={colTwo} width={280} className="list">
            {({ index, style }) => (
              <PreviewCard
                style={style}
                title={columnTwo[index].title}
                exercises={columnTwo[index].exercises}
                theme={columnTwo[index].theme}
                key={index}
              />
            )}
          </List>
          <div className="weatherList">
            <DaySummary />
            <List height={screenHeight} itemCount={columnThree.length} itemSize={colThree} width={280} className="list columnThree">
              {({ index, style }) => (
                <PreviewCard
                  style={style}
                  title={columnThree[index].title}
                  exercises={columnThree[index].exercises}
                  theme={columnThree[index].theme}
                  key={index}
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
