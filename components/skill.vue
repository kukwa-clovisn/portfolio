<template>
  <div class="skill-container" data-aos="zoom-out">
    <h3>my skills</h3>
    <p>
      i've been priviledged to work on big projects and get experience on many
      different fields.
    </p>
    <div class="content">
      <div class="item">
        <img src="~/assets/kcn.jpg" alt="" />
      </div>
      <div class="item">
        <img src="~/assets/kcn.jpg" alt="" />
      </div>
      <div class="item">
        <img src="~/assets/kcn.jpg" alt="" />
      </div>
      <div class="item">
        <img src="~/assets/kcn.jpg" alt="" />
      </div>
      <div class="item">
        <img src="~/assets/kcn.jpg" alt="" />
      </div>
      <div class="item">
        <img src="~/assets/kcn.jpg" alt="" />
      </div>
      <div class="item">
        <img src="~/assets/kcn.jpg" alt="" />
      </div>
      <div class="item">
        <img src="~/assets/kcn.jpg" alt="" />
      </div>
      <div class="item">
        <img src="~/assets/kcn.jpg" alt="" />
      </div>
      <div class="item">
        <img src="~/assets/kcn.jpg" alt="" />
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.skill-container {
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
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    padding-top: 25px;

    .item {
      width: 90px;
      height: 90px;
      border-radius: 5px;
      overflow: hidden;
      background: rgb(65, 64, 70);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgb(67, 67, 67);

      i {
        font-size: 20px;
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>