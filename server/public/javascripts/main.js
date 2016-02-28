/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';

var fps = 0.5;

// Put variables in global scope to make them available to the browser console.

document.querySelector('body').style.transition = 'background 1s';
document.querySelector('body').style.WebKitTransition = 'background 1s';

var video = document.querySelector('video');
var canvas = window.canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;

var button = document.querySelector('button');
var constraints = {
  audio: false,
  video: true
};

function successCallback(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;

  window.setInterval(function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').
    drawImage(video, 0, 0, canvas.width, canvas.height);

  var vibrant = new Vibrant(canvas);
  var swatches = vibrant.swatches();

  if(swatches["Vibrant"]){
    document.querySelector("body").style.background = swatches["Vibrant"].getHex();
  }

  }, 1/fps * 1000);

}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

if(navigator.getUserMedia) navigator.getUserMedia(constraints, successCallback, errorCallback);
else errorCallback(new Error("navigator.getUserMedia not found"));
