import React, { useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

const ActiveUserMap = () => {



    useEffect(() => {


        var root = am5.Root.new("chartdiv", am5map.MapChart);
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        // root.setThemes([am5themes_Animated.new(root)]);

        // Create the map chart
        // https://www.amcharts.com/docs/v5/charts/map-chart/
        var chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "rotateX",
                projection: am5map.geoEquirectangular()
            })
        );

        var cont = chart.children.push(
            am5.Container.new(root, {
                layout: root.horizontalLayout,
                x: 20,
                y: 40
            })
        );

        // Create series for background fill
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
        var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
        backgroundSeries.mapPolygons.template.setAll({
            fill: am5.color(0xE6E9EB),
            fillOpacity: 0,
            strokeOpacity: 0
        });

        // Add background polygon
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
        // backgroundSeries.data.push({
        //     geometry: am5map.getGeoRectangle(90, 180, -90, -180)
        // });

        // Create main polygon series for countries
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
        var polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ["AQ"],
                fill: am5.color(0xE6E9EB), //Map background color

            })
        );

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            templateField: "polygonSettings"
        });

        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: am5.color(0xCCE5E7)
        });


        // Create line series for trajectory lines
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
        var lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
        lineSeries.mapLines.template.setAll({
            stroke: am5.color(0xE6E9EB),
            strokeOpacity: 0.3
        });

        // Create point series for markers
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/
        var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

        pointSeries.bullets.push(function () {
            var container = am5.Container.new(root, {
                tooltipText: "{title}",
                cursorOverStyle: "pointer",
            });

            container.events.on("click", (e) => {
                window.location.href = e.target.dataItem.dataContext.url;
            });

            var circle = container.children.push(
                am5.Circle.new(root, {
                    radius: 3,
                    tooltipY: 0,
                    fill: am5.color(0x007D88),
                    strokeOpacity: 0
                })
            );


            var circle2 = container.children.push(
                am5.Circle.new(root, {
                    radius: 3,
                    tooltipY: 0,
                    fill: am5.color(0x007D88),
                    strokeOpacity: 0,
                    tooltipText: "{title}"
                })
            );

            circle.animate({
                key: "scale",
                from: 1,
                to: 5,
                duration: 1000,
                easing: am5.ease.out(am5.ease.cubic),
                loops: Infinity
            });
            circle.animate({
                key: "opacity",
                from: 1,
                to: 0,
                duration: 1000,
                easing: am5.ease.out(am5.ease.cubic),
                loops: Infinity
            });

            return am5.Bullet.new(root, {
                sprite: container
            });
        });

        var cities = [
            {
                title: "布鲁塞尔",
                latitude: 50.8371,
                longitude: 4.3676,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "哥本哈根",
                latitude: 55.6763,
                longitude: 12.5681,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "巴黎",
                latitude: 48.8567,
                longitude: 2.351,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "雷克雅未克",
                latitude: 64.1353,
                longitude: -21.8952,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "莫斯科",
                latitude: 55.7558,
                longitude: 37.6176,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "马德里",
                latitude: 40.4167,
                longitude: -3.7033,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "伦敦",
                latitude: 51.5002,
                longitude: -0.1262,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "北京",
                latitude: 39.9056,
                longitude: 116.3958,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "新德里",
                latitude: 28.6353,
                longitude: 77.225,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "东京",
                latitude: 35.6785,
                longitude: 139.6823,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "安卡拉",
                latitude: 39.9439,
                longitude: 32.856,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "布宜诺斯艾利斯",
                latitude: -34.6118,
                longitude: -58.4173,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "巴西利亚",
                latitude: -15.7801,
                longitude: -47.9292,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "渥太华",
                latitude: 45.4235,
                longitude: -75.6979,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "华盛顿",
                latitude: 38.8921,
                longitude: -77.0241,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "金沙萨",
                latitude: -4.3369,
                longitude: 15.3271,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "开罗",
                latitude: 30.0571,
                longitude: 31.2272,
                url: "http://www.amcharts.com",
                color: '#007D88'
            },
            {
                title: "比勒陀利亚",
                latitude: -25.7463,
                longitude: 28.1876,
                url: "http://www.amcharts.com",
                color: '#007D88'
            }
        ];

        for (var i = 0; i < cities.length; i++) {
            var city = cities[i];
            addCity(city.longitude, city.latitude, city.title, city.url);
        }

        function addCity(longitude, latitude, title, url) {
            pointSeries.data.push({
                url: url,
                geometry: { type: "Point", coordinates: [longitude, latitude] },
                title: title
            });
        }

        // Make stuff animate on load
        chart.appear(1000, 100);

        return () => root.dispose();
    }, []);

    return <div id="chartdiv" style={{ width: "100%", height: "300px" }} />;
};

export default ActiveUserMap;
