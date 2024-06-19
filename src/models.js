// src/models.js
class Astrologer {
    constructor(id, name, topAstrologer = false) {
        this.id = id;
        this.name = name;
        this.totalConnections = 0;
        this.topAstrologer = topAstrologer;
        this.assignedUsers = [];
    }
}

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

module.exports = { Astrologer, User };