import React from 'react';
import { BsDiamondFill } from 'react-icons/bs';
import { HiDotsHorizontal } from 'react-icons/hi';
import '../../styles/PreviewCard.scss';

type PropTypes = {
  title: string;
  exercises: string[];
  theme: string;
  //  placeholder until logos are figured out
  //  logo: string
};

function PreviewCard({ title, exercises, theme }: PropTypes) {
  const listExercise = exercises.map((exercise) => (
    <li className="listExerciseItem">
      <div className="exerciseItem">
        <BsDiamondFill className="diamond" size={10} style={{ color: theme }} />
        <p className="exercise">{exercise}</p>
      </div>
    </li>
  ));

  return (
    <div className="previewCard" style={{ color: theme }}>
      <div className="previewCardHeader" style={{ color: theme }}>
        <div className="profileImage" style={{ background: theme }} />
        <h2 className="previewCardTitle">{title}</h2>
      </div>
      <ul className="list">
        {listExercise}
      </ul>
      {(exercises.length > 6) && <HiDotsHorizontal size={20} className="ellipse" />}
    </div>
  );
}

export default PreviewCard;
