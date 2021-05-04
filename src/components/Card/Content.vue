<template>
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
          <font-awesome class="card-bar-icons" :icon="['fas', 'bed']" />&nbsp; 2
        </b-col>
        <b-col class="card-bar-text">
          <font-awesome class="card-bar-icons" :icon="['fas', 'bath']" />&nbsp;
          1
        </b-col>
        <b-col class="card-bar-text">
          <font-awesome class="card-bar-icons" :icon="['fas', 'car']" />&nbsp; 2
        </b-col>
      </b-row>
      <b-button size="sm" class="card-button">View more</b-button>
    </b-container>
  </div>
</template>

<style lang="scss">
// icons

.star-icon {
  color: $ls-tahiti-gold;
  width: 16px;
  height: 17px;
}

.heart-icon {
  color: $ls-tahiti-gold;
}

.heart-icon:hover {
  cursor: pointer;
}

.card-bar-icons {
  width: 12px;
  height: 12px;
}

// card text

.card-text-container {
  margin-left: 18px;
  margin-right: 18px;
  margin-top: 15px;
}

// title

.title-container {
  padding: 0;
}

.card-title {
  font-size: $font-size-card-title;
  font-weight: 500;
  line-height: $line-height-title;
}

// extract

.card-extract {
  font-size: $font-size-card-extract;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

// rating

.card-dynamic-text-container {
  padding: 0 !important;
  margin-bottom: 8px;
}

.card-dynamic-text {
  font-size: $font-size-card-subtitle;
  margin-bottom: 0;
  padding-bottom: 9px;
  margin-left: 8px;
  padding-top: 1px;
  text-align: right;
}

.card-rating {
  display: flex;
}

// price

.price {
  font-size: $font-size-card-price;
  line-height: 20px;
}

// subtile

.subtitle {
  font-size: $font-size-card-subtitle;
  opacity: $text-opacity;
  font-weight: $card-text-font-weight;
}

// gray-bar

.card-bar {
  background-color: $ls-light-gray;
  border-radius: $card-text-border-radius;
  height: 30px;
  margin-left: 0px !important;
  margin-right: 0px !important;
  margin-bottom: 5px;
}

.card-bar-text {
  font-size: $font-size-card-small-text;
  display: flex;
  align-items: center;
  padding-right: 0 !important;
}

// card button

.card-button {
  margin-top: 16px;
  float: right;
  width: 100px;
  border-radius: $card-btn-border-radius !important;
  background-color: $ls-tahiti-gold !important;
  border: transparent 1px solid !important;
}
</style>
