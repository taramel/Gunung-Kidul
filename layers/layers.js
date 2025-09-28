var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_BatasKecamatan_1 = new ol.format.GeoJSON();
var features_BatasKecamatan_1 = format_BatasKecamatan_1.readFeatures(json_BatasKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_1.addFeatures(features_BatasKecamatan_1);
var lyr_BatasKecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_1, 
                style: style_BatasKecamatan_1,
                popuplayertitle: 'Batas Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_1.png" /> Batas Kecamatan'
            });
var format_JaringanJalan_2 = new ol.format.GeoJSON();
var features_JaringanJalan_2 = format_JaringanJalan_2.readFeatures(json_JaringanJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_2.addFeatures(features_JaringanJalan_2);
var lyr_JaringanJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_2, 
                style: style_JaringanJalan_2,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_2.png" /> Jaringan Jalan'
            });
var format_LokasiWisata_3 = new ol.format.GeoJSON();
var features_LokasiWisata_3 = format_LokasiWisata_3.readFeatures(json_LokasiWisata_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiWisata_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiWisata_3.addFeatures(features_LokasiWisata_3);
cluster_LokasiWisata_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LokasiWisata_3
});
var lyr_LokasiWisata_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LokasiWisata_3, 
                style: style_LokasiWisata_3,
                popuplayertitle: 'Lokasi Wisata',
                interactive: true,
                title: '<img src="styles/legend/LokasiWisata_3.png" /> Lokasi Wisata'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_BatasKecamatan_1.setVisible(true);lyr_JaringanJalan_2.setVisible(true);lyr_LokasiWisata_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_BatasKecamatan_1,lyr_JaringanJalan_2,lyr_LokasiWisata_3];
lyr_BatasKecamatan_1.set('fieldAliases', {'fid': 'fid', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', });
lyr_JaringanJalan_2.set('fieldAliases', {'fid': 'fid', 'Status': 'Status', 'Fungsi': 'Fungsi', 'Panjang_Km': 'Panjang_Km', });
lyr_LokasiWisata_3.set('fieldAliases', {'fid': 'fid', 'Wisata': 'Wisata', 'Kab_Kota': 'Kabupaten', });
lyr_BatasKecamatan_1.set('fieldImages', {'fid': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_JaringanJalan_2.set('fieldImages', {'fid': 'TextEdit', 'Status': 'TextEdit', 'Fungsi': 'TextEdit', 'Panjang_Km': 'TextEdit', });
lyr_LokasiWisata_3.set('fieldImages', {'fid': 'Hidden', 'Wisata': 'TextEdit', 'Kab_Kota': 'TextEdit', });
lyr_BatasKecamatan_1.set('fieldLabels', {'fid': 'no label', 'Kecamatan': 'no label', 'Kabupaten': 'no label', 'Provinsi': 'no label', });
lyr_JaringanJalan_2.set('fieldLabels', {'fid': 'no label', 'Status': 'no label', 'Fungsi': 'no label', 'Panjang_Km': 'no label', });
lyr_LokasiWisata_3.set('fieldLabels', {'Wisata': 'inline label - visible with data', 'Kab_Kota': 'inline label - visible with data', });
lyr_LokasiWisata_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});