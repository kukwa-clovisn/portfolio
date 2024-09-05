<template>
  <div class="contact-container" id="contact">
    <h1 data-aos="zoom-in"><span></span> get in touch <span></span></h1>
    <p class="form-text text-center">
      Reach out to me lets do business together
    </p>
    <div class="contact-wrapper">
      <form>
        <div class="form-wrapper">
          <h2>let's work together!</h2>
          <p>Leave me a message let's work together!</p>
          <div class="form-inputs">
            <!-- <label for="username">Name:</label> -->
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Name..."
            />
            <!-- <label for="email">Email Address:</label> -->
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="enter Email address.."
            />
            <!-- <label for="number">Phone/Whatsapp Number:</label> -->
            <input
              type="tel"
              name="number"
              id="number"
              required
              placeholder="Enter Phone/Whatsapp number...."
            />
            <!-- <label for="message">Message:</label> -->
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="2"
              required
              placeholder="message..."
            ></textarea>
          </div>
          <button>send message</button>
        </div>
      </form>
      <nav>
        <div class="nav-link">
          <div class="nav-icon">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div class="nav-detail">
            <span>Phone / Whatsapp</span>
            <span>+237682449347</span>
          </div>
        </div>
        <div class="nav-link">
          <div class="nav-icon">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div class="nav-detail">
            <span>Email</span>
            <span>codingherald@gmail.com</span>
          </div>
        </div>
        <div class="nav-link">
          <div class="nav-icon">
            <i class="fa-solid fa-location"></i>
          </div>
          <div class="nav-detail">
            <span>Address</span>
            <span>Douala-Bonaberi, Cameroon.</span>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  width: 100%;
  height: fit-content;

  h1 {
    font-size: 50px;
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

  .form-text {
    @media screen and (max-width: 420px) {
      font-size: 11px;
    }
  }
  .contact-wrapper {
    width: 80%;
    margin: 9vh 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    form {
      width: 40%;
      height: fit-content;
      padding: 40px 20px;
      border: 1px solid rgb(54, 54, 54);
      border-radius: 5px;
      background: rgb(48, 48, 52);

      .form-wrapper {
        width: 95%;
        height: fit-content;
        margin: auto;

        h2 {
          text-align: left;
          font-size: 20px;
          color: mediumspringgreen;
          font-weight: 400;
          text-transform: capitalize;
        }

        p {
          text-align: left;
          font-size: 12px;
          padding: 10px 0;
        }

        .form-inputs {
          width: 100%;

          label {
            color: rgb(227, 227, 227);
            cursor: pointer;
            font-size: 13px;
          }

          input {
            width: 100%;
            height: 40px;
            outline: none;
            background: rgb(28, 27, 33);
            margin: 7px auto;
            border-radius: 2px;
            color: white;
            padding: 10px 20px;
            font-size: 12px;
          }
          textarea {
            width: 100%;
            height: 90px;
            font-size: 12px;
            outline: none;
            background: rgb(28, 27, 33);
            margin: 10px auto;
            border-radius: 5px;
            color: white;
            padding: 10px 20px;
          }
        }

        button {
          min-width: 170px;
          padding: 5px;
          background: mediumspringgreen;
          color: rgb(3, 9, 8);
          border-radius: 30px;
          font-weight: 500;
          text-transform: capitalize;
        }
      }
    }

    nav {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 30px;

      .nav-link {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;

        .nav-icon {
          width: 50px;
          height: 50px;
          border-radius: 5px;
          overflow: hidden;
          background: rgb(48, 48, 52);
          display: flex;
          justify-content: center;
          align-items: center;

          i {
            font-size: 20px;
            color: mediumspringgreen;
          }
        }
        .nav-detail {
          span {
            display: block;
            margin: 4px;
            font-size: 12px;
            color: rgb(234, 234, 234);

            &:last-child {
              font-size: 18px;
              color: white;
              font-weight: 500;
            }
          }
        }
      }
    }

    @media screen and (max-width: 900px) {
      width: 95%;

      form {
        width: 50%;
      }
      nav {
        width: 45%;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column-reverse;
        gap: 30px;

        form {
          width: 80%;

          @media screen and (max-width: 450px) {
            width: 100%;
            border-radius: 0px;
          }
        }
        nav {
          width: 90%;
          flex-direction: row;
          gap: 20px;
          flex-wrap: wrap;

          .nav-link {
            width: fit-content;

            .nav-icon {
              width: 35px;
              height: 35px;
              i {
                font-size: 16px;
              }
            }
            .nav-detail {
              span {
                font-size: 9px;

                &:last-child {
                  font-size: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>