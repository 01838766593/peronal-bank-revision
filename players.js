function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '10px';

}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);

}

function addPlayer() {
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `<h4 class="player-name">New player</h4>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint modi earum vitae eligendi doloribus
       debitis, blanditiis excepturi, repudiandae enim facere, nemo deleniti. Pariatur reprehenderit
       dignissimos voluptatem repellat praesentium dolores qui!</p>
</div>`
    setPlayerStyle(player);
    playerContainer.appendChild(player);
}

document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
});