let teams = 4;

for (let i = 12; i > 0; i--) {
    teams *= 2;
    console.log(`The ${i}th round has ${teams} teams.`);
}