![](media/img/aframe-logo-rendered.png) <!-- .element: class="stretch" -->

# A-Frame

## Building Blocks for the VR Web

@you / 01 January 2016 / San Francisco, CA

---

# Virtual Reality (VR)

Technology that simulates physical presence in interactive and realistic 3D environments

---

## Hardware

![](media/img/google-cardboard.png)
![](media/img/google-daydream.png)
![](media/img/oculus-rift.png)

HTC Vive

Samsung GearVR

---

## WebVR <!-- .element: style="text-transform: none" -->

Virtual reality in the browser, leveraging the existing Web platform

- Open
- Interconnected
- Instant

---

## A-Frame

A web framework for building virtual reality experiences with HTML.

```html
<a-scene>
  <a-box color="red" position="-1 0.5 -3" rotation="0 45 0"></a-box>
  <a-cylinder color="#FFC65D" position="1 0.75 -3" radius="0.5" height="1.5"></a-cylinder>
  <a-sphere color="#EF2D5E" position="0 1.25 -5" radius="1.25"></a-sphere>
  <a-plane color="#7BC8A4" rotation="-90 0 0" position="0 0 -4" width="4" height="4"></a-plane>
  <a-sky color="#ECECEC"></a-sky>
</a-scene>
```
