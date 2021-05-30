const vibes = [
  "... and you are awesome",
  "... have a nice day",
  "... and you've got this",
  "... and so the world is"
]

let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector('.vibe').append(vibe);