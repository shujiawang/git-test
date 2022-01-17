const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    // Add if statement here:
    // 1. Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'. 
    if (region === 'The Arctic') {
        // 2. Inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'.
        let lightWaves = 'Northern Lights';
        // 3. Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block. 
        console.log(lightWaves);
    }

    console.log(lightWaves);
};

logVisibleLightWaves();