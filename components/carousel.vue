<script setup>
// importing images
import imgOne from "~/assets/website-template.png";
import imgtwo from "~/assets/website-template-2.png";
const dataArray = ref([
  {
    id: 1,
    title: "portfolio website",
    description:
      " a simple portfolio website to customize and use for anyone with any qualifications.",
    imgurl: imgtwo,
  },
  {
    id: 2,
    title: "Academy website",
    description:
      "A website for someone with an academy or someone who offers online tutoring.",
    imgurl: imgOne,
  },
  {
    id: 3,
    title: "Ecommerce website",
    description:
      "A website for any business man/woman who wants to take his/her business professionally",
    imgurl: imgtwo,
  },
]);
</script>

<template>
  <div class="carousel-container">
    <el-carousel :interval="5000" arrow="always" height="auto">
      <el-carousel-item v-for="(data, index) in dataArray" :key="data.id">
        <div class="carousel-wrapper">
          <div class="item">
            <div class="content">
              <span>0{{ index + 1 }}</span>
              <h2>{{ data.title }}</h2>
              <p>{{ data.description }}</p>
              <span class="line"></span>
              <div class="buttons">
                <button class="button">purchase website</button>
                <button class="button">place an order</button>
              </div>
            </div>
            <div class="image">
              <img :src="data.imgurl" alt="" />
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.carousel-container {
  width: 100%;
  height: fit-content;
  .el-carousel {
    background: transparent;
    height: fit-content;
    padding: 5vh 0;
    width: 90%;
    margin: 20px auto;
    button {
      background: white;

      i {
        color: black;
      }
    }

    .el-carousel__container {
      height: fit-content;
      position: relative;
      .el-carousel__item {
        background: transparent !important;
        height: fit-content;
        .carousel-wrapper {
          width: 90%;
          height: fit-content;
          margin: 20px auto;

          .item {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;

            .content {
              width: 45%;

              span {
                font-size: 50px;
              }

              h2 {
                font-size: 30px;
                text-transform: capitalize;
                text-align: left;
                font-weight: 600;
              }
              p {
                text-align: left;
                padding: 20px 0;
                font-weight: 200;
                font-size: 12px;
              }

              .line {
                width: 100%;
                height: 1px;
                background: rgb(0, 71, 44);
                display: block;
              }

              .buttons {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                gap: 20px;
                flex-wrap: wrap;
                button {
                  min-width: 170px;
                  height: 40px;
                  padding: 10px;
                  border-radius: 30px;
                  background: transparent;
                  border: 1px solid mediumspringgreen;
                  color: mediumspringgreen;
                  text-transform: capitalize;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 12px;
                  margin-top: 20px;

                  &:hover {
                    background: mediumspringgreen;
                    color: rgb(3, 14, 11);
                    font-weight: 500;
                  }

                  &:first-child {
                    border-color: white;
                    color: white;

                    &:hover {
                      background: white;
                      color: rgb(3, 8, 6);
                    }
                  }
                }
              }
            }

            .image {
              width: 50%;
              display: flex;
              justify-content: center;
              align-items: center;

              img {
                width: auto;
                height: 70vh;
                object-fit: contain;
                border-radius: 3px;
              }
            }

            @media screen and (max-width: 768px) {
              flex-direction: column-reverse;
              .content {
                width: 95%;

                .buttons {
                  button {
                    width: fit-content;
                    font-size: 9px;
                  }
                }
              }
              .image {
                width: 95%;
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 650px) {
      padding: 0;
    }
  }
}
</style>