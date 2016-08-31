<!-- .slide: class="slide__title" data-background-video="media/video/aframe-logo.mp4" data-background-video-loop="true" -->

<div class="talk-title">
  <h1>A-Frame</h1>
  <h2>Building VR on the Web</h2>
</div>

@you / 01 January 2016 / San Francisco, CA  <!-- .element: class="talk-info" -->

------

<!-- .slide: data-autoslide="5000" data-background-video="media/video/virtualreality.mp4" data-background-video-loop="true" data-background-video-muted="true" -->

# Virtual Reality  <!-- .element: data-autoslide="0" class="fragment fade-out" -->

<!-- Notes -->
- Technology that simulates physical presence in interactive and realistic 3D
  environments
- Next platform. From PCs -> Smartphones -> VR
- Change how we work + play + communicate digitally
- Digi-Capital forecasts $20B VR market by 2020, half Asia
- Tell your stories about VR (e.g., I hit someone on the head while playing Fruit Ninja)

---

## Hardware

<div class="image-row">
  <div><img data-src="media/img/google-cardboard.png"></div>
  <div><img data-src="media/img/google-daydream.png"></div>
  <div><img data-src="media/img/samsung-gearvr.png"></div>
</div>

<div class="image-row">
  <div><img data-src="media/img/oculus-rift.png"></div>
  <div><img data-src="media/img/playstation-vr.png"></div>
  <div><img data-src="media/img/htc-vive.png"></div>
</div>

<!-- Notes -->
- Free to $899
- Tethered and untethered
- Smartphone, gaming consoles, and PCs
- Positional tracking vs. rotational only
- Controllers (3DoF vs. fully tracked) vs. headset only
- Inside-out vs. outside-in tracking systems
- **HTC Vive** currently the most compelling

---

## Friction of VR Ecosystems

<div class="captioned-image-row">
  <div>
    <img data-src="media/img/gatekeeper.png">
    <i>Gatekeepers</i>
  </div>
  <div>
    <img data-src="media/img/downloads-installs.png">
    <i>Installs</i>
  </div>
  <div>
    <img data-src="media/img/closed-door.png">
    <i>Closed</i>
  </div>
</div>

<!-- Notes -->
- App stores control approval/distribution, can take down content, single points of failure
- Users have to go through downloads/installs
- Proprietary tech (Unity/Unreal), steep learning curve, fragmentation,
  cross-compat issues, siloed experiences

------

# WebVR

An open virtual reality platform with the advantages of **the Web**

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

<!-- Notes -->
- Anyone can publish, open source, open standards
- Traverse from world to world, not siloed experiences
- Click a link, immediately get into an experience, easily sharable via links,
  great for long tail bite-sized experiences

---

<img class="stretch" data-src="media/img/webvr.png">

Standard browser APIs that enable WebGL rendering to headsets and access to VR
sensors
https://w3c.github.io/webvr/

<!-- Notes -->
- Working W3C community group
- Initial WebVR API by Mozilla (Vlad V.)
- Mozilla, Google, Samsung, Microsoft, community currently drafting WebVR 1.0 API
- Optimized rendering path to headsets, 90fps+
- Access position and rotation (pose) data

---

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

<!-- Notes -->
- Browser support
- Firefox + Chrome WebVR 1.0 hits release channels by early 2017
- Firefox Nightly: first WebVR browser
- Chromium: custom Chromium builds by Brandon Jones
- Samsung: GearVR browser, with a flag
- Mobile Polyfill: use device motion/orientation sensors to polyfill on smartphones

---

<!-- .slide: data-background="media/img/metaverse.png" -->

## Metaverse

---

<!-- .slide: data-background-video="media/video/boilerplate.mp4" -->

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

<!-- Notes -->
- Too difficult to create WebVR experiences
- Obstacle if doing small prototypes and experiments
- Boilerplate needs updating with new versions of WebVR, three.js, and
  handle cross-browser and cross-platform compatibility

---

<!-- .slide: data-transition="concave" -->

```html
<a-scene></a-scene>
```

<!-- Notes -->
- "What if we could encapsulate all that boilerplate to just one line of HTML?"
- Quickly go from idea to prototype without hassle

---

```js
// Box in three.js
var geometry = new THREE.BoxGeometry(1, 2, 3);
var material = new THREE.MeshStandardMaterial({color: 'red'});
var box = new THREE.Mesh(geometry, material);
box.position.set(10, 0, 10);
scene.add(box);
```

<!-- Notes -->
- Creating the simplest object in vanilla three.js
- Takes five lines and three variables

---

<!-- .slide: data-transition="concave" -->

```html
<a-box color="red" position="10 0 10"></a-box>
```

<!-- Notes -->
- "What if we could encapsulate objects into a single lines of HTML?"
- Quickly build scenes without worry

------

<!-- .slide: data-background="media/img/aframe-rendered-full.png" -->

# A-Frame

A web framework for building virtual reality experiences with HTML

<!-- Notes -->
- A-Frame launched December 2015 by the Mozilla VR team
- Make it easy for anyone to create VR content
- Further democratize the dark arts of graphics
- Enable web developers
- Prototype and experiment faster
- A vehicle to kickstart WebVR ecosystem

---

## Hello World

```html
<a-scene>
  <a-box color="#4CC3D9" position="-1 0.5 -3" rotation="0 45 0"></a-box>
  <a-cylinder color="#FFC65D" position="1 0.75 -3" radius="0.5" height="1.5"></a-cylinder>
  <a-sphere color="#EF2D5E" position="0 1.25 -5" radius="1.25"></a-sphere>
  <a-plane color="#7BC8A4" rotation="-90 0 0" position="0 0 -4" width="4" height="4"></a-plane>
  <a-sky color="#ECECEC"></a-sky>
</a-scene>
```

<!-- Notes -->
- Parsable: HTML arguably most accessible language in computing
- Declarative: visual representation of scene graph, fully represents state
- Encapsulated: copy-and-paste HTML anywhere else and still work, no variables

---

## Hello World

<div data-aframe-scene="scenes/hello-world.html"></div>

<!-- Notes -->
- Supports desktop, Android, iOS, Samsung Gear VR, Oculus Rift, HTC Vive
- As web technology, we can embed within slides
- And view source in DOM inspector and change values live
- Can go fullscreen, would go into VR if a headset was connected
- Can view on mobile if people go to aframe.io

---

## Room Scale

<!-- .slide: data-background-video="media/video/roomscale.mp4" -->

<!-- Notes -->
- Supports HTC Vive
- Walk around, paint, use your hands

------

# Entity-Component-System

<!-- .slide: class="dark-text" data-background="media/img/entity-component-system.png" data-background-size="contain" -->

<!-- Notes -->
- Pattern popular in game development, used in game engines like Unity
- All objects in scene are **entities** that inherently do nothing. Plug in
  **components** to attach appearance / behavior / functionality
- Minecraft analogy: all blocks are entities, mix-and-match components to
  create different kinds of blocks (appearance, physic, behavior, sound, strength)
- Favors composition over inheritance
- Grants 100% extensibility, maintain access to JS / three.js / WebGL

---

<!-- .slide: data-transition="slide-in none" -->

## Composing an Entity

```html
<a-entity></a-entity>
```

<!-- Notes -->
- A-Frame invented declarative form of entity-component-system using HTML
- Start with an `<a-entity>`
- By itself, has no appearance, behavior, functionality
- Plug in components to add appearance, behavior, functionality

---

<!-- .slide: data-transition="none" -->

## Composing an Entity

```html
<a-entity
  audio-visualizer="src: #rickroll-mp3; smoothingTimeConstant: 0.9">
```

<!-- Notes -->
- Attach component via HTML attribute
- `audio-visualizer` component hooks up with Web Audio API's AnalyserNode, specify audio
- Component can consist of multiple properties
- Use syntax similar to CSS styles to configure components
- Analogy of CSS styling DOM elements, and components configuring entities

---

<!-- .slide: data-transition="none" -->

## Composing an Entity

```html
<a-entity
  audio-visualizer="src: #rickroll-mp3; smoothingTimeConstant: 0.9"
  audio-visualizer-scale="max: 50; multiplier: 0.06">
```

<!-- Notes -->
- `audio-visualizer-scale` component scales children based on frequency data
- Using data set up by `audio-visualizer`
- Need to generate children

---

<!-- .slide: data-transition="none" -->

## Composing an Entity

```html
<a-entity
  audio-visualizer="src: #rickroll-mp3; smoothingTimeConstant: 0.9"
  audio-visualizer-scale="max: 50; multiplier: 0.06"
  entity-generator="mixin: bar; num: 256">
```

<!-- Notes -->
- `entity-generator` component creates a number of entities, defined by mixins, as children
- Create 256 bars that will be scaled by `audio-visualizer-scale`

---

## Composing an Entity

```html
<a-mixin
  id="bar"
  geometry="primitive: box"
  material="color: black"
  color-via-scale-y="from: 10 60 10; to: 180 255 180; maxScale: 15">

<a-entity
  audio-visualizer="src: #rickroll-mp3; smoothingTimeConstant: 0.9"
  audio-visualizer-scale="max: 50; multiplier: 0.06"
  entity-generator="mixin: bar; num: 256">
```

<!-- Notes -->
- Mixins are reusable groups of components, similar to CSS classes
- Create mixin for box that maps its color to its height
- `entity-generator` component creates 256 of these bars

---

## Composing an Entity

<!-- .slide: data-transition="none" -->

```html
<a-mixin
  id="bar"
  geometry="primitive: box"
  material="color: black"
  color-via-scale-y="from: 10 60 10; to: 180 255 180; maxScale: 15">

<a-entity
  audio-visualizer="src: #rickroll-mp3; smoothingTimeConstant: 0.9"
  audio-visualizer-scale="max: 50; multiplier: 0.06"
  entity-generator="mixin: bar; num: 256"
  layout="type: circle; radius: 10">
```

<!-- Notes -->
- `layout` component to lay out all the bars in a circle, 10-meter radius

---

## Composing an Entity

<!-- .slide: data-transition="none" -->

```html
<a-mixin
  id="bar"
  geometry="primitive: box"
  material="color: black"
  color-via-scale-y="from: 10 60 10; to: 180 255 180; maxScale: 15">

<a-entity
  audio-visualizer="src: #rickroll-mp3; smoothingTimeConstant: 0.9"
  audio-visualizer-scale="max: 50; multiplier: 0.06"
  entity-generator="mixin: bar; num: 256"
  layout="type: circle; radius: 10"
  rotation="0 180 0">
```

<!-- Notes -->
- Rotate by 180&deg; to face the more dynamic range of the spectrum

---

## Baking the Entity

```html
<a-entity
  audio-visualizer="src: #rickroll-mp3; smoothingTimeConstant: 0.9"
  audio-visualizer-scale="max: 50; multiplier: 0.06"
  entity-generator="mixin: bar; num: 256"
  layout="type: circle; radius: 10"
  rotation="0 180 0">
```

```html
<a-audio-spectrum-visualizer src="#rickroll-mp3" num-bars="256" radius="10">
```

<!-- Notes -->
- Use `AFRAME.registerPrimitive` to create prefabs or templates of pre-composed
  configuration of components
- Define default components and component properties
- Create mappings between component properties and HTML attributes

---

## Structure of a Component

```js
AFRAME.registerComponent('position', {
  schema: {type: 'vec3'},

  // init: function () { },

  update: function () {
    var el = this.el;
    var data = this.data;
    var object3D = el.object3D;

    object3D.position.set(data.x, data.y, data.z);
  },

  // remove: function () { },

  // tick: function (t, dt) { }
});
```

<!-- Notes -->
- `schema`: defines how data is parsed from HTML
- `init`: run on component attached, similar to `componentDidMount`
- `update`: run on component data update, similar to `componentWillReceiveProps`
- `remove`: run on component detached, similar to `componentWillUnmount`
- `tick`: run on every frame, continuous
- `el`: reference to entity element
- `data`: component data parsed from HTML
- `object3D`: three.js object

---

## Writing a Component

```js
AFRAME.registerComponent('crazy-position', {
  schema: {
    min: {type: 'vec3'},
    max: {type: 'vec3'}
  },

  tick: function () {
    var data = this.data;
    var randomPosition = __getRandomPosition(min, max);
    this.el.object3D.position.copy(randomPosition);
  }
});
```

```html
<a-sphere crazy-position="min: -1 -1 -1; max: 1 1 1"></a-sphere>
```

<!-- Notes -->
- Component that sets random position on each tick
- Can be reused and composed with other components for variety of situations
- Can be shared to other developers

------

# Integration

```js
var scene = document.querySelector('a-scene');
var sphere = document.createElement('a-sphere');
sphere.setAttribute('radius', 2);
sphere.addEventListener('click', function () {
  this.setAttribute('color', 'red');
});
scene.appendChild(sphere);
```

<!-- Notes -->
- Fully controllable through JavaScript and DOM APIs

---

<div class="captioned-image-row">
  <div>
    <img data-src="media/img/d3.png">
    <i>d3.js</i>
  </div>
  <div>
    <img data-src="media/img/vue.png">
    <i>vue.js</i>
  </div>
  <div>
    <img data-src="media/img/react.png">
    <i>React & Redux</i>
  </div>
</div>

<!-- Notes -->
- Based on DOM
- Interoperates with existing libraries and frameworks

---

<div class="captioned-image-row">
  <div>
    <img data-src="media/img/magicavoxel-circle.png">
    <i>MagicaVoxel</i>
  </div>
  <div>
    <img data-src="media/img/blender.png">
    <i>Blender</i>
  </div>
  <div>
    <img data-src="media/img/maya.png">
    <i>Maya</i>
  </div>
</div>

<!-- Notes -->
- Works together with 3D tools
- Create models and scenes to place into A-Frame

---

## With MagicaVoxel

<img data-src="media/img/magicavoxel.png">

<!-- Notes -->
- Can create scenes with MagicaVoxel
- Super easy tool, drop blocks like Minecraft
- Then export to A-Frame

---

## With MagicaVoxel

<div data-aframe-scene="scenes/magicavoxel.html"></div>

<!-- Notes -->
- MagicaVoxel model in A-Frame, mostly a line of HTML
- Show off the A-Frame Inspector by pressing `<ctrl> + <alt> + i`

------

# Ecosystem

<div class="captioned-image-row">
  <div>
    <img data-src="media/img/github.png">
    <i>60 contributors, 3000 Stargazers</i>
  </div>
  <div>
    <img data-src="media/img/slack.png">
    <i>1400 members on Slack</i>
  </div>
  <div>
    <img data-src="media/img/scene-collage-circle.png">
    <i>100s of featured projects</i>
  </div>
</div>

<!-- Notes -->

---

<!-- .slide: data-background="media/img/standard-components.png" data-background-size="contain" -->

<!-- Notes -->
- Components that ship with A-Frame
- Bare bones, allow ecosystem to enable features

---

<!-- .slide: data-background="media/img/community-components.png" data-background-size="contain" -->

<!-- Notes -->
- Components built by the community and ecosystem
- Developers enabling others
- Components can be consumed without programming knowledge

---

## Scenes by Organizations

- [360syria.com](https://360syria.com) (Amnesty International UK)
- [apps.npr.org/rockymountain-vr](http://apps.npr.org/rockymountain-vr/)
- [gurivr.com](https://gurivr.com/) (The Coral Project)
- [washingtonpost.com/graphics/business/mars-journey](https://www.washingtonpost.com/graphics/business/mars-journey/)
- [shopifyvr.myshopify.com](https://shopifyvr.myshopify.com/)

<!-- Notes -->
- Journalism, e-commerce, and real estate were popular production use cases

---

# Augmented Reality

<video class="stretch" data-src="media/video/argon.mp4" data-autoplay loop></video>

<!-- Notes -->
- Not just a framework for VR, can also handle 3D and AR as well
- Prototype by Blair MacIntyre from Georgia Tech with Argon Browser
- Most predict AR to be even bigger market than VR

------

<!-- .slide: class="slide__questions" data-background="media/img/scene-collage.jpg" style="background-color: rgba(30, 30, 30, 0.3)" -->

# Questions?  <!-- .element: style="color: #FFF" -->

- Try it out [aframe.io](https://aframe.io)
- Join us on Slack [aframevr-slack.herokuapp.com](https://aframevr-slack.herokuapp.com/)
- Follow us [@aframevr](https://twitter.com/aframevr)

<!-- Notes -->
- Homepage which has examples, documentation, blog
- Slack extremely active, core team responsive, over 1300 people
- Keep up to date by following on Twitter
