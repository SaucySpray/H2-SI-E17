var canvas = document.getElementById("renderCanvas");

var delayCreateScene = function () {
  // Create a scene.
  var scene = new BABYLON.Scene(engine);

  // Create a default skybox with an environment.
  scene.clearColor = new BABYLON.Color4(0, 0, 0, 0.0000000000000001);

  // Append glTF model to scene.
  BABYLON.SceneLoader.Append("medias/models/", "light.glb", scene, function (scene) {
    // Create a default arc rotate camera and light.
    scene.createDefaultCameraOrLight(true, true, true);
    // The default camera looks at the back of the asset.
    // Rotate the camera by 180 degrees to the front of the asset.
    scene.activeCamera.alpha += Math.PI;
  });
  BABYLON.SceneLoader.Append("medias/models/", "lighter.glb", scene, function (scene) {
    // Create a default arc rotate camera and light.
    scene.createDefaultCameraOrLight(true, true, true);
    // The default camera looks at the back of the asset.
    // Rotate the camera by 180 degrees to the front of the asset.
    scene.activeCamera.alpha += Math.PI;
  });
  BABYLON.SceneLoader.Append("medias/models/", "plate.glb", scene, function (scene) {
    // Create a default arc rotate camera and light.
    scene.createDefaultCameraOrLight(true, true, true);
    // The default camera looks at the back of the asset.
    // Rotate the camera by 180 degrees to the front of the asset.
    scene.activeCamera.alpha += Math.PI;
  });
  BABYLON.SceneLoader.Append("medias/models/", "speaker.glb", scene, function (scene) {
    // Create a default arc rotate camera and light.
    scene.createDefaultCameraOrLight(true, true, true);
    // The default camera looks at the back of the asset.
    // Rotate the camera by 180 degrees to the front of the asset.
    scene.activeCamera.alpha += Math.PI;
  });
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