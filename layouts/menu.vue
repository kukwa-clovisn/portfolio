<script setup>
const menuState = useMenuState();
</script>
<template>
  <div
    :class="[{ active: menuState }, { inactive: !menuState }, 'menu-container']"
  >
    <div class="blur-wrapper" @click="($event) => (menuState = false)"></div>
    <div
      :class="[
        { 'is-active': menuState },
        { inactive: !menuState },
        'menu-wrapper',
      ]"
    >
      <button class="close" @click="($event) => (menuState = false)">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="menu-header">
        <div class="logo">
          <img
            @click="($event) => navigateTo('/')"
            src="~/assets/kcn.jpg"
            alt=""
          />
        </div>
        <p>have a project in mind?</p>
        <button
          class="appointment"
          @click="
            ($event) => {
              navigateTo('/appointment'), (menuState = false);
            }
          "
        >
          Hire me
        </button>
      </div>

      <div class="services">
        <h2>Browse our services</h2>
        <div class="service-wrapper">
          <a href="/" @click="($event) => (menuState = false)"
            >home <i class="fa-solid fa-arrow-right"></i
          ></a>
          <a href="/#blog" @click="($event) => (menuState = false)"
            >Blog <i class="fa-solid fa-arrow-right"></i
          ></a>
          <a href="/appointment" @click="($event) => (menuState = false)"
            >projects<i class="fa-solid fa-arrow-right"></i
          ></a>
          <a href="/#contacts" @click="($event) => (menuState = false)"
            >contacts <i class="fa-solid fa-arrow-right"></i
          ></a>
        </div>
        <hr />
        <h2>join Training session</h2>
        <div class="service-wrapper">
          <a href="/signin" @click="($event) => (menuState = false)"
            >signin<i class="fa-solid fa-arrow-right"></i
          ></a>
        </div>
        <h2>Connect with me:</h2>
        <div class="media-wrapper">
          <a href="tel:+237682449347" class="link" title="Give me a call"
            ><i class="fa-solid fa-phone"></i
          ></a>
          <a
            href="https://wa.link/ql83fq"
            class="link"
            title="Chat me on whatsapp"
            ><i class="fa-brands fa-whatsapp"></i
          ></a>
          <a
            href="https://tr.ee/aviBLWXJ45"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            ><i class="fa-brands fa-facebook" title="Follow me on facebook"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .blur-wrapper {
    background: rgb(44, 44, 44);
    opacity: 0.7;
    cursor: pointer;
  }

  .menu-wrapper {
    width: 28vw;
    height: 100vh;
    background: rgb(28, 27, 33);
    position: relative;
    padding-left: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .close {
      width: 100px;
      height: 40px;
      position: absolute;
      top: 2%;
      right: 3%;
      border: none;
      background: transparent;
      font-size: 25px;
      color: rgb(237, 236, 236);

      i {
        color: white;
      }

      &:hover {
        transform: scale(1.2) rotateZ(-180deg);
        color: rgb(217, 144, 7);
      }
    }

    .menu-header {
      width: 95%;
      height: 35vh;
      padding-top: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
      border-bottom: 2px solid mediumspringgreen;

      .logo {
        width: 70px;
        height: 70px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }

      p {
        font-size: 12px;
        text-align: center;
        color: rgb(252, 249, 242);

        @media screen and (max-width: 400px) {
          margin: 3px 0;
        }
      }

      .appointment {
        border: none;
        background: mediumspringgreen;
        color: rgb(0, 15, 12);
        width: 80%;
        height: 45px;
        font-weight: 500;
        text-transform: uppercase;
        border-radius: 4px;
        overflow: hidden;
        position: relative;

        &:hover {
          transform: scale(0.9);
        }

        @media screen and (max-width: 1000px) {
          width: 90%;
        }
      }

      @media screen and (max-width: 1000px) {
        height: 36vh;
      }
    }

    .services {
      width: 100%;
      height: 65vh;
      padding: 10px 0 20px 0;
      overflow: hidden;
      overflow-y: scroll;
      background: rgb(28, 27, 33);

      h2 {
        padding: 10px 0;
        text-transform: uppercase;
        text-align: left;
        color: mediumspringgreen;
        font-size: 15px;
        @media screen and (max-width: 1000px) {
          font-size: 17px;
          padding: 3px 0;
          padding-left: 10px;
        }
      }

      .service-wrapper {
        width: 100%;
        height: fit-content;

        a {
          display: block;
          width: 100%;
          height: fit-content;
          font-size: 12px;
          text-decoration: none;
          text-transform: capitalize;
          text-align: left;
          padding: 10px 15px;
          color: white;

          i {
            margin-left: 5px;
            visibility: hidden;
            color: white;
          }

          &:hover {
            color: mediumspringgreen;

            i {
              visibility: visible;
            }
          }
        }
      }

      .media-wrapper {
        width: 90%;
        height: fit-content;
        display: flex;
        margin: 5px auto;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;

        .link {
          width: 50px;
          height: 50px;
          border-radius: 100%;
          background: rgb(1, 177, 110);
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;

          i {
            color: white;
            font-size: 20px;
          }
        }
      }

      @media screen and (max-width: 1000px) {
        height: 64vh;
      }
    }

    @media screen and (max-width: 1000px) {
      width: 40vw;

      @media screen and (max-width: 790px) {
        width: 50vw;

        @media screen and (max-width: 610px) {
          width: 100%;
        }
      }
    }
  }

  .menu-wrapper.is-active {
    animation: menu_active 0.5s 1 linear alternate forwards;
  }
  .menu-wrapper.inactive {
    animation: menu_inactive 0.5s linear alternate forwards;
  }
}
.menu-container.inactive {
  animation: menu_inactive 0.5s linear alternate forwards;

  .blur-wrapper {
    animation: disappear 0.4s linear alternate forwards;
  }
}

@keyframes menu_active {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes menu_inactive {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-200%);
    display: none;
  }
}
</style>
