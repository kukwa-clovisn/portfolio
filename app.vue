<script setup>
useHead({
  title: "Kukwa Clovis Ngong",
  viewport: "width:device-width, initial-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content:
        "  I am a full stack web developer, graphic designer,a proficient pianist, guitarist, tech enthusiast, online facilitator...",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/kcn.jpg",
    },
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      rel: "stylesheet",
      integrity:
        "sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:wght@200;300;400;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
      rel: "stylesheet",
    },
  ],
});
</script>

<template>
  <main>
    <NuxtLayout />
    <NuxtPage />
  </main>
</template>
