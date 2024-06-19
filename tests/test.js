// tests/test.js
const { expect } = require('chai');
const { distributeUsers } = require('../src/algorithm');
const { Astrologer, User } = require('../src/models');

describe('Flow Distribution Algorithm', () => {
    it('should evenly distribute users among astrologers', () => {
        const astrologers = [
            new Astrologer(1, 'Astrologer A', true),
            new Astrologer(2, 'Astrologer B', false)
        ];
        const users = [
            new User(1, 'User 1'),
            new User(2, 'User 2'),
            new User(3, 'User 3'),
            new User(4, 'User 4')
        ];

        distributeUsers(users, astrologers);
        expect(astrologers[0].totalConnections).to.equal(2);
        expect(astrologers[1].totalConnections).to.equal(2);
        expect(astrologers[0].assignedUsers.length).to.equal(2);
        expect(astrologers[1].assignedUsers.length).to.equal(2);
    });

    it('should give top astrologers more connections', () => {
        const astrologers = [
            new Astrologer(1, 'Astrologer A', true),
            new Astrologer(2, 'Astrologer B', false),
            new Astrologer(3, 'Astrologer C', false)
        ];
        const users = [
            new User(1, 'User 1'),
            new User(2, 'User 2'),
            new User(3, 'User 3'),
            new User(4, 'User 4'),
            new User(5, 'User 5'),
            new User(6, 'User 6')
        ];

        distributeUsers(users, astrologers);
        expect(astrologers[0].totalConnections).to.be.greaterThan(astrologers[1].totalConnections);
        expect(astrologers[0].totalConnections).to.be.greaterThan(astrologers[2].totalConnections);
        expect(astrologers[0].assignedUsers.length).to.be.greaterThan(0);
    });
});
