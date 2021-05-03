<template>
  <div class="card-container">
    <ClientOnly>
      <!-- Image Slider -->
      <div class="carousel-container">
        <!-- Overlapping elements -->
        <p class="top-left">PREMIUM</p>
        <div class="top-right">
          <b-icon
            v-bind:icon="myIcon"
            v-on:click="changeIcon()"
            aria-hidden="true"
            class="heart-icon"
          ></b-icon>
        </div>

        <!-- Image slider -->
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
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJGI2ZThkNmE5LWRmOWUtNDEwYi1hZjI5LTM4OTNkYzc2MmE3NA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDE5M2I2ODQ5LTE2YTItNGVjMS1hMjJlLWYwOGIwOGZhODFjZA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDBkM2I5ZWU4LTU3ZmQtNDMwZS1iNTc5LTY3NGM5NGY1NWZmNw?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDJhYzdiZTkxLWNmODUtNDI3ZS1hNTc5LTA2ZTA3MjQ4MWE0NA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDNlYzM3ZTlhLWI3NjctNDc0MS04YzY4LWZkZTQ1MDkyMjMzMA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDk5ZTg5ZGJjLWZjMzQtNGJlZC1iYzRlLTZlNzI1Mjk1MmJlMw?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJGRjODQ3YzdhLWE1MzMtNGM3MC04NmEyLWM3YzUyYTA2MDFjMQ?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJGU1YWVlMDRkLWY4NjEtNGY5OC04ZWQxLTdiMmY2MGZhYjhlZQ?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDVhZTAyYjUwLTBkODctNGE0OS1hMDA1LWVjN2Y0NDMyMGVjOA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="panel">
            <div class="anchor">
              <img
                class="image-slide"
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJGJhMzMzMDM5LTJiODItNDE1Mi04YzM5LWQ5YzJmOWEzY2MzNA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80"
                alt=""
              />
            </div>
          </div>
        </flicking>
      </div>

      <!-- Card text  -->
      <div class="card-text-container">
        <b-container class="card-dynamic-text-container">
          <b-row>
            <!-- Detail bar -->
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
                ZAR 9780 <span class="subtitle">/ night</span>
              </p>
            </b-col>
          </b-row>

          <!-- Card content -->
          <b-row>
            <b-col>
              <p class="card-title">
                Tsala Treetop Lodge
                <span class="subtitle"> &bull; Hotel</span>
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

          <!-- Card bottom bar -->
          <b-row class="card-bar">
            <b-col class="card-bar-text" cols="6"
              ><font-awesome
                class="card-bar-icons"
                :icon="['fas', 'map-marker-alt']"
              />&nbsp; 4.4 km from Hout Bay</b-col
            >
            <b-col class="card-bar-text">
              <font-awesome
                class="card-bar-icons"
                :icon="['fas', 'bed']"
              />&nbsp; 2
            </b-col>
            <b-col class="card-bar-text">
              <font-awesome
                class="card-bar-icons"
                :icon="['fas', 'bath']"
              />&nbsp; 1
            </b-col>
            <b-col class="card-bar-text">
              <font-awesome
                class="card-bar-icons"
                :icon="['fas', 'car']"
              />&nbsp; 2
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
    title: "Lekkeslaap Search Results Card",
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
