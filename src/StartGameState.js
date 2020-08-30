const StartGameState = {
    day: 0,
    gameLength: 10,
    progress: 0,
    gameOver: false,
    elements: {
        fire: {
            days: 0,
            percent: 0
        },
        water: {
            days: 0,
            percent: 0
        },
        air: {
            days: 0,
            percent: 0
        },
        earth: {
            days: 0,
            percent: 0
        },
        magic: {
            days: 0,
            percent: 0
        }
    }
};

export default StartGameState;