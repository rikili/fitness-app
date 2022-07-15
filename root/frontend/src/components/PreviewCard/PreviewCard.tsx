import React from 'react';
import { useTheme } from 'react-jss';
import { BsFillSuitDiamondFill } from 'react-icons/bs';
import { HiDotsHorizontal } from 'react-icons/hi';
import useStyles from './PreviewCard.style';

type PropTypes = {
  title: string;
  exercises: string[];
  //  placeholder until logos are figured out
  //  logo: string
};

function PreviewCard({ title, exercises }: PropTypes) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const listExercise = exercises.map((exercise) => (
    <li className={classes.listExerciseItem}>
      <div className={classes.exerciseItem}>
        <BsFillSuitDiamondFill className={classes.diamond} />
        <p className={classes.exercise}>{exercise}</p>
      </div>
    </li>
  ));

  return (
    <div className={classes.previewCard}>
      <div className={classes.previewCardHeader}>
        <div className={classes.profileImage} />
        <h2 className={classes.previewCardTitle}>{title}</h2>
      </div>
      <ul className={classes.list}>
        {listExercise}
      </ul>
      {(exercises.length > 6) && <HiDotsHorizontal size={20} className={classes.ellipse} />}
    </div>
  );
}

export default PreviewCard;
