var canvas = document.querySelector("#renderCanvas");
var popCanvas = document.querySelector("#popCanvas");
var btn1, btn2, btn3;

btn1 = document.querySelector(".nav-btn-1");
btn2 = document.querySelector(".nav-btn-2");
btn3 = document.querySelector(".nav-btn-3");

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

  // Events
  btn1.addEventListener("click",
    (()=>{
      BABYLON.SceneLoader.Append("../medias/models/", "speaker.glb", scene, function (scene) {
        scene.createDefaultCameraOrLight(true, true, true);
        scene.activeCamera.alpha += Math.PI;
      });
      return scene;
    })
  )

  btn2.addEventListener("click",
    (() => {
      BABYLON.SceneLoader.Append("../medias/models/", "lighter.glb", scene, function (scene) {
        scene.createDefaultCameraOrLight(true, true, true);
        scene.activeCamera.alpha += Math.PI;
      });
      return scene;
    })
  )

  btn3.addEventListener("click",
    (() => {
      BABYLON.SceneLoader.Append("../medias/models/", "light.glb", scene, function (scene) {
        scene.createDefaultCameraOrLight(true, true, true);
        scene.activeCamera.alpha += Math.PI;
      });
      return scene;
    })
  )
  //TODO : Create var for each mesh & .dispose() them after click
  BABYLON.SceneLoader.Append("../medias/models/", "speaker.glb", scene, function (scene) {
    scene.createDefaultCameraOrLight(true, true, true);
    scene.activeCamera.alpha += Math.PI;
  });
  }

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

//On click add description

function removeCanvas() {
  popCanvas.firstChild.remove();
  popCanvas.firstChild.remove();
  scene.dispose();
  engine.dispose();
}

function createCanvas() {
  popCanvas.appendChild(canvas);
}