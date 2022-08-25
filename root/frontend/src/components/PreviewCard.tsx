import React, { CSSProperties } from 'react';
import { BsDiamondFill } from 'react-icons/bs';
import { HiDotsHorizontal } from 'react-icons/hi';
import '../styles/PreviewCard.scss';

type PropTypes = {
  title: string;
  exercises: ExerciseType[];
  theme: string;
  /* eslint-disable-next-line react/require-default-props */
  style?: CSSProperties;
  //  placeholder until logos are figured out
  //  logo: string
};

type ExerciseType = {
  __typename: string;
  name: string;
};
/* eslint-disable-next-line object-curly-newline */
function PreviewCard({ title, exercises, theme, style }: PropTypes) {
  const listExercise = exercises.map((exercise: any) => (
    <li className="listExerciseItem">
      <div className="exerciseItem">
        <BsDiamondFill className="diamond" size={10} style={{ color: theme }} />
        <p className="exercise">{exercise.name}</p>
      </div>
    </li>
  ));

  return (
    <div style={style}>
      <div className="previewCard">
        <div className="previewCardHeader" style={{ color: theme }}>
          <div className="profileImage" style={{ background: theme }} />
          <h2 className="previewCardTitle">{title}</h2>
        </div>
        <ul className="list">{listExercise}</ul>
        {exercises.length > 6 && <HiDotsHorizontal size={20} className="ellipse" />}
      </div>
    </div>
  );
}

export default PreviewCard;
