<template>
    <div style="display: none">
        <slot v-if="ready"></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import L from 'leaflet';
import 'leaflet-gpx';
import { Component, Emit, Prop } from 'vue-property-decorator';
import { findRealParent, propsBinder } from 'vue2-leaflet';

@Component
export default class LGpx extends Vue {
    @Prop(String) private gpxFile!: string;
    @Prop({ default: true }) private visible!: boolean;

    private ready: boolean = false;
    private mapObject!: L.GPX;
    private parentContainer: any;

    private mounted() {
        this.mapObject = new L.GPX(this.$props.gpxFile, { async: true })
            .on('loaded', this.gpxLoaded)
            .on('addpoint', this.addpoint)
            .on('addline', this.addline);

        // @ts-ignore
        L.DomEvent.on(this.mapObject, this.$listeners);
        this.ready = true;
        this.parentContainer = findRealParent(this.$parent);
        this.parentContainer.addLayer(this);
    }

    @Emit()
    private gpxLoaded() {
        return this.mapObject;
    }

    @Emit()
    private addpoint(point: object) {
        return point;
    }

    @Emit()
    private addline(line: object) {
        return line;
    }
}
</script>