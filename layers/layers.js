var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_BahayaBanjirRob_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Bahaya Banjir Rob<br />\
    <img src="styles/legend/BahayaBanjirRob_1_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/BahayaBanjirRob_1_1.png" /> Rendah<br />\
    <img src="styles/legend/BahayaBanjirRob_1_2.png" /> Tinggi <br />\
    <img src="styles/legend/BahayaBanjirRob_1_3.png" /> Sangat Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BahayaBanjirRob_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12087091.158805, -755520.010800, 12089086.880538, -752384.728289]
        })
    });
var format_BatasDusun_2 = new ol.format.GeoJSON();
var features_BatasDusun_2 = format_BatasDusun_2.readFeatures(json_BatasDusun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDusun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDusun_2.addFeatures(features_BatasDusun_2);
var lyr_BatasDusun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDusun_2, 
                style: style_BatasDusun_2,
                popuplayertitle: 'Batas Dusun',
                interactive: false,
                title: '<img src="styles/legend/BatasDusun_2.png" /> Batas Dusun'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_BahayaBanjirRob_1.setVisible(true);lyr_BatasDusun_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_BahayaBanjirRob_1,lyr_BatasDusun_2];
lyr_BatasDusun_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'Dusun': 'Dusun', 'Batas_RW': 'Batas_RW', 'Luas_1': 'Luas_1', 'J_Penduduk': 'J_Penduduk', 'JP_LK': 'JP_LK', 'JP_PR': 'JP_PR', 'U_15_11': 'U_15_11', 'U_12_60': 'U_12_60', 'U___60': 'U___60', 'Disabilita': 'Disabilita', 'p_p__600': 'p_p__600', 'J_Pengangg': 'J_Pengangg', 'Rasio_Jeni': 'Rasio_Jeni', 'Rasio_Kepa': 'Rasio_Kepa', 'Rasio_PM': 'Rasio_PM', 'Rasio_Umur': 'Rasio_Umur', 'Rasio_Disa': 'Rasio_Disa', 'IKS': 'IKS', });
lyr_BatasDusun_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'Dusun': 'TextEdit', 'Batas_RW': 'TextEdit', 'Luas_1': 'TextEdit', 'J_Penduduk': 'TextEdit', 'JP_LK': 'TextEdit', 'JP_PR': 'TextEdit', 'U_15_11': 'TextEdit', 'U_12_60': 'Range', 'U___60': 'TextEdit', 'Disabilita': 'TextEdit', 'p_p__600': 'TextEdit', 'J_Pengangg': 'TextEdit', 'Rasio_Jeni': 'TextEdit', 'Rasio_Kepa': 'TextEdit', 'Rasio_PM': 'TextEdit', 'Rasio_Umur': 'TextEdit', 'Rasio_Disa': 'TextEdit', 'IKS': 'TextEdit', });
lyr_BatasDusun_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'Dusun': 'no label', 'Batas_RW': 'no label', 'Luas_1': 'no label', 'J_Penduduk': 'no label', 'JP_LK': 'no label', 'JP_PR': 'no label', 'U_15_11': 'no label', 'U_12_60': 'no label', 'U___60': 'no label', 'Disabilita': 'no label', 'p_p__600': 'no label', 'J_Pengangg': 'no label', 'Rasio_Jeni': 'no label', 'Rasio_Kepa': 'no label', 'Rasio_PM': 'no label', 'Rasio_Umur': 'no label', 'Rasio_Disa': 'no label', 'IKS': 'no label', });
lyr_BatasDusun_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});