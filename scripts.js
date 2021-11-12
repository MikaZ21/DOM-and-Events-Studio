window.addEventListener('DOMContentLoaded', () => {
    let Height = 0;
    let left = 0;
    
    const rocket = document.getElementById("rocket");
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaeShuttleHeight");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("upControl");
    const downButton = document.getElementById("downControl");
    const rightButton = document.getElementById("rightControl");
    const leftButton = document.getElementById("leftControl");



    takeOffButton.addEventListener('click', () => {
        const flightConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (flightConfirmation) {
            flightStatus.innerText = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            height += 10000
            spaceShuttleHeight.innerText = height;
        }
    });

    landingButton.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        height = 0;
        spaceShuttleHeight.innerText = height;
        shuttleBackground.style.backgroundColor = "green";
    });

    const missionAbortHandler = () => {
        const abortConfirmation = window.confirm("Confirm that you want to abort the mission.");
        if (abortConfirmation) {
            height = 0;
            spaceShuttleHeight.innerText = height;
            shuttleBackground.style.backgroundColor = "green";
        }
    }
    missionAbortButton.addEventListener('click', missionAbortHandler);

    upButton.addEventListener('click', () => {
        height += 10000
        spaceShuttleHeight.innerText = height;
        rocket.style.bottom = `${height / 1000}px`;
    });
    downButton.addEventListener('click', () => {
        height -= 10000
        spaceShuttleHeight.innerText = height;
        rocket.style.bottom = `${height / 1000}px`;
    });
    rightButton.addEventListener('click', () => {
        height += 10
        spaceShuttleHeight.innerText = height;
        rocket.style.right = `${10}px`;
    });
    leftButton.addEventListener('click', () => {
        height -= 10
        spaceShuttleHeight.innerText = height;
        rocket.style.left = `${10}px`;
    });
});