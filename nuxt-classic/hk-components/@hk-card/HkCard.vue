<template>
  <div v-if="showCard" class="card card-refresh" :class="{ fullscreen: maxiMize }">
    <div class="refresh-container" :class="{ 'la-animate': refreshCard }">
      <div class="loader-pendulums"></div>
    </div>
    <div class="card-header card-header-action">
      <h6>Card Header</h6>
      <div class="card-action-wrap">
        <a
          class="btn btn-xs btn-icon btn-rounded btn-flush-dark flush-soft-hover"
          data-bs-toggle="collapse"
          href="#collapse_1"
          aria-expanded="true"
        >
          <span class="icon">
            <feather-icon name="chevron-down" />
          </span>
        </a>
        <div class="d-flex dropdown">
          <a
            class="btn btn-xs btn-icon btn-rounded btn-flush-dark flush-soft-hover dropdown dropdown-toggle no-caret"
            data-bs-toggle="dropdown"
            href="#"
            aria-expanded="false"
          >
            <span class="icon">
              <feather-icon name="more-horizontal" />
            </span>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
        <button
          class="btn btn-xs btn-icon btn-rounded btn-flush-dark flush-soft-hover refresh"
          @click="handleRefresh"
        >
          <span class="icon">
            <feather-icon name="disc" />
          </span>
        </button>
        <button
          class="btn btn-xs btn-icon btn-rounded btn-flush-dark flush-soft-hover full-screen"
          @click="maxiMize = !maxiMize"
        >
          <span class="icon">
            <feather-icon v-if="!maxiMize" name="maximize"></feather-icon>
            <feather-icon v-else name="minimize"></feather-icon>
          </span>
        </button>
        <button
          class="btn btn-xs btn-icon btn-rounded btn-flush-dark flush-soft-hover card-close"
          @click="showCard = false"
        >
          <span class="icon">
            <feather-icon name="x"></feather-icon>
          </span>
        </button>
      </div>
    </div>
    <div id="collapse_1" class="collapse show">
      <div class="card-body">
        <h5 class="card-title">Special Title Treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HkCard",

  props: {
    headerTitle: {
      type: String,
      required: true,
    },
    collapseId: {
      type: String,
      required: true,
    },
  },

  setup() {
    const refreshCard = ref(false);
    const maxiMize = ref(false);
    const showCard = ref(true);

    const handleRefresh = () => {
      refreshCard.value = true;
      setTimeout(() => {
        refreshCard.value = false;
      }, 1500);
    };

    const toggleMaximize = () => {
      maxiMize.value = !maxiMize.value;
    };

    const toggleShowCard = () => {
      showCard.value = !showCard.value;
    };

    return {
      refreshCard,
      maxiMize,
      showCard,
      handleRefresh,
      toggleMaximize,
      toggleShowCard,
    };
  },
  // Your component options go here
};
</script>
