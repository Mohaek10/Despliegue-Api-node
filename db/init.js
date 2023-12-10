db.createUser({
    user: "moha",
    pwd: "moha123",
    roles: [
        {
            role: "readWrite",
            db: "nombres",
        },
    ],
});