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
        gpxOptions: {
            type: Object,
            default: () => ({ async: true }),
        },
        visible: {
            type: Boolean,
            default: true,
        },
    },
    watch: {
        visible(newValue) {
            if (newValue) {
                this.parentContainer.addLayer(this);
            } else {
                this.parentContainer.removeLayer(this);
            }
        },
        gpxFile() {
            this.setup();
        },
        gpxOptions() {
            this.setup();
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
        this.setup();
    },
    beforeDestroy() {
        this.parentContainer.removeLayer(this);
    },
    methods: {
        setup() {
            if (this.mapObject) {
                this.parentContainer.removeLayer(this);
                // @ts-ignore
                L.DomEvent.off(this.mapObject, this.$listeners);
            }
            this.mapObject = new L.GPX(this.$props.gpxFile, this.$props.gpxOptions)
                .on('loaded', this.gpxLoaded)
                .on('addpoint', this.addpoint)
                .on('addline', this.addline);

            // @ts-ignore
            L.DomEvent.on(this.mapObject, this.$listeners);
            this.ready = true;
            this.parentContainer = findRealParent(this.$parent);
            this.parentContainer.addLayer(this);
        },
        gpxLoaded(loadedEvent: L.LeafletEvent) {
            this.$emit('gpx-loaded', loadedEvent);
        },
        addpoint(addPointEvent: L.LeafletEvent) {
            this.$emit('addpoint', addPointEvent);
        },
        addline(addLineEvent: L.LeafletEvent) {
            this.$emit('addline', addLineEvent);
        },
    },
});

export default LGpx;
</script>
