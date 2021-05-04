<template>
  <!-- Image Slider -->
  <div class="carousel-container">
    <!-- Overlapping elements -->
    <p class="top-left">PREMIUM</p>
    <div class="top-right">
      <b-icon
        :icon="myIcon"
        @click="changeIcon()"
        aria-hidden="true"
        class="heart-icon"
      ></b-icon>
    </div>

    <!-- Image slider -->
    <flicking
      class="flicking"
      :options="{ hanger: '18px', anchor: '0px', circular: false }"
    >
      <div class="panel" v-for="image in images" :key="image.url">
        <div class="anchor">
          <img class="image-slide" :src="image.url" :alt="image.alt" />
        </div>
      </div>
    </flicking>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Card Slider Component",
  },
  data() {
    return {
      value: 0.5,
      myIcon: "heart",
      images: [
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDc2NDdjZWE5LTM4YWQtNDY4Yy05MmEzLWI3MDM1MTdmYWE2Yw?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "First slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDg0MzkzZjQ5LTg0OWItNDA0Ni1hZjEwLTg4YzMzNTE3ZmEwMw?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Second slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJGNiN2JmYTllLTNhMDYtNDE1ZS1iMmMyLTZmYjViZWUwODk5Mg?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Third slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJGI2ZThkNmE5LWRmOWUtNDEwYi1hZjI5LTM4OTNkYzc2MmE3NA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Fourth slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDE5M2I2ODQ5LTE2YTItNGVjMS1hMjJlLWYwOGIwOGZhODFjZA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Five slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDJhYzdiZTkxLWNmODUtNDI3ZS1hNTc5LTA2ZTA3MjQ4MWE0NA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Five slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDBkM2I5ZWU4LTU3ZmQtNDMwZS1iNTc5LTY3NGM5NGY1NWZmNw?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Six slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDNlYzM3ZTlhLWI3NjctNDc0MS04YzY4LWZkZTQ1MDkyMjMzMA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Seventh slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDk5ZTg5ZGJjLWZjMzQtNGJlZC1iYzRlLTZlNzI1Mjk1MmJlMw?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Ninth slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJGRjODQ3YzdhLWE1MzMtNGM3MC04NmEyLWM3YzUyYTA2MDFjMQ?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Tenth slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJGU1YWVlMDRkLWY4NjEtNGY5OC04ZWQxLTdiMmY2MGZhYjhlZQ?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Eleventh slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDVhZTAyYjUwLTBkODctNGE0OS1hMDA1LWVjN2Y0NDMyMGVjOA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Twelth slide image",
        },
        {
          url:
            "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJGJhMzMzMDM5LTJiODItNDE1Mi04YzM5LWQ5YzJmOWEzY2MzNA?w=720&h=405&fit=crop&auto=enhance,format,compress&q=80",
          alt: "Twelth slide image",
        },
      ],
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
