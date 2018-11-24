<template>
  <div id="example">
    <l-map ref="map" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-gpx
        :gpx-file="require('@/sample.gpx')"
        :gpx-options="gpxOptions"
        @gpx-loaded="onGpxLoaded" />
    </l-map>
  </div>
</template>

<script lang="ts">
import L from 'leaflet';
import { LMap, LTileLayer } from 'vue2-leaflet';
import { Component, Vue } from 'vue-property-decorator';
import LGpx from './LGpx.vue';

// @ts-ignore: Property does not exist
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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
  private gpxOptions = {
    async: false,
  };
  private onGpxLoaded(gpxMapObject: L.GPX) {
    const { mapObject } = this.$refs.map as LMap;
    mapObject.fitBounds(gpxMapObject.getBounds());
  }
}
</script>

<style lang="scss">
@import '~leaflet/dist/leaflet.css';

html, body, #example {
  height: 100%;
  margin: 0;
}
</style>