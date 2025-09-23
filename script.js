document.getElementById("generateBtn").addEventListener("click", function () {
  const word1 = document.getElementById("word1").value.trim();
  const word2 = document.getElementById("word2").value.trim();
  const word3 = document.getElementById("word3").value.trim();
  const output = document.getElementById("poemOutput");

  if (!word1 || !word2 || !word3) {
    output.innerHTML = "Please enter all three words!";
    output.classList.add("show");
    return;
  }

  // Word categories
  const fruits = ["apple", "banana", "mango", "orange", "grape"];
  const names = ["john", "alice", "emma", "michael", "sophia"];

  // Check category
  let category = "generic";
  const words = [word1.toLowerCase(), word2.toLowerCase(), word3.toLowerCase()];

  if (words.some(w => fruits.includes(w))) category = "fruit";
  else if (words.some(w => names.includes(w))) category = "name";

  // Templates for each category
  const templates = {
    fruit: [
      `Beneath the sky, ${word1}, ${word2}, and ${word3} grew,<br> sweet whispers in a fruity hue.`,
      `${word1} and ${word2} danced on the trees,<br> while ${word3} hummed with the buzzing bees.`,
      `Among the orchards, ${word1}, ${word2}, and ${word3} play,<br> spreading colors in a joyful way.`
    ],
    name: [
      `${word1}, ${word2}, and ${word3} walked side by side,<br> sharing secrets the stars can't hide.`,
      `Oh ${word1}, with ${word2} and ${word3} too,<br> friendship blooms in skies so blue.`,
      `${word1}, ${word2}, and ${word3} laugh under the moon,<br> singing together a cheerful tune.`
    ],
    generic: [
      `In the land of ${word1}, ${word2} smiles bright,<br> ${word3} whispers softly in the night.`,
      `${word1}, ${word2}, and ${word3} drift with the breeze,<br> writing poems on falling leaves.`,
      `Through the winds of ${word1}, ${word2} calls,<br> while ${word3} echoes in waterfall halls.`
  "Whispers of the night,\nDreams take their silent flight,\nMoonlight paints the world so bright,\nPeaceful hearts in silver light.",

  "Under the banyan tree so old,\nStories of wisdom softly told,\nBreezes carry secrets deep,\nPromises the stars will keep.",

  "Morning dew on the greenest grass,\nMoments like these too soon will pass,\nNature hums a gentle tune,\nAs sun wakes up the lazy moon.",

  "In the city’s endless roar,\nI crave the ocean’s distant shore,\nWaves that kiss the sands so free,\nSinging songs of mystery.",

  "Hearts like rivers sometimes flow,\nSilent, steady, warm, and slow,\nAcross the mountains, through the rain,\nFinding joy and easing pain.",

  "Beneath the autumn’s golden sky,\nLeaves like letters flutter by,\nThe wind collects what trees have shed,\nA season’s story softly spread.",

  "Stars are freckles on the night,\nScattered sparks of silver light,\nWatching over dreams below,\nKeeping secrets they will never show.",

  "Rain taps lightly on the ground,\nNature hums a soothing sound,\nPuddles form like mirrors small,\nReflecting clouds that softly fall.",

  "The mountain peak so cold and high,\nBrushes softly against the sky,\nSnow like whispers drifts away,\nKissing dawn to greet the day.",

  "Summer blooms in fields so wide,\nColors dancing side by side,\nPetals laugh in warm embrace,\nChasing winds in endless race."
]
  };

  // Pick random template based on category
  const poemList = templates[category];
  const randomIndex = Math.floor(Math.random() * poemList.length);

  output.innerHTML = poemList[randomIndex];
  output.classList.add("show");

});
