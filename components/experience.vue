<template>
  <div class="experience-container" data-aos="zoom-out">
    <h3>my experience</h3>
    <p>
      i've been priviledged to work on big projects and get experience on many
      different fields.
    </p>
    <div class="content">
      <div class="item">
        <p>2022 - current</p>
        <h4>full stack developer</h4>

        <div>
          <span></span>
          advanced tech academy
        </div>
      </div>
      <div class="item">
        <p>2022 - 2023</p>
        <h4>backend developer</h4>

        <div>
          <span></span>
          advanced tech academy
        </div>
      </div>
      <div class="item">
        <p>2022 - 2023</p>
        <h4>fontend developer</h4>

        <div>
          <span></span>
          advanced tech academy
        </div>
      </div>
      <div class="item">
        <p>2022 - 2023</p>
        <h4>full stack developer</h4>

        <div>
          <span></span>
          advanced tech academy
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.experience-container {
  width: 100%;
  h3 {
    font-size: 30px;
    padding: 10px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: left;
  }
  p {
    font-size: 12px;
    padding: 10px;
    text-align: left;
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;

    .item {
      width: 45%;
      height: 150px;
      border-radius: 7px;
      background: rgb(44, 44, 44);
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-direction: column;
      padding: 20px;

      h4 {
        text-transform: capitalize;

        font-weight: 400;
        color: rgb(255, 255, 255);
      }

      p {
        font-size: 13px;
        color: mediumspringgreen;
        padding: 0;
      }

      div {
        width: 100%;
        border-top: 1px solid rgb(79, 79, 79);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 7px;
        padding-top: 10px;
        font-size: 11px;
        color: rgb(231, 231, 231);
        text-transform: uppercase;

        span {
          width: 7px;
          height: 7px;
          border-radius: 100%;
          background: mediumspringgreen;
        }
      }

      &:hover {
        background: rgb(65, 64, 70);
      }
    }
  }

  @media screen and (max-width: 700px) {
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }

    .content .item {
      h4 {
        font-size: 9px;
      }

      p {
        font-size: 8px;
      }

      div {
        font-size: 9px;
      }

      @media screen and (max-width: 560px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        height: fit-content;
        gap: 20px;

        div {
          width: 100%;
        }
      }
    }
  }
}
</style>