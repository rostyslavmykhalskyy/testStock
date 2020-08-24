<template>
  <div id="app">
    <headerComponent />
    <div class="content">
      <div class="content__top">
        <div class="content__top__currency">
          <div class="content__top__currency__eur">
            <label>
              EUR/PLN: 4.4057
            </label>
          </div>
          <div class="content__top__currency__gbr">
            <label>
              GBP/PLN: 4.8866
            </label>
          </div>
        </div>
        <div class="content__top__profile-nav">
          <button
            @focus="notification = true"
            @focusout="notification = false"
            id="notification"
          >
            <img src="@/assets/icons/001-notification.svg" alt="" />
          </button>
          <div v-if="notification" class="topNotification">
            <p>Some Data[notification]</p>
          </div>
          <button
            @focus="profile = true"
            @focusout="profile = false"
            id="profile-icon"
          >
            <img src="@/assets/icons/jaks_babeczka.jpg" alt="" />
            <label for="">
              Jaks Babeczka
            </label>
          </button>
          <div v-if="profile" class="topProfile"><p>Some Data[profile]</p></div>
        </div>
      </div>
      <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
      <router-view />
    </div>
  </div>
</template>

<script>
import headerComponent from "@/components/header.vue";
export default {
  components: {
    headerComponent
  },
  data() {
    return {
      notification: false,
      profile: false
    };
  }
};
</script>
<style lang="scss"></style>
