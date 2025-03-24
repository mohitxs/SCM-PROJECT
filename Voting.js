document.getElementById('votingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const candidate = document.querySelector('input[name="candidate"]:checked');
    if (candidate) {
        const party = candidate.value;

        if (!voteCounts[party]) {
            voteCounts[party] = 0;
        }
        voteCounts[party]++;

        document.getElementById('voteResult').textContent = `You voted for: ${party}`;
        displayVoteCounts();

        document.getElementById('result').classList.remove('hidden');
        document.getElementById('votingForm').reset();
    } else {
        alert('Please select a party before voting!');
    }
});

const voteCounts = {};

function displayVoteCounts() {
    const countDiv = document.getElementById('count');
    countDiv.innerHTML = ''; 
    for (const [party, count] of Object.entries(voteCounts)) {
        const partyCount = document.createElement('p');
        partyCount.textContent = `${party}: ${count} votes`;
        countDiv.appendChild(partyCount);
    }
}