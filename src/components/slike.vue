<template>
    <div class="app">
      <div class="app__body">
        <div
          class="app__body-carousel"
        >
          <transition
            :name="transitionName"
            mode="out-in"
          >
            <div
              :key="carouselNumber"
              class="slide"
            >
              <img
                :src="slideActive.img"
                class="slide__img"
                alt="image"
              >
              <span class="slide__text">
                {{ slideActive.text }}
              </span>
            </div>
          </transition>
          <div
            v-if="carouselNumber > 1"
            class="icon icon--left"
            @click="previousSlide"
          >
            <i
              class="fas fa-chevron-left"
            />
          </div>
          <div
            v-if="carouselNumber < carouselDatas.length"
            class="icon icon--right"
            @click="nextSlide"
          >
            <i
              class="fas fa-chevron-right"
            />
          </div>
          <div class="slider-dots">
            <div
              v-for="dot in carouselDatas.length"
              :key="dot"
              :class="'dot--' +dot "
              class="dot"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carouselNumber: 1,
        direction: 'next',
      };
    },
    computed: {
          carouselDatas() {
            return [
              {
                text: 'Sed ut perspiciatis',
                img: `https://www.president-professionnel.fr/wp-content/uploads/2021/08/eclair-pistache-fraise-800x600-1.png.webp`,
              },
              {
                text: 'dolor sit amet',
                 img: `http://sweetdelight.eu/wp-content/uploads/2022/07/blueberry-red-velvet-cake.png`,
              },
              {
                text: 'consectetur adipiscing elit',
                 img: `http://sweetdelight.eu/wp-content/uploads/2022/07/blueberry-red-velvet-cake.png`,
              },
              {
                text: 'sed do eiusmod',
                 img: `http://sweetdelight.eu/wp-content/uploads/2022/07/chill-out-cake.png`,
              },
            ]
          },
          slideActive() {
            return this.carouselDatas[this.carouselNumber - 1]
          },
          transitionName() {
            return `fade-${this.direction}`
          },
          ActiveDotCoordinate() {
            return `calc(${parseInt(100 * (this.carouselNumber - 1))}% + ${parseFloat(0.3 * (this.carouselNumber - 1))}rem)`;
          },
      },
      methods: {
          nextSlide() {
            this.direction = 'next'
            this.carouselNumber++
            this.handleNextDot();
          },
          previousSlide() {
            this.direction = 'prev'
            this.carouselNumber--
            this.handlePreviousDot();
          },
          handleNextDot() {
              document.querySelector('.dot--1').style.transform = `translateX(${this.ActiveDotCoordinate})`;
              document.querySelector(`.dot--${this.carouselNumber}`).style.transform = `translateX(calc(-100% - .3rem))`;
          },
          handlePreviousDot() {
            document.querySelector('.dot--1').style.transform = `translateX(${this.ActiveDotCoordinate})`;
            document.querySelector(`.dot--${this.carouselNumber + 1}`).style.transform = `translateX(0)`;
          },
      },
  };
  </script>
  
  <style lang="scss">
    body {
      margin: 0;
      width: 100vw;
      height: 100vh;
    }
    
    * {
      box-sizing: border-box;
    }
  .app {
     display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 1rem;
      overflow: auto;
    //   background-color: #333;
      font-family: Helvetica, Arial, sans-serif;
  
      &__body {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        // background-image: radial-gradient(circle at 50% -20.71%, #ffe1de 0, #ffd9d9 10%, #fed1d4 20%, #fbc8cf 30%, #f7bfcb 40%, #f2b5c8 50%, #ecabc6 60%, #e5a3c5 70%, #de9bc5 80%, #d595c6 90%, #cc90c8 100%);
       
    width: 100%;
  
    // height: 500px;
    align-content: center;
    justify-content: center;

  
        
      &-carousel {
        position: relative;
        padding: 1rem 1rem 0;
  
        .slide {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          padding-bottom: 2rem;
  
          &__img {
            margin-bottom: 1rem;
            height: 450px;
            object-fit: cover;
          }
  
          &__text {
            display: inline-block;
            width: 100%;
            color: #000;
            text-align: center;
            font-size: 18px;
            line-height: 25px;
            font-weight: 600;
            text-shadow: 0 3px 6px rgba(#000, .2);
          }
        }
  
        .icon {
          position: absolute;
          top: 41%;
          color: #000;
          font-size: 22px;
          padding: .5rem;
          cursor: pointer;
          
          i {
            filter: drop-shadow( 0 3px 6px rgba(#000, .2));
          }
  
          &--left {
            left: 0;
          }
  
          &--right {
            right: 0;
          }
        }
  
        .slider-dots {
          display: flex;
          align-items: center;
          justify-content: center;
  
          .dot {
            width: 13px;
            height: 13px;
            border: 1px solid #000;
            border-radius: 50%;
            will-change: transform;
            transform: translateX(0);
            transition: transform .2s;
  
            &:not(:last-of-type) {
              margin-right: .3rem;
            }
  
            &--1 {
              background-color: #000;
            }
          }
        }
      }
    }
  }
  .fade-next-enter-active,
  .fade-next-leave-active {
    transition: .2s;
  }
  
  .fade-next-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  
  .fade-next-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
  
  .fade-prev-enter-active,
  .fade-prev-leave-active {
    transition: .2s;
  }
  
  .fade-prev-enter {
    transform: translateX(-100%);
    opacity: 0;
  }
  
  .fade-prev-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
  </style>