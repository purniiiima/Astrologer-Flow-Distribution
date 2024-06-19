// src/algorithm.js
function distributeUsers(users, astrologers, topAstrologersRatio = 2) {
    let userIndex = 0;
    const topAstrologers = astrologers.filter(a => a.topAstrologer);
    const regularAstrologers = astrologers.filter(a => !a.topAstrologer);

    for (const astrologer of astrologers) {
        astrologer.assignedUsers = [];
    }

    while (userIndex < users.length) {
        for (const astrologer of topAstrologers) {
            if (userIndex >= users.length) break;
            astrologer.totalConnections += 1;
            astrologer.assignedUsers.push(user);
            userIndex++;
        }
        for (const astrologer of regularAstrologers) {
            if (userIndex >= users.length) break;
            const user = users[userIndex];
            astrologer.totalConnections += 1;
            astrologer.assignedUsers.push(user);
            userIndex++;
        }
    }
}

module.exports = { distributeUsers };
