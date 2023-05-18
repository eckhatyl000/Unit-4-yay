let users = [];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getRandomFortune: (req, res) => {
        const fortune = ["You will be very lucky today.", "Your kindness will lead you to great success.", "A great opportunity will come your way soon.", "Your hard work will pay off in the end.", "Good things come to those who wait.", "Lillith awaits in ACT 6 of Diablo IV I thinks it best if you have stocked up on quality equipment with good affixes"];
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
    },

    addUser: (req, res) => {
        let newUser = req.body;
        
        users.push(newUser);
        res.status(201).send(newUser);
    },
    updateUser: (req, res) => {
        let userId = req.params.id;
        let updatedUser = req.body;
        users = users.map(user => user.id == userId ? updatedUser : user);
        res.status(200).send(updatedUser);
    },
    deleteUser: (req, res) => {
        let userId = req.params.id;
        users = users.filter(user => user.id != userId);
        res.status(204).end();
    }





}
