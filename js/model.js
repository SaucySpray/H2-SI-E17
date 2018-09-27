var canvas = document.getElementById("renderCanvas");

var delayCreateScene = function () {
  // Create a scene.
  var scene = new BABYLON.Scene(engine);

  var camera = new BABYLON.ArcRotateCamera("cam", 4.7, 1.2, 20, BABYLON.Vector3.Zero());
  camera.attachControl(canvas, true);
  camera.useBouncingBehavior = true;
  camera.useAutoRotationBehavior = true;
  camera.inputs.add(new BABYLON.FreeCameraGamepadInput());

  // Create a default skybox with an environment.
  scene.clearColor = new BABYLON.Color4(0, 0, 0, 0.0000000000000001);

  // Append glTF model to scene.
  BABYLON.SceneLoader.Append("medias/models/", "light.glb", scene, function (scene) {
    scene.createDefaultCameraOrLight(true, true, true);
    scene.activeCamera.alpha += Math.PI;
  });
  BABYLON.SceneLoader.Append("medias/models/", "lighter.glb", scene, function (scene) {
    scene.createDefaultCameraOrLight(true, true, true);
    scene.activeCamera.alpha += Math.PI;
  });
  BABYLON.SceneLoader.Append("medias/models/", "plate.glb", scene, function (scene) {
    scene.createDefaultCameraOrLight(true, true, true);
    scene.activeCamera.alpha += Math.PI;
  });
  BABYLON.SceneLoader.Append("medias/models/", "speaker.glb", scene, function (scene) {
    scene.createDefaultCameraOrLight(true, true, true);
    scene.activeCamera.alpha += Math.PI;
  });
  return scene;

}
var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
var scene = delayCreateScene();

engine.runRenderLoop(function () {
  if (scene) {
    scene.render();
  }
});

// Resize
window.addEventListener("resize", function () {
  engine.resize();
});