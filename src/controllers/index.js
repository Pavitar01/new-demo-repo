// This file exports functions that handle the business logic for the routes.

getExample = (req, res) => {
    res.send('This is an example response from the controller.');
};

postExample = (req, res) => {
    const data = req.body;
    res.status(201).send({ message: 'Data received', data });
};
getUsers = async (req, res) => {
    const response = await fetch('https://dummyjson.com/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    res.json(data);
}

module.exports = {
    getExample,
    postExample,
    getUsers
};