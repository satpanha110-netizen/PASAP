<template>
  <footer class="w-full bg-[#f5f5f5] py-8 px-4 md:px-10">

  <!-- Top -->
  <div
    class="grid grid-cols-2 md:grid-cols-5 gap-6 text-[12px] md:text-[13px] text-black"
  >

    <!-- Logo -->
    <div class="flex flex-col items-center md:items-start">
      <h3 class="font-bold text-base md:text-lg mb-2">FUSE APP</h3>

      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=fuse"
        class="w-[70px] md:w-[90px]"
      />
    </div>

    <!-- Loyalty -->
    <div>
      <h3 class="font-bold text-base md:text-lg mb-2">LOYALTY</h3>

      <div class="space-y-1">
        <p>♡ Membership & Benefits</p>
      </div>
    </div>

    <!-- Follow -->
    <div>
      <h3 class="font-bold text-base md:text-lg mb-2">FOLLOW US</h3>

      <div class="space-y-1">
        <h6><i class="bi bi-facebook"></i> Facebook</h6>
        <h6><i class="bi bi-instagram"></i> Instagram</h6>
        <h6><i class="bi bi-tiktok"></i> TikTok</h6>
        <h6><i class="bi bi-youtube"></i> Youtube</h6>
      </div>
    </div>

    <!-- Customer -->
    <div>
      <h3 class="font-bold text-base md:text-lg mb-2">
        CUSTOMER SERVICES
      </h3>

      <div class="space-y-1">
        <h6>❓ FAQs & guides</h6>
        <h6>📍 Find a store</h6>
        <h6>🛡 Privacy Policy</h6>
      </div>
    </div>

    <!-- Contact -->
    <div>
      <h3 class="font-bold text-base md:text-lg mb-2">CONTACT US</h3>

      <div class="space-y-1">
        <h6 class="break-all">📧 customer.care@fusekh.com</h6>
        <h6>📞 (+855) 085 330 330</h6>
        <h6>✈ Telegram</h6>
      </div>
    </div>
  </div>

  <!-- Payment -->
  <div class="mt-8">
    <h4 class="font-bold text-sm md:text-base mb-3">
      WE ACCEPT
    </h4>

    <div class="flex flex-wrap gap-2">
      <img
        src="../assets/image.png"
        class="w-[45px] h-[28px] object-contain bg-white p-1 rounded"
      />

      <img
        src="https://i.pinimg.com/736x/15/53/de/1553de5b3e7ae7457fea9154a3f0f1c5.jpg"
        class="w-[45px] h-[28px] object-contain bg-white p-1 rounded"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
        class="w-[45px] h-[28px] object-contain bg-white p-1 rounded"
      />
    </div>
  </div>
  <!-- Bottom -->
  <hr class="mt-8 border-gray-300">

</footer>
</template>

<script>
export default {

}
</script>

<style>

</style>