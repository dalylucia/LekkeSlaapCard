<template>
  <div class="card-container">
    <ClientOnly>
      <!-- Carousel -->
      <div class="carousel-container">
        <p class="top-left">PREMIUM</p>
        <div class="top-right">
          <b-icon
            v-bind:icon="myIcon"
            v-on:click="changeIcon()"
            aria-hidden="true"
            class="heart-icon"
          ></b-icon>
        </div>
        <flicking
          class="flicking"
          :options="{ hanger: '18px', anchor: '0px', circular: false }"
        >
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDc2NDdjZWE5LTM4YWQtNDY4Yy05MmEzLWI3MDM1MTdmYWE2Yw?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDg0MzkzZjQ5LTg0OWItNDA0Ni1hZjEwLTg4YzMzNTE3ZmEwMw?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJGNiN2JmYTllLTNhMDYtNDE1ZS1iMmMyLTZmYjViZWUwODk5Mg?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
        </flicking>
      </div>

      <!-- <i class="fas fa-bed"></i> -->
      <!-- <i class="fas fa-bath"></i> -->
      <!-- <i class="fas fa-parking"></i> -->
      <!-- <i class="fas fa-star"></i> -->


      <!-- Card Text  -->
      <div class="card-text-container">
        <b-container class="card-dynamic-text-container">
          <b-row>
            <b-col class="detail-bar">
              <div class="card-rating">
                <font-awesome class="star-icon" :icon="['fas', 'star']" />
                <p class="card-dynamic-text">
                  4.2 (88 reviews)
                </p>
              </div>
            </b-col>
            <b-col class="detail-bar">
              <p class="card-dynamic-text price">
                ZAR 2000 <span class="subtitle">/ night</span>
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="card-title">
                Tsala Treetop Lodge
                <span class="subtitle"> &bull; Villa</span>
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="card-extract">
                Set amidst the treetops of an age-old indigenous forest, Tsala
                Treetop Lodge is a lavish celebration of the spirit of Africa.
              </p>
            </b-col>
          </b-row>
          <b-row class="card-bar">
            <b-col class="card-bar-text" cols="6"
              ><font-awesome class="card-bar-icons" :icon="['fas', 'map-marker-alt']"/>&nbsp; 4.4 km from
              Hout Bay</b-col
            >
            <b-col class="card-bar-text">
              <font-awesome class="card-bar-icons" :icon="['fas', 'bed']"/>&nbsp; 4
            </b-col>
            <b-col class="card-bar-text">
              <font-awesome class="card-bar-icons" :icon="['fas', 'bath']"/>&nbsp; 3
            </b-col>
            <b-col class="card-bar-text">
              <font-awesome class="card-bar-icons" :icon="['fas', 'car']"/>&nbsp; 2
            </b-col>
          </b-row>
          <b-button size="sm" class="card-button">View more</b-button>
        </b-container>
      </div>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  data() {
    return {
      value: 0.5,
      myIcon: "heart",
    };
  },
  components: {
    Flicking: () =>
      import("@egjs/vue-flicking")
        .then((m) => m.Flicking)
        .catch(),
  },
  methods: {
    changeIcon() {
      this.myIcon == "heart"
        ? (this.myIcon = "heart-fill")
        : (this.myIcon = "heart");
    },
  },
};
</script>

<style>
.flicking {
  height: 210px;
  margin-left: 0;
  padding-left: 0;
  margin-bottom: 8px;
}
</style>
