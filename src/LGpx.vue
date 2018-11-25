<template>
    <div style="display: none">
        <slot v-if="ready"></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import L from 'leaflet';
import 'leaflet-gpx';
import { findRealParent, propsBinder } from 'vue2-leaflet';

const LGpx = Vue.extend({
    props: {
        gpxFile: {
            type: String,
        },
        visible: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            ready: false,
            mapObject: null as null | L.GPX,
            parentContainer: null as any,
        };
    },
    mounted() {
        this.mapObject = new L.GPX(this.$props.gpxFile, { async: true })
            .on('loaded', this.gpxLoaded)
            .on('addpoint', this.addpoint)
            .on('addline', this.addline);

        // @ts-ignore
        L.DomEvent.on(this.mapObject, this.$listeners);
        this.ready = true;
        this.parentContainer = findRealParent(this.$parent);
        this.parentContainer.addLayer(this);
    },
    beforeDestroy() {
        this.parentContainer.removeLayer(this);
    },
    methods: {
        gpxLoaded() {
            this.$emit('gpx-loaded', this.mapObject);
        },
        addpoint(point: object) {
            this.$emit('addpoint', point);
        },
        addline(line: object) {
            this.$emit('addline', line);
        },
    },
});

export default LGpx;
</script>