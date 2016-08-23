<img class="stretch" data-src="media/img/aframe-logo-rendered.png">

# A-Frame

## Building Blocks for the VR Web

@you / 01 January 2016 / San Francisco, CA

------

# Virtual Reality (VR)

Technology that simulates physical presence in interactive and realistic 3D environments

---

## Hardware

<div class="image-row">
  <div><img data-src="media/img/google-cardboard.png"></div>
  <div><img data-src="media/img/google-daydream.png"></div>
  <div><img data-src="media/img/oculus-rift.png"></div>
</div>

<div class="image-row">
  <div><img data-src="media/img/samsung-gearvr.png"></div>
  <div><img data-src="media/img/playstation-vr.png"></div>
  <div><img data-src="media/img/htc-vive.png"></div>
</div>

------

## WebVR <!-- .element: style="text-transform: none" -->

An open virtual reality platform with the advantages of the Web

<div class="captioned-image-row">
  <div>
    <img data-src="media/img/web-is-open.png">
    <i>Open</i>
  </div>
  <div>
    <img data-src="media/img/web-is-connected.png">
    <i>Connected</i>
  </div>
  <div>
    <img data-src="media/img/web-is-instant.png">
    <i>Instant</i>
  </div>
</div>

---

<img class="stretch" data-src="media/img/webvr.png">

Set of **browser APIs** that enable **WebGL rendering to headsets** and **access to
various VR sensors** for pose and input. https://w3c.github.io/webvr/

---

## Browser Support

<div class="captioned-image-row">
  <div>
    <img data-src="media/img/firefox-nightly.png">
    <i>Firefox Nightly</i>
  </div>
  <div>
    <img data-src="media/img/chromium.png">
    <i>Chromium (Experimental)</i>
  </div>
  <div>
    <img data-src="media/img/samsung-browser.png">
    <i>Samsung Internet</i>
  </div>
  <div>
    <img data-src="media/img/google-cardboard.png">
    <i>Mobile Polyfill</i>
  </div>
</div>

------

## A-Frame

A web framework for building virtual reality experiences with HTML

```html
<a-scene>
  <a-box color="#4CC3D9" position="-1 0.5 -3" rotation="0 45 0"></a-box>
  <a-cylinder color="#FFC65D" position="1 0.75 -3" radius="0.5" height="1.5"></a-cylinder>
  <a-sphere color="#EF2D5E" position="0 1.25 -5" radius="1.25"></a-sphere>
  <a-plane color="#7BC8A4" rotation="-90 0 0" position="0 0 -4" width="4" height="4"></a-plane>
  <a-sky color="#ECECEC"></a-sky>
</a-scene>
```

---

## Hello World

<div class="aframe-scene">
  <a-scene embedded>
    <a-box color="#4CC3D9" position="-1 0.5 -3" rotation="0 45 0"></a-box>
    <a-cylinder color="#FFC65D" position="1 0.75 -3" radius="0.5" height="1.5"></a-cylinder>
    <a-sphere color="#EF2D5E" position="0 1.25 -5" radius="1.25"></a-sphere>
    <a-plane color="#7BC8A4" rotation="-90 0 0" position="0 0 -4" width="4" height="4"></a-plane>
    <a-sky color="#ECECEC"></a-sky>
  </a-scene>
</div>

------

## Why A-Frame?

- **Simple** to get started with zero boilerplate
- **Easy** to understand for web developers
- **Powerful** to develop with entity-component-system

---

## Simple: Zero Boilerplate

<div class="slide__boilerplate">
  <p>Import WebVR polyfill</p>
  <p>Set up camera</p>
  <p>Set up lights</p>
  <p>Initialize scene</p>
  <p>Declare and pass canvas</p>
  <p>Listen to window resize</p>
  <p>Install VREffect</p>
  <p>Instantiate renderer</p>
  <p>Create render loop</p>
  <p>Preload assets</p>
  <p>Figure out responsiveness</p>
  <p>Deal with metatags and mobile</p>
</div>

<video data-src="media/video/boilerplate.mp4" autoplay loop></video>
<!-- .element: style="opacity: 0.2" -->

---

## Simple: Zero Boilerplate

```html
<a-scene></a-scene>
```

---

## Simple: Zero Boilerplate

```js
// With three.js
var geometry = new THREE.BoxGeometry(1, 2, 3);
var material = new THREE.MeshStandardMaterial({color: 'red'});
var box = new THREE.Mesh(geometry, material);
box.position.set(10, 0, 10);
scene.add(box);
```

---

## Simple: Zero Boilerplate

```html
<a-box color="red" position="10 0 10"></a-box>
```

---

## Easy: Familiar for Web Developers

- Can get by with just HTML
- Same old DOM APIs
- Integrates with existing frameworks and libraries

```js
var scene = document.querySelector('a-scene');
var sphere = document.createElement('a-sphere');
sphere.setAttribute('radius', 2);
scene.appendChild(sphere);
```

---

## Easy: Familiar for Web Developers

```js
var scene = document.querySelector('a-scene');
var sphere = document.createElement('a-sphere');
sphere.setAttribute('radius', 2);
scene.appendChild(sphere);
```

---

## Easy: Familiar for Web Developers

- d3.js  <!-- .element: class="fragment" -->
- React & Redux  <!-- .element: class="fragment" -->
- vue.js  <!-- .element: class="fragment" -->

---

## Easy: Also Integrates with 3D Workflows

- MagicaVoxel  <!-- .element: class="fragment" -->
- Blender  <!-- .element: class="fragment" -->
- Maya  <!-- .element: class="fragment" -->

------

## Entity-Component-System Framework

- Composable, reusable, sharable bits of code
- All the power of JavaScript, three.js, and WebGL
- Developers empowering developers

---

## Syntax

Lorem ipsum

---

## Building a Component

Lorem ipsum

------

## Community

- **Github**: 60 contributors, 2800 stargazers
- **Slack**: 1300 members
- **Content**: Hundreds of projects featured on `awesome-aframe` repository and *A Week of A-Frame*

---

## Third-Party Components

Lorem ipsum

------

## Augmented Reality

------

## Questions?

- [aframe.io](https://aframe.io)
- [github.com/aframevr/aframe](https://github.com/aframevr/aframe)
- [aframevr-slack.herokuapp.com](https://aframevr-slack.herokuapp.com)
