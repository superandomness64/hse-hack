document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('myButton').addEventListener('click', () => {
        alert('boo!');
    });

    // Periods data
    const periods = [
        { header: 'Block 1', time: '8:30 AM - 9:53 AM', start: new Date('2025-01-21T08:30:00'), end: new Date('2025-01-21T09:53:00') },
        { header: 'Block 2', time: '10:01 AM - 11:24 AM', start: new Date('2025-01-21T10:01:00'), end: new Date('2025-01-21T11:24:00') },
        { header: 'Block 3', time: '11:32 AM - 1:32 PM', start: new Date('2025-01-21T11:32:00'), end: new Date('2025-01-21T13:32:00') },
        { header: 'Block 4', time: '1:32 PM - 3:00 PM', start: new Date('2025-01-21T13:32:00'), end: new Date('2025-01-21T15:00:00') },
    ];

    let currentPeriodIndex = 0;

    // Update period display
    function updatePeriodDisplay() {
        const periodHeader = document.getElementById('period__header');
        const periodTime = document.getElementById('period__time');
        const countdownTimer = document.getElementById('countdown__timer');
        const countdownProgress = document.getElementById('countdown__progress');

        const currentPeriod = periods[currentPeriodIndex];
        periodHeader.innerText = currentPeriod.header;
        periodTime.innerText = currentPeriod.time;

        updateCountdown(currentPeriod.start, currentPeriod.end);
    }

    // Update countdown
    function updateCountdown(start, end) {
        const countdownTimer = document.getElementById('countdown__timer');
        const countdownProgress = document.getElementById('countdown__progress');

        const now = new Date();
        const totalTime = (end - start) / 1000; // in seconds
        const remainingTime = (end - now) / 1000; // in seconds

        const minutes = Math.floor(remainingTime / 60);
        const seconds = Math.floor(remainingTime % 60);
        countdownTimer.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        const progressPercent = ((totalTime - remainingTime) / totalTime) * 100;
        countdownProgress.style.width = `${progressPercent}%`;

        if (remainingTime > 0) {
            setTimeout(() => updateCountdown(start, end), 1000);
        } else {
            // Move to the next period when the current one ends
            currentPeriodIndex = (currentPeriodIndex + 1) % periods.length;
            updatePeriodDisplay();
        }
    }

    // Initialize display
    updatePeriodDisplay();
});
