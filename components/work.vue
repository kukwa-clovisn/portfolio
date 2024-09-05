<template>
  <div class="work-container" id="samples">
    <div class="work-wrapper">
      <h1 data-aos="zoom-in"><span></span> projects <span></span></h1>
      <p>checkout projects i've worked on and those ready for sale.</p>
      <carousel />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 60px;
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
  @media screen and (max-width: 580px) {
    font-size: 25px;

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
  }
}
p {
  font-size: 12px;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 9px;
  }
}
</style>