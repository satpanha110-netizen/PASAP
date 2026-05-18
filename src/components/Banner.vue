<template>
  <div class="banner">
    <div class="banner-img"></div>
  </div>
</template>
<style>
.banner {
  width: 100%;
  padding: 3px;
}
/* Banner Image */
.banner .banner-img {
  width: 100%;
  height: 250px;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  background-image: url(https://i.pinimg.com/1200x/c9/4b/80/c94b80778cc44b28a45fe4aea8415e52.jpg);

  animation: animate 12s infinite ease-in-out;
}

/* Dark Overlay */
.banner .banner-img::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
}

/* Tablet */
@media (min-width: 768px) {
  .banner .banner-img {
    height: 450px;
  }
}
/* Desktop */
@media (min-width: 1024px) {
  .banner .banner-img {
    height: 550px;
  }
}
/* Animation */
@keyframes animate {
  0% {
    background-image: url(https://i.pinimg.com/1200x/c9/4b/80/c94b80778cc44b28a45fe4aea8415e52.jpg);
  }

  25% {
    background-image: url(https://i.pinimg.com/1200x/d0/49/6e/d0496e32cc248c9e59d0dc9589c8d0e6.jpg);
  }

  50% {
    background-image: url(https://i.pinimg.com/1200x/e5/de/e0/e5dee07399cece6e23146ad9af1554f5.jpg);
  }

  75% {
    background-image: url(https://i.pinimg.com/1200x/c8/2a/99/c82a991fbab532f23d1261fe6c171bd6.jpg);
  }

  100% {
    background-image: url(https://i.pinimg.com/1200x/c9/4b/80/c94b80778cc44b28a45fe4aea8415e52.jpg);
  }
}
</style>