import express, { Router, Request, Response } from 'express';
import User, { IUser } from '../models/user.js'; 

const router: Router = express.Router();

// Create a new user
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const user = new User({
            email: req.body.email,
            name: req.body.name,
        });
        await user.save();
        res.status(201).json(user);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(400).json({ message: 'Unknown error occurred' });
        }
    }
});

// Get all users
router.get('/', async (_req: Request, res: Response): Promise<void> => {
    try {
        const users: IUser[] = await User.find();
        res.json(users);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'Unknown error occurred' });
        }
    }
});

// Get one user by ID
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const user: IUser | null = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(user);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'Unknown error occurred' });
        }
    }
});

// Update one user by ID
router.patch('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const user: IUser | null = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        if (req.body.email != null) user.email = req.body.email;
        if (req.body.name != null) user.name = req.body.name;

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(400).json({ message: 'Unknown error occurred' });
        }
    }
});

// Delete one user by ID
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const user: IUser | null = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.json({ message: 'User deleted' });
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'Unknown error occurred' });
        }
    }
});

export default router;
