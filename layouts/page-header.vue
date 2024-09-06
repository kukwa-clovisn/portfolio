
<script setup>
const stickyHeader = ref(false);
if (process.client) {
  window.addEventListener("scroll", () => {
    stickyHeader.value = true ? window.scrollY > 0 : false;
  });
}

const menuState = useMenuState();
</script>

<template>
  <header :class="[{ active: stickyHeader }]">
    <div class="header-wrapper">
      <nav class="name">
        <h1 @click="($event) => navigateTo('/')">
          coding<span>herald<span class="animate-ping">.</span></span>
        </h1>
      </nav>
      <nav class="links">
        <ul>
          <nuxt-link
            to="/#services"
            class="capitalize font-medium text-sm text-white"
            >blog</nuxt-link
          >

          <nuxt-link
            to="/#samples"
            class="capitalize font-medium text-sm text-white"
            >projects</nuxt-link
          >
          <nuxt-link
            to="/#contact"
            class="capitalize font-medium text-sm text-white"
            >contact</nuxt-link
          >
        </ul>
        <a
          href="https://wa.link/ql83fq"
          target="_blank"
          class="hire-me relative inline-flex items-center justify-center px-5 py-1 text-sm font-bold text-gray-900 transition-all duration-200 bg-green-700 font-pj rounded-3xl focus:outline-none transition hover:bg-teal-400 focus:ring-offset-2 hover:duration-700 focus:ring-teal-200 capitalize animate-bounce"
          >hire me</a
        >
        <button @click="($event) => (menuState = true)">
          <i class="fa-solid fa-bars"></i>
        </button>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 15vh;
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 1;

  .header-wrapper {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    .name {
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;

      span {
        color: rgb(0, 255, 157);
      }
    }

    .links {
      width: 75%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      ul {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 20px;

        a {
          text-decoration: none;
          font-size: 13px;
          padding: 5px;
          font-weight: 200;

          &:hover {
            width: fit-content;
            padding: 5px 0;
            border-bottom: 2px solid rgb(0, 255, 159);
            color: rgb(0, 255, 159);
          }
        }

        @media screen and (max-width: 550px) {
          display: none;
        }
      }
      .hire-me {
        background: rgb(0, 255, 159);
      }
      button {
        // display: none;
        padding: 10px;

        i {
          font-size: 30px;
        }

        @media screen and (max-width: 550px) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      @media screen and (max-width: 550px) {
        justify-content: space-evenly;
      }
    }
    @media screen and (max-width: 960px) {
      width: 90%;
    }
  }
}
header.active {
  background: rgb(28, 27, 33);
  height: 8vh;
}
</style>