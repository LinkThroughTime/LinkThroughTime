Hooks.once("ready", async () => {
  let sceneId = "Scene.ybmJtymS3uqgqzgq";  
  if (game.user.isGM) {
    let scene = game.scenes.get(sceneId);
    if (scene) {
      await scene.activate();
    }
  }

  const welcomeLines = [
    {
      sound: "modules/star-trek-intro/star-trek/voice-lines/greetings/awaiting-your-orders-captain.wav",
      message: "Awaiting your orders captain."
    },
    {
      sound: "modules/star-trek-intro/star-trek/voice-lines/greetings/captain-present-on-the-bridge.wav",
      message: "Captain present on the bridge."
    },
    {
      sound: "modules/star-trek-intro/star-trek/voice-lines/greetings/command-authority-verified.wav",
      message: "Command authority verified, Bridge controls returned to you Captain."
    },
    {
      sound: "modules/star-trek-intro/star-trek/voice-lines/greetings/command-recognized.wav",
      message: "Command recognized. Standby for further instructions."
    },
    {
      sound: "modules/star-trek-intro/star-trek/voice-lines/greetings/welcome-back-captain.wav",
      message: "Welcome back Captain."
    }
  ];

  const randomLine = welcomeLines[Math.floor(Math.random() * welcomeLines.length)];
  console.log(`Selected welcome message: ${randomLine.message}`);

  AudioHelper.play({
    src: randomLine.sound,
    volume: 0.8,
    autoplay: true,
    loop: false
  }, true);
});