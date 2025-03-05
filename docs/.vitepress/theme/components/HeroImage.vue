<template>
  <div class="cube-container">
    <div class="cube">
      <div class="face front">
        <img src="/images/cube_face.png" alt="Front Image" />
      </div>
      <div class="face right">
        <img src="/images/cube_face.png" alt="Right Image" />
      </div>
      <div class="face back">
        <img src="/images/cube_face.png" alt="Back Image" />
      </div>
      <div class="face left">
        <img src="/images/cube_face.png" alt="Left Image" />
      </div>
      <div class="face top">
        <img src="/images/cube_face.png" alt="Top Image" />
      </div>
      <div class="face bottom">
        <img src="/images/cube_face.png" alt="Bottom Image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cube-container {
  perspective: 600px;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.cube {
  width: 100px;
  height: 100px;

  position: relative;
  transform-style: preserve-3d;

  transform-origin: center center;

  animation: rotate 15s linear infinite;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;

  transform-origin: center center;
}

.face img {
  width: 100%;
  height: 100%;
  display: block;
}

.front {
  transform: translateZ(50px);
}

.back {
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  transform: rotateX(-90deg) translateZ(50px);
}

@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>
