const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

console.log(`setting a ${waitTime / 1000} seconds delay!`);
const timeInc = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p}%`);
}
const timeFinished = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`no more wait!!`);
    console.log('\nDone!');
    clearInterval(interval);
}
const interval = setInterval(timeInc, waitInterval);

setTimeout(timeFinished, waitTime);
