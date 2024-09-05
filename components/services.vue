<template>
  <div class="services-container" id="services">
    <h1 data-aos="zoom-in"><span></span> things i do <span></span></h1>
    <p class="desc text-center m-auto block mb-6">
      I help businesses connect with audiences, delivering greater brand
      engagement through innovative digital solutions.
    </p>
    <div class="services-wrapper">
      <div class="service" data-aos="slide-up">
        <div class="count">
          <span>01</span>
          <div class="icon"><i class="fa-solid fa-arrow-up"></i></div>
        </div>
        <h2 class="service-name">web developer</h2>
        <p>
          i build websites from small to large scale enterprises, personal
          websites etc and also offer tutoring(online and onsite) on web
          development.
        </p>
      </div>
      <div class="service" data-aos="slide-up">
        <div class="count">
          <span>02</span>
          <div class="icon"><i class="fa-solid fa-arrow-up"></i></div>
        </div>
        <h2 class="service-name">web designer</h2>
        <p>i desing and customize ready to build websites.</p>
      </div>
      <div class="service" data-aos="slide-up">
        <div class="count">
          <span>03</span>
          <div class="icon"><i class="fa-solid fa-arrow-up"></i></div>
        </div>
        <h2 class="service-name">run ads & SEO</h2>
        <p>
          i run quality and professional ads spanning from
          <span>facebook</span>, <span>whatsapp</span>, <span>google</span>,
          <span>telegram</span>, <span>instagram</span> ads etc
        </p>
      </div>
      <div class="service" data-aos="slide-up">
        <div class="count">
          <span>04</span>
          <div class="icon"><i class="fa-solid fa-arrow-up"></i></div>
        </div>
        <h2 class="service-name">pianist/gutarist</h2>
        <p>
          As a pianist and guitarist, i cover programs and occasions as well as
          offer tutorials on how to play musical instruments.
        </p>
      </div>
      <div class="service" data-aos="slide-up">
        <div class="count">
          <span>01</span>
          <div class="icon"><i class="fa-solid fa-arrow-up"></i></div>
        </div>
        <h2 class="service-name">graphic design & printing</h2>
        <p>
          i design from flyers to posters to banners and also do printing from
          t-shirts to utencils, equipments, attires etc.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss"  scoped>
.services-container {
  width: 100%;
  height: fit-content;
  padding: 5vh 0;

  h1 {
    font-size: 30px;
    text-align: center;
    text-transform: capitalize;
    color: rgb(0, 255, 157);
    font-weight: bold;
    padding: 20px;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    span {
      width: 100px;
      height: 2px;
      border-radius: 30px;
      background: rgb(0, 255, 157);
    }
  }

  .desc {
    width: 80%;
    margin: auto;
    margin-bottom: 60px;
    padding: 10px 20px;
  }

  .services-wrapper {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 60px 20px;
    flex-wrap: wrap;

    .service {
      width: 32%;
      height: 250px;
      border: 1px solid rgb(81, 81, 81);
      padding: 20px;
      border-radius: 10px;

      .count {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          font-size: 40px;
        }

        .icon {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          background: white;

          i {
            font-size: 24px;
            color: black;
          }
        }
      }
      h2 {
        font-size: 25px;
        text-transform: capitalize;
        text-align: left;
        color: white;
      }

      p {
        font-size: 12px;
        padding: 15px 0;
        line-height: 24px;
        text-align: left;
        font-family: Poppins, sans-serif;
      }

      &:hover {
        .count {
          span {
            color: rgb(0, 255, 159);
            font-weight: 400;
          }
          .icon {
            background: rgb(0, 255, 159);
          }
        }
        h2 {
          color: rgb(0, 255, 159);
          font-weight: 400;
        }
      }

      @media screen and (max-width: 1052px) {
        width: 47%;

        @media screen and (max-width: 640px) {
          .count i {
            font-size: 16px;
          }

          h2 {
            font-size: 17px;
          }

          p {
            font-size: 11px;
          }
        }

        @media screen and (max-width: 600px) {
          width: 90%;
          height: fit-content;
        }
      }
    }

    @media screen and (max-width: 640px) {
      gap: 20px;
      justify-content: center;
    }
  }
}
</style>