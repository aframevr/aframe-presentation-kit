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

## Current WebVR Browser Support

<div class="captioned-image-row">
  <div>
    <img data-src="media/img/firefox-nightly.png">
    <i>Firefox Nightly</i>
  </div>
  <div>
    <img data-src="media/img/chromium.png">
    <i>Experimental Chromium</i>
  </div>
  <div>
    <img data-src="media/img/samsung-browser.png">
    <i>Samsung Browser</i>
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

---

<video data-src="media/video/aframe-reduces-boilerplate.mp4" data-autoplay
       data-background-video></video>

---

## Web Developers Love A-Frame

---

## Entity-Component-System (ECS)

---

## Syntax

---

## Registering a Custom Component

------

## Community

---

## Ecosystem
