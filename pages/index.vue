<template>
  <div class="landing-page">
    <div class="landing-page-content">
      <div class="landing-page-wrapper">
        <NuxtLayout name="page-header" />
        <section class="hero-section">
          <div class="hero-wrapper">
            <div class="hero-image">
              <div class="blur-wrapper"></div>
              <span class="animate-spin transition duration-1000"></span>
              <img src="~/assets/kcn.jpg" />
            </div>
            <div class="hero-div">
              <span class="visible-lg">Hello I'm</span>
              <span title="KUKWA CLOVIS NGONG" class="visible-sm">KCN</span>
              <p class="show-sm">
                I am a full stack web developer, graphic designer, a proficient
                pianist, guitarist, tech enthusiast, online facilitator...
              </p>
              <h1 class="capitalize">Kukwa Clovis.</h1>
              <p>
                I am a full stack web developer, graphic designer, a proficient
                pianist, guitarist, tech enthusiast, online facilitator...
              </p>
              <div class="links">
                <a
                  href="https://wa.link/ql83fq"
                  target="_blank"
                  title="Get to me on whatsapp"
                >
                  <i class="fa-brands fa-whatsapp"></i
                ></a>
                <a href="/" target="_blank" title="visit my linkedin handle"
                  ><i class="fa-brands fa-linkedin"></i
                ></a>
                <a
                  href="mailto:kcn.123.com@gmail.com"
                  target="_blank"
                  title="send me a mail"
                  ><i class="fa-solid fa-envelope"></i
                ></a>
                <a href="/" target="_blank" title="follow me on twitter">
                  <i class="fa-brands fa-twitter"></i
                ></a>
                <a href="/" target="_blank" title="follow me on facebook">
                  <i class="fa-brands fa-facebook"></i
                ></a>
              </div>
              <div class="hero-links">
                <button
                  title="Let me handle your job for you."
                  class="button relative inline-flex items-center justify-center focus:outline-none focus:ring-0 capitalize"
                >
                  hire me<i class="fa-solid fa-pen ml-2"></i>
                </button>
                <button
                  title="Let me handle your job for you."
                  class="button relative inline-flex items-center justify-center focus:outline-none focus:ring-0 capitalize"
                >
                  see my work<i class="fa-solid fa-pen ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="number-section">
          <div class="number-section-wrapper">
            <div class="item">
              <span class="number">3<sup>+</sup></span>
              <span class="detail">Years of Experience</span>
            </div>
            <div class="item">
              <span class="number">25<sup>+</sup></span>
              <span class="detail">projects</span>
            </div>
            <div class="item">
              <span class="number">4<sup>+</sup></span>
              <span class="detail">companies</span>
            </div>
            <div class="item">
              <span class="number">3<sup>+</sup></span>
              <span class="detail">colaborations</span>
            </div>
          </div>
        </section>
      </div>
    </div>

    <services />
    <resume />
    <work />
    <contact />
  </div>
</template>
     

<style lang="scss" scoped>
.landing-page {
  width: 100vw;
  height: fit-content;
  .landing-page-content {
    width: 100vw;
    height: fit-content;
  }

  .landing-page-wrapper {
    width: 75%;
    margin: auto;
    padding-top: 20vh;

    .hero-section {
      width: 100%;
      padding-top: 2vh;

      .hero-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;

        .hero-div {
          width: 55%;

          span {
            font-size: 35px;
            font-weight: bold;
            position: relative;

            &::before {
              content: "full stack web developer";
              position: absolute;
              top: -10px;
              left: 0;
              font-size: 9px;
              color: rgb(237, 237, 237);
              font-weight: 100;
            }
          }

          .visible-sm {
            display: none;
          }

          .show-sm {
            display: none;
          }

          h1 {
            position: relative;
            font-size: 55px;
            font-weight: 600;
            color: mediumspringgreen;
            background: linear-gradient(
              to right,
              mediumspringgreen,
              rgb(10, 170, 239)
            );
            background-clip: text;
            color: transparent;
            position: relative;

            &::before,
            &::after {
              content: "";
              width: 10px;
              height: 10px;
              border: 1px solid rgb(2, 95, 59);
              position: absolute;
              top: 0;
              left: 0;
              background: transparent;
              box-shadow: 0 0 300px 40px rgb(4, 161, 209);
              transform: rotateZ(60deg) rotateY(20deg);
              animation: display 5s alternate-reverse infinite linear forwards;
            }

            @keyframes display {
              25% {
                transform: translate(-100px);
                border-radius: 40px;
              }
              35% {
                transform: translateY(250px) rotate(55deg);
              }
              50% {
                transform: translate3d(-50px) rotateZ(45deg);
                border-radius: 100%;
              }
              65% {
                transform: translate3d(250px);
                border-radius: 40px;
              }
              75% {
                transform: translatex(250px) rotate(55deg);
              }
              80% {
                transform: matrix(50px) translateZ(-30px);
                border-radius: 100%;
              }
              90% {
                transform: matrix(-66deg) skew(30deg);
              }
              100% {
                transform: translate3d(-500px);
              }
            }

            @media screen and (max-width: 800px) {
              font-size: 45px;

              @media screen and (max-width: 390px) {
                font-size: 35px;
              }
            }
          }

          p {
            position: relative;
            font-size: 14px;
            line-height: 25px;
            font-weight: 100;
            padding: 10px 0;
          }

          .links {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            gap: 25px;
            margin: 20px auto;

            a {
              width: 35px;
              height: 35px;
              border-radius: 100%;
              border: 2px solid green;
              display: flex;
              justify-content: center;
              align-items: center;

              i {
                font-size: 12px;
                color: rgb(0, 255, 159);
              }
            }
          }
          .hero-links {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 30px;
            margin: 30px auto;
            position: relative;

            .button {
              font-size: 12px;
              min-width: 150px;
              height: 40px;
              padding: 5px 15px;
              border-radius: 5px;
              font-weight: 400;
              background: transparent;
              color: mediumspringgreen;
              border: 1px solid mediumspringgreen;

              &:last-child {
                background: mediumspringgreen;
                border: none;
                color: black;
                font-weight: 600;
              }
            }
          }
        }

        .hero-image {
          width: 320px;
          height: 320px;
          display: flex;
          justify-content: flex-start;
          border-radius: 100%;
          border: 7px dotted rgba(0, 255, 157, 0.849);
          overflow: hidden;
          border-style: groove;
          box-shadow: 0px 0px 160px 3px rgb(0, 255, 159);
          position: relative;

          .blur-wrapper {
            display: none;
          }

          span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            border: 7px solid rgb(0, 255, 159);
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        @media screen and (max-width: 768px) {
          position: relative;
          justify-content: flex-end;
          .hero-div {
            width: 80%;
            position: relative;

            h1 {
              font-weight: 700;
            }

            span {
              font-size: 29px;
              font-weight: 200;
            }

            p {
              font-weight: 300;
              word-spacing: 5px;
            }

            @media screen and (max-width: 550px) {
              width: 95%;
              margin: auto;

              span {
                text-align: center;
                display: block;
                margin: auto;
                width: fit-content;
              }
              .visible-lg {
                display: none;
              }

              .visible-sm {
                display: block;
                padding: 0 10px;
                font-weight: 700;
                font-size: 45px;
                font-family: "Poppins", sans-serif;
              }

              h1,
              p {
                text-align: center;
                visibility: hidden;
                margin: 4vh auto;
              }

              .show-sm {
                visibility: visible;
                font-size: 11px;
                margin: 2px auto;
                display: block;
                width: 95%;
              }

              .links,
              .hero-links {
                justify-content: center;

                .button {
                  min-width: 100px;
                  font-size: 10px;
                }
              }
            }
          }
          .hero-image {
            position: absolute;
            right: 0;
            top: auto;

            .blur-wrapper {
              display: block;
              opacity: 0.5;
            }

            @media screen and (max-width: 550px) {
              right: 10%;

              @media screen and (max-width: 420px) {
                right: auto;
              }
            }
          }
        }
      }
    }

    .number-section {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .number-section-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin: 30px auto;

        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 3px;

          .number {
            font-size: 35px;
            font-weight: 500;
          }
          .detail {
            font-size: 11px;
          }

          @media screen and (max-width: 570px) {
            .number {
              font-size: 20px;
            }
            .detail {
              font-size: 9px;
            }

            @media screen and (max-width: 400px) {
              .number {
                font-size: 15px;
              }

              .detail {
                font-size: 7px;
              }
            }
          }
        }

        @media screen and (max-width: 570px) {
          gap: 10px;

          @media screen and (max-width: 320px) {
            flex-wrap: wrap;
          }
        }
      }
    }

    @media screen and (max-width: 950px) {
      width: 90%;
    }
  }
}
</style>
