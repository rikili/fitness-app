import { Schema, model, Types } from 'mongoose';

export interface Workout {
  theme: string;
  title: string;
  accountId: Schema.Types.ObjectId;
  exercise: Schema.Types.Mixed;
}

const workoutSchema = new Schema<Workout>({
  theme: { type: String, required: true },
  title: { type: String, required: true },
  accountId: { type: Types.ObjectId, ref: 'Account', required: true },
  exercise: { type: Schema.Types.Mixed, required: true },
});

const workoutModel = model<Workout>('Workout', workoutSchema, 'Workouts');

export default workoutModel;
