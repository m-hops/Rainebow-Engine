"use strict";

//ENGINE SCENE SWITCHER//
let rootStateMachine;
let globalRenderer = new Renderer();
let gameState = new GameState();

//SET CANVAS PROPERTY//
let canvas = {
  dimensionW:1000,
  dimensionH:700,
  color: {
    r: 9,
    g: 3,
    b: 15
  }
}

function preload() {

}

//ACTIVATES MOUSE CLICK THROUGH ENGINE AND ISTATE//
function mouseClicked() {

  if (rootStateMachine.currentState != null) {

      rootStateMachine.currentState.onMouseClick(rootStateMachine);

  }
}

//ACTIVATES MOUSE PRESSED THROUGH ENGINE AND ISTATE//
function mousePressed() {

  if (rootStateMachine.currentState != null) {

      rootStateMachine.currentState.onMousePressed(rootStateMachine);

  }
}

//ACTIVATES MOUSE RELEASE THROUGH ENGINE AND ISTATE//
function mouseReleased() {

  if (rootStateMachine.currentState != null) {

      rootStateMachine.currentState.onMouseReleased(rootStateMachine);

  }
}

//ACTIVATES KEYPRESSED THROUGH ENGINE AND ISTATE//
function keyPressed() {

    if (rootStateMachine.currentState != null) {

        rootStateMachine.currentState.onKeyPress(rootStateMachine, keyCode);

    }
}

//ACTIVATES KEYTYPED THROUGH ENGINE AND ISTATE//
function keyTyped() {

    if (rootStateMachine.currentState != null) {

        rootStateMachine.currentState.onKeyType(rootStateMachine, key);

    }
}

function setup() {

  createCanvas(canvas.dimensionW,canvas.dimensionH);

  //SET SCENE TO PROPER DESIGNATION WITH TRANSIT BELOW//
  rootStateMachine = new StateMachine();
  gameState.currentScene = "TestScene";
  rootStateMachine.transit(new SceneState(globalRenderer, new TestScene()));

}

function draw() {

  rootStateMachine.update();

  background(canvas.color.r, canvas.color.g, canvas.color.b);

  rootStateMachine.draw();

}
