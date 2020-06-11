document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // YOUR CODE HERE
  // Declare all element variables
  let stopBtn = document.getElementById('stopButton');
  let slowBtn = document.getElementById('slowButton');
  let goBtn = document.getElementById('goButton');
  let stopLight = document.getElementById('stopLight');
  let slowLight = document.getElementById('slowLight');
  let goLight = document.getElementById('goLight');
  let bulbs = document.getElementsByClassName('bulb');

  // adds the function that changes the stop light color when the STOP button is clicked
  stopBtn.addEventListener('click', function () {
    stopLight.classList.toggle('stop');
  });

  // adds the function that sends a console message when the mouse moves over the STOP button
  stopBtn.addEventListener('mouseenter', function () {
    console.log(`Entered the ${stopBtn.innerHTML} button`);
  });

  // adds the function that sends a console message when the mouse moves away from the STOP button
  stopBtn.addEventListener('mouseleave', function () {
    console.log(`Left the ${stopBtn.innerHTML} button`);
  });

  // adds the function that changes the slow light color when the SLOW button is clicked
  slowBtn.addEventListener('click', function () {
    slowLight.classList.toggle('slow');
  });

  // adds the function that sends a console message when the mouse moves over the SLOW button
  slowBtn.addEventListener('mouseenter', function () {
    console.log(`Entered the ${slowBtn.innerHTML} button`);
  });

  // adds the function that sends a console message when the mouse moves away from the SLOW button
  slowBtn.addEventListener('mouseleave', function () {
    console.log(`Left the ${slowBtn.innerHTML} button`);
  });

  // adds the function that changes the go light color when the GO button is clicked
  goBtn.addEventListener('click', function () {
    goLight.classList.toggle('go');
  });

  // adds the function that sends a console message when the mouse moves over the GO button
  goBtn.addEventListener('mouseenter', function () {
    console.log(`Entered the ${goBtn.innerHTML} button`);
  });

  // adds the function that sends a console message when the mouse moves away from the GO button
  goBtn.addEventListener('mouseleave', function () {
    console.log(`Left the ${goBtn.innerHTML} button`);
  });
});
