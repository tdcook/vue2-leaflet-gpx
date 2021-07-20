# vue2-leaflet-gpx

This is a [vue2-leaflet](https://github.com/KoRiGaN/Vue2Leaflet) wrapper for the [leaflet-gpx](https://github.com/mpetazzoni/leaflet-gpx) plugin.

To use it, put something like this in your template:

```
<l-map ref="map" :zoom="zoom" :center="center">
  <l-tile-layer :url="url" :attribution="attribution" />
  <l-gpx
    :gpx-file="https://example.com/my-gpx-file.gpx"
    :gpx-options="gpxOptions"
    @gpx-loaded="onGpxLoaded" />
</l-map>
```

This component accepts the following props:

* `gpx-file`: a string with the contents of a GPX file, or a URL to a GPX file
* `gpx-options`: the options object passed to the L.GPX constructor. Defaults to `{ async: true }`.
* `visible`: boolean

This component emits the `gpx-loaded` event, emitted when the leaflet-gpx `loaded` event is fired, and passes the event object. It also emits the `addline` and `addpoint` event corresponding to those same events from leaflet-gpx. See the [leaflet-gpx documentation](https://github.com/mpetazzoni/leaflet-gpx/blob/master/README.md) for
more information.

See `src/Example.vue` for a usage example.

## Development

The source of the library is in `src/LGpx.vue`. Run `npm install` to fetch dependencies. `npm run serve` launches a hot-reloading server that serves the `src/Example.vue` component in a minimal app. `npm run build` bundles the distribution bundle of the library.

## Contributions

Contributions are welcome. If you would like to make a contribution, please note that the official home of this project is [my Fossil repo](https://trevorcook.dev/repos/vue2-leaflet-gpx/home), or you may make a pull request to the [GitHub mirror](https://github.com/tdcook/vue2-leaflet-gpx).

## License

This project uses the ISC license.
