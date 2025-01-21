import mongoose from 'mongoose';

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

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;