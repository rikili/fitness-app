import { Schema, model } from 'mongoose';

interface Account {
  name: string;
}

const accountSchema = new Schema<Account>({
  name: { type: String, required: true },
});

const accountModel = model<Account>('Account', accountSchema);

export default accountModel;
