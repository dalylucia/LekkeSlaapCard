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
