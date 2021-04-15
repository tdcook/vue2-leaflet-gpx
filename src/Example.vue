<template>
  <div id="example">
    <l-map ref="map" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-gpx
        :gpx-file="require('@/sample.gpx')"
        :visible="gpxVisible"
        @gpx-loaded="onGpxLoaded" />
    </l-map>
    <button class="button" @click="onClickButton">Hide/Show Track</button>
  </div>
</template>

<script lang="ts">
import L from 'leaflet';
import { LMap, LTileLayer } from 'vue2-leaflet';
import { Component, Vue } from 'vue-property-decorator';
import LGpx from './LGpx.vue';
import 'leaflet/dist/leaflet.css';

@Component({
  components: {
    LMap,
    LTileLayer,
    LGpx,
  },
  data: () => ({
    zoom: 2,
    center: [0, 0],
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }),
})
export default class Example extends Vue {
  private gpxVisible = true;

  private onGpxLoaded(loadedEvent: L.LeafletEvent) {
    const { mapObject } = this.$refs.map as LMap;
    const gpxMapObject: L.GPX = loadedEvent.target;
    mapObject.fitBounds(gpxMapObject.getBounds());
  }

  private onClickButton() {
    this.gpxVisible = !this.gpxVisible;
  }
}
</script>

<style>
html, body, #example {
  height: 100%;
  margin: 0;
}

.button {
  position: absolute;
  top: .7rem;
  left: 3rem;
  z-index: 9999;
}
</style>
