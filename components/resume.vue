<script setup>
const experience = ref(false);
const skills = ref(false);
const about = ref(false);
</script>
<template>
  <div class="resume-container" id="resume">
    <h1 data-aos="zoom-in"><span></span> blog <span></span></h1>
    <p>Find out all there is to know about me.</p>
    <div class="resume-wrapper">
      <div class="sidebar" data-aos="zoom-in">
        <h3>why me?</h3>
        <p>
          checkout my competence rating and skills that makes me best for your
          offer.
        </p>
        <nav>
          <button>about me</button> <button>experience</button
          ><button>tech skills</button><button>education</button>
        </nav>
      </div>
      <div class="resume-content">
        <skill />
        <!-- <experience /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resume-container {
  width: 100%;
  padding: 6vh 0;

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
  }

  .resume-wrapper {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 5vh auto;

    .sidebar {
      width: 30%;
      padding: 20px 10px;

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

      nav {
        width: 100%;

        button {
          width: 90%;
          height: 45px;
          border-radius: 3px;
          color: white;
          background: rgb(65, 64, 70);
          margin: 10px auto;
          text-transform: capitalize;

          &:hover {
            border-bottom: 3px solid rgb(0, 255, 157);
            background: rgb(44, 44, 44);
            color: mediumspringgreen;
          }
          &:first-child {
            background: rgb(0, 255, 157);
            color: rgb(22, 22, 22);
            font-weight: 600;
          }
        }
      }
    }

    .resume-content {
      width: 60%;
      padding: 20px 0;
    }

    @media screen and (max-width: 700px) {
      width: 100%;

      .sidebar {
        h3 {
          font-size: 16px;
          text-align: left;
        }

        p {
          font-size: 9px;
          padding: 2px;
        }

        nav button {
          font-size: 10px;
        }
      }
    }
  }
}
</style>