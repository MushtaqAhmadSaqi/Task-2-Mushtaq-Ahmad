const users = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' }
];
let nextId = 3;

// GET /api/users
const getUsers = (req, res) => {
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
};

// GET /api/users/:id
const getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({
            success: false,
            error: 'User not found'
        });
    }

    res.status(200).json({
        success: true,
        data: user
    });
};

// POST /api/users
const createUser = (req, res) => {
    const { name, role } = req.body;

    // Syntactic Validation
    if (!name || typeof name !== 'string') {
        return res.status(400).json({
            success: false,
            error: 'Name is required and must be a string'
        });
    }

    if (!role || typeof role !== 'string') {
        return res.status(400).json({
            success: false,
            error: 'Role is required and must be a string'
        });
    }

    // Semantic Validation
    const validRoles = ['admin', 'user', 'guest'];
    if (!validRoles.includes(role)) {
        return res.status(400).json({
            success: false,
            error: `Invalid role. Allowed roles are: ${validRoles.join(', ')}`
        });
    }

    const newUser = {
        id: nextId++,
        name,
        role
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        data: newUser
    });
};

module.exports = {
    getUsers,
    getUserById,
    createUser
};
