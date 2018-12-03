import Vue from 'vue';

declare module 'vue/types/vue' {
  interface VueConstructor {
    mapObject: any;
  }
}
