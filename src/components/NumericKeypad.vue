<template>
  <div>
    <div class="keypad-container">
      <template v-for="n in 12">
        <div :key="n" class="keypad-flex keypad-class">
          <div class="keypad" v-if="n == 10 && onReset" @click="onReset">
            <div class="keypad-center">
              <strong class="keypad-delete">&copy;</strong>
            </div>
          </div>
          <div
            class="keypad"
            v-if="n != 10 && n != 12"
            @click="onInput(n % 11)"
          >
            <v-btn text x-large v-if="n < 10" class="keypad-center">{{
              n
            }}</v-btn>
            <v-btn text x-large v-if="n == 11" class="keypad-center">0</v-btn>
          </div>
          <div class="keypad" v-if="n == 12 && onDelete" @click="onDelete(n)">
            <div v-if="n == 12" class="keypad-center">
              <strong class="keypad-delete">&laquo;</strong>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    n: 0,
    animation: 'keypad-hide',
  }),
  props: {
    keypadClass: { type: String, default: 'keypad-class', required: false },
    // show: { type: Boolean, default: true, required: false },
    close: { type: String, default: 'Close', required: false },
    onInput: { type: Function, required: true },
    onDelete: { type: Function, required: false },
    onReset: { type: Function, required: false },
  },
  //   methods: {
  //     closeMe() {
  //       this.animation = "slideOutDown";
  //     }
  //   },
  //   watch: {
  //     show() {
  //       this.animation === "slideInUp"
  //         ? (this.animation = "slideOutDown")
  //         : (this.animation = "slideInUp");
  //     }
  //   },
  //   mounted() {
  //     this.show ? (this.animation = "slideInUp") : (this.animation = "hide");
  //   }
}
</script>

<style>
.keypad-hide {
  visibility: hidden;
}

/* .keypad-dialog {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
} */

.keypad-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  min-width: 0;
  flex-direction: row;
}

.keypad-value {
  width: 100%;
  text-align: right;
  padding: 0.5rem;
}

.keypad-flex {
  flex-basis: 33%;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  max-width: 33%;
  min-height: 4rem;
}

.keypad {
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: center;
  margin: 0 auto;
}

.keypad-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.3rem;
}

.keypad-delete {
  font-size: 1.5rem;
}
</style>
