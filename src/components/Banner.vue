<template>

  <!-- Hero Banner -->
  <section
    class="hero-section relative w-full
    h-[55vh] md:h-[75vh]
    bg-cover bg-center
    flex items-center
    px-4 py-6 md:px-16
    overflow-hidden"
    style="background-image: url('https://i.pinimg.com/1200x/ce/fa/bb/cefabbcebea8d7e10f383ba5fd81ec98.jpg');"
  >

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-lg text-white">

      <p class="text-sm md:text-lg tracking-widest mb-2">
        NEW COLLECTION
      </p>

      <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Fashion <br />
        For Everyone
      </h1>

      <p class="text-sm md:text-lg text-gray-200 mb-6">
        Discover modern outfits with stylish and premium quality.
      </p>

      <!-- Buttons -->
      <div class="d-flex align-items-center gap-3">

        <!-- MEN -->
        <router-link
          :to="{
            path: '/menu',
            query: {
              gender: 'Men',
              section: 'New In',
              category: 'All'
            }
          }"
          class="btn btn-dark gender-btn"
        >
          Men
        </router-link>

        <!-- WOMEN -->
        <router-link
          :to="{
            path: '/menu',
            query: {
              gender: 'Women',
              section: 'New In',
              category: 'All'
            }
          }"
          class="btn btn-dark gender-btn women-btn"
        >
          Women
        </router-link>

      </div>

    </div>

  </section>

  <!-- BRAND SLIDER -->
  <div
    id="brandCarousel"
    class="carousel slide brand-section"
    data-bs-ride="carousel"
  >

    <div class="carousel-inner">

      <div class="carousel-item active">

        <div class="brand-wrapper">

          <div class="brand-card">ROUTINE</div>
          <div class="brand-card">TAG SPACE</div>
          <div class="brand-card">361°</div>
          <div class="brand-card">Pomelo.</div>
          <div class="brand-card">GATONI</div>
          <div class="brand-card">SISBURMA</div>
          <div class="brand-card">NIKE</div>
          <div class="brand-card">PUMA</div>

        </div>

      </div>

    </div>

  </div>

  <!-- Slider Banner -->
  <div class="banner">
    <div class="banner-img"></div>
  </div>

</template>

<script setup>
</script>

<style scoped>

/* HERO */
.hero-section{
  margin-top: 0;
}

/* BANNER */
.banner{
  width: 100%;
  padding: 10px;
}

/* Slider */
.banner-img{
  width: 100%;
  height: 220px;
  border-radius: 12px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  animation: slider 15s infinite;
}

/* Tablet */
@media (min-width: 768px){
  .banner-img{
    height: 400px;
  }
}

/* Desktop */
@media (min-width: 1024px){
  .banner-img{
    height: 550px;
  }
}

/* Animation */
@keyframes slider {

  0%{
    background-image: url("https://i.pinimg.com/1200x/c9/4b/80/c94b80778cc44b28a45fe4aea8415e52.jpg");
  }

  25%{
    background-image: url("https://i.pinimg.com/1200x/d0/49/6e/d0496e32cc248c9e59d0dc9589c8d0e6.jpg");
  }

  50%{
    background-image: url("https://i.pinimg.com/1200x/e5/de/e0/e5dee07399cece6e23146ad9af1554f5.jpg");
  }

  75%{
    background-image: url("https://i.pinimg.com/1200x/c8/2a/99/c82a991fbab532f23d1261fe6c171bd6.jpg");
  }

  100%{
    background-image: url("https://i.pinimg.com/1200x/c9/4b/80/c94b80778cc44b28a45fe4aea8415e52.jpg");
  }

}

/* =========================
   BRANDS
========================= */

.brand-section{
  width: 100%;
  background: white;
  padding: 24px 0;
}

/* Row */
.brand-wrapper{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  overflow-x: auto;
  padding: 0 12px;

  scrollbar-width: none;
}

.brand-wrapper::-webkit-scrollbar{
  display: none;
}

/* Card */
.brand-card{
  min-width: 180px;
  height: 58px;

  background: black;
  color: white;

  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;

  cursor: pointer;
  flex-shrink: 0;

  transition: 0.3s;
}

/* Hover */
.brand-card:hover{
  transform: translateY(-3px);
  opacity: 0.9;
}

/* BUTTON */
.gender-btn{
  min-width: 120px;
  height: 48px;

  border-radius: 999px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  transition: 0.3s;
}

.gender-btn:hover{
  transform: translateY(-2px);
}

/* Mobile */
@media(max-width:768px){

  .hero-section{
    height: 65vh;
    padding-top: 40px;
  }

  .brand-wrapper{
    justify-content: start;
  }

  .brand-card{
    min-width: 120px;
    height: 42px;
    font-size: 16px;
  }

  .gender-btn{
    min-width: 100px;
    height: 42px;
    font-size: 14px;
  }

}

</style>