
data1 = [{ "lat": 22.1342, "lon": 113.54551 }, { "lat": 22.12848, "lon": 113.54541 }, { "lat": 22.12904, "lon": 113.54585 }, { "lat": 22.12861, "lon": 113.54607 }, { "lat": 22.12813, "lon": 113.54539 }, { "lat": 22.1286, "lon": 113.54509 }, { "lat": 22.12895, "lon": 113.54514 }, { "lat": 22.13382, "lon": 113.54424 }, { "lat": 22.13003, "lon": 113.54486 }, { "lat": 22.13094, "lon": 113.5458 },
{ "lat": 22.13394, "lon": 113.54261 }, { "lat": 22.12432, "lon": 113.54448 }, { "lat": 22.1350166, "lon": 113.5452397 }, { "lat": 22.13561, "lon": 113.54527 }, { "lat": 22.13505, "lon": 113.54324 }, { "lat": 22.13369, "lon": 113.54554 }, { "lat": 22.12692, "lon": 113.54412 }, { "lat": 22.12584, "lon": 113.54415 }, { "lat": 22.13087, "lon": 113.54323 }, { "lat": 22.12638, "lon": 113.5438 }, { "lat": 22.13239, "lon": 113.54325 }, { "lat": 22.12815, "lon": 113.54315 }, { "lat": 22.12896, "lon": 113.54292 }, { "lat": 22.12955, "lon": 113.543 }, { "lat": 22.12529, "lon": 113.54361 }, { "lat": 22.13223, "lon": 113.54118 }, { "lat": 22.13231, "lon": 113.54185 }, { "lat": 22.13117, "lon": 113.54108 }, { "lat": 22.13141, "lon": 113.54186 }, { "lat": 22.12938, "lon": 113.54113 }, { "lat": 22.1294, "lon": 113.54164 }, { "lat": 22.12822, "lon": 113.54138 }, { "lat": 22.12637, "lon": 113.54136 }, { "lat": 22.12635, "lon": 113.54216 }, { "lat": 22.12552, "lon": 113.54162 }, { "lat": 22.12542, "lon": 113.5424 }, { "lat": 22.12436, "lon": 113.5436 }, { "lat": 22.12488, "lon": 113.54597 }, { "lat": 22.12444, "lon": 113.54505 }, { "lat": 22.12372, "lon": 113.54559 }, { "lat": 22.12377, "lon": 113.54481 }, { "lat": 22.12301, "lon": 113.54383 }, { "lat": 22.12298, "lon": 113.54421 },
{ "lat": 22.12298, "lon": 113.5447 }, { "lat": 22.12298, "lon": 113.54504 }, { "lat": 22.12299, "lon": 113.54547 }, { "lat": 22.12299, "lon": 113.54584 }, { "lat": 22.12196, "lon": 113.54592 }, { "lat": 22.12197, "lon": 113.54557 }, { "lat": 22.12144, "lon": 113.54595 }, { "lat": 22.12142, "lon": 113.54555 }, { "lat": 22.12247, "lon": 113.54592 }, { "lat": 22.12248, "lon": 113.54385 }]
const scene = new L7.Scene({
  id: 'map',
  logoVisible: false,
  map: new L7.Mapbox({
    style: 'dark', // 样式URL
    rotateEnable: false,
    center: [113.543936,22.128841],
    pitch: 0,
    zoom: 15.8,
    minZoom: 1.3,
    token: 'pk.eyJ1IjoiYm9uZHkxMjIxIiwiYSI6ImNrc3N3eGVyejA2cjcycWxzeHBqc3hoM2kifQ.HKHZjt-CfDYM3msWMw8WgA',
  }),
});

const data0 = []
const dataaa=[{ "lat": 22.13394, "lon": 113.54261,"size":1000,'style':[1,10,1.0]}]
// { "lat": 22.13394, "lon": 113.54261,"size":999},
// { "lat": 22.13394, "lon": 113.54261,"size":999},
// { "lat": 22.13394, "lon": 113.54261,"size":999},
// { "lat": 22.13394, "lon": 113.54261,"size":999},
// { "lat": 22.13384, "lon": 113.54251,"size":999},
// { "lat": 22.13384, "lon": 113.54271,"size":999},
// { "lat": 22.13347, "lon": 113.54261,"size":999},
// { "lat": 22.12298, "lon": 113.54504,"size":300},
// { "lat": 22.12848, "lon": 113.54541,'size':100},
// // { "lat": 22.12837, "lon": 113.54540,'size':100 },
// // { "lat": 22.12859, "lon": 113.54542,'size':100 },
// { "lat": 22.1342, "lon": 113.54551,"size":10},
// { "lat": 22.12432, "lon": 113.54448 ,"size":1}]
//----------------------------------------

const datatest=[{"lat": 22.13394, "lon": 113.54261,"size":1000},
{"lat": 22.13394, "lon": 113.54261,"size":1000},
]
const heatlayer = new L7.HeatmapLayer({})
  .source(data0, {
    parser: {
      type: 'json',
      x: 'lon',
      y: 'lat',
    },
  })
  .size('size', (size) => {
    if(size==1)
      return 0.2;
    // else if(size<100)
    //   return 2;
    // else if(size>100&size<200)
    //   return 4;
    return size;
  })
  .shape('heatmap')
  .style({
    intensity: 3,//越大贡献度越明显
    radius: 13,
    opacity: 0.5,
    rampColors: {
      colors: [
        '#FF4818',
        '#F7B74A',
        '#FFF598',
        '#F27DEB',
        '#8C1EB2',
        '#421EB2'
      ].reverse(),
      positions: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
    }
  });
  // const heatlayer1 = new L7.HeatmapLayer({})
  // .source(data0, {
  //   parser: {
  //     type: 'json',
  //     x: 'lon',
  //     y: 'lat',
  //   },
  // })
  // .size('size', (size) => {
  //   // size=Math.log(size);
  //   // return size;
  //   return size;
  // })
  // // .blend("additive")
  // .shape('heatmap')
  // .style({
  //   intensity: 2,
  //   radius: 15,
  //   opacity: 0.5,
  //   rampColors: {
  //     colors: [
  //       '#FF4818',
  //       '#F7B74A',
  //       '#FFF598',
  //       '#F27DEB',
  //       '#8C1EB2',
  //       '#421EB2'
  //     ].reverse(),
  //     positions: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
  //   }
  // });


// const heatlayer = new L7.HeatmapLayer({})
//   .source(data0, {
//     parser: {
//       type: 'json',
//       x: 'lon',
//       y: 'lat',
//     },
//   })
//   .size(5)
//   .shape('heatmap')
//   .style({
//     intensity: 2,
//     radius: 8,
//     opacity: 1.0,
//     rampColors: {
//       colors: [
//       '#FF4818',
//       '#F7B74A',
//       '#FFF598',
//       '#F27DEB',
//       '#8C1EB2',
//       '#421EB2'
//       ].reverse(),
//       positions: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
//       // [0, 0.2, 0.4, 0.6, 0.8, 1.0]
//     }
//       // colors: [
//       //   '#FF4818',
//       //   '#F27DEB',
//       //   '#421EB2'
//       // ].reverse(),
//       // positions: [1, 99, 999]
//       // '#FF4818',
//       // '#F7B74A',
//       // '#FFF598',
//       // '#F27DEB',
//       // '#8C1EB2',
//       // '#421EB2'
//     });

// const pointLayer = new L7.PointLayer({})
//   .source(data0, {
//     parser: {
//       type: 'json',
//       x: 'lon',
//       y: 'lat'
//     }
//   })
//   .shape('circle')
//   .size('size', (size) => {
//     // return Math.pow(size,8);
//     return Math.sqrt(size);
//   })
//   // .color("size",(value)=>{
//   //   if(value>100)
//   //     return '#FF4818';

//   //   return '#0410BA';
//   // })
//   .color('#FF4818')
//   .style({
//     opacity: 1,
//     strokeWidth: 0
//   });

scene.on('loaded', () => {

  // scene.addLayer(pointLayer);
  scene.setRotation(270);
  scene.addLayer(heatlayer);
  // scene.addLayer(heatlayer1);
});

scene.on('contextmenu', (ev) => {
  const wrapped = ev.lngLat.wrap();
  console.log("lng: "+wrapped.lng+", lat: "+wrapped.lat)
});
