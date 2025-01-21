import mongoose, { Document } from 'mongoose';

// Interface for User document
interface IUser extends Document {
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// The User model
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v: string) {
                return /^\S+@\S+\.\S+$/.test(v);
            },
            message: (props: { value: string }) => `${props.value} is not a valid email!`
        }
    },
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

// Create the User model with TypeScript interface
const User = mongoose.model<IUser>('User', userSchema);

export default User;
export { IUser };
