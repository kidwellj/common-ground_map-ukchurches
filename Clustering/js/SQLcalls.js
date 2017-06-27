


//change the file structure 
//push to github and get Jeremy to check the work 
	//if its ok then continue
//insert all 5 data sets 
//change the methods for each of those so it has on hover etc
//insert the names on the onhover function so that you can see typeG

 


function getDataAllSets(){
var results = [];
   
          //open sidebar and more content when clicking button in popup
          var thisResult;

          
          /*This is the function to sort the results of the array passed below
          openSidebar(a.layer.feature.properties.name(aka ID), a.layer.feature.properties.url,a.layer.feature.properties.facebook_url,a.layer.feature.properties.twitter_url,a.layer.feature.properties.description);
          */
          function openSidebar(network, ID,url,facebook_url,twitter_url,description) {

            //account for http
            //if url first few elements  != http then add http maybe???

            

            //parser needed to change the url formatting if incorrect in the database
            var parser = document.createElement('a');
            parser.href = url;
            parser.protocol; // => "http:"
            parser.hostname; // => "example.com"
            parser.port;     // => "3000"
            parser.pathname; // => "/pathname/"
            parser.search;   // => "?search=test"
            parser.hash;     // => "#hash"
            parser.host; // => "example.com:3000"

            if(url != null && parser.protocol != "http://" && network == "Community Land Scotland"){
              //alert(network);
              url = "http://" + url;
              //alert(url)
            }

            if(url == null){
              url = "";
            }
            if(facebook_url == null){
              facebook_url = "";
            }
            if(twitter_url == null){
              twitter_url = "";
            }
            if(description == null){
              description = "";
            }

             //console.log(ID);
              if ($('#sidebar-text').text().length > 0) {
                  $("#sidebar-text").removeText();
              }

              for (var i = 0, len = results.length; i < len; i++) {
                 
               
               //this loop matches the array element to the passed ID  
                  if (results[i].Link == ID) {
                      thisResult = (results[i]);            
                  }
              }
              
              //remove name from thisResult and others
              sidebar.open('home');
              var divToAddContent = document.getElementById('home');
              
              //This information is what is displayed in the pop out.
              divToAddContent.innerHTML = "<b>" + network + "</b>" + "</br></br>" + "<b>Name: </b>" + ID + "</br>" + "<b>Url: </b>" +
              '<a href="'+ url + '" target="_blank"' + '>' + url + '</a>' +  "</br><b> Facebook: </b>" + facebook_url + "</br><b>Twitter: </b>" + twitter_url + "</br><b>Description:</b> " + description;
          }

/*
Display in infobox (omit whole field if data is null/blank)

(as above, as well as...)

● url (we should also consider integrating chortling creation for these, see: https://www.programmableweb.com/news/71-url-shortener-apis-bitly-google-url-shortener-and-tiny-url-open/2012/10/31)

● facebook_url

● twitter_url

● description

● 5 nearest neighbors (each shown as "name" which is rendered as hyperlink which on click will move focus to new item; possibly also include icon after name to represent network of each neighbor item (provided via table name)

● demographics? 
*/

 
       		const tonerUrl = "http://{S}tile.stamen.com/terrain/{Z}/{X}/{Y}.png";
              
            const url = tonerUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
              

		   var basemap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
		    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		    subdomains: 'abcd',
		    minZoom: 0,
		    maxZoom: 18,
		    ext: 'png'
		});

          var map = L.map('map', {
              center: [55.3781, -4.4360],
              zoom: 5,
              layers: [basemap]
          });


                                          

				basemap.addTo(map);
//change the options for clustering includes region control see carto documentation
//for more info https://github.com/Leaflet/Leaflet.markercluster
		var markers1 = new L.MarkerClusterGroup(
      {spiderfyOnMaxZoom: true,
      showCoverageOnHover: false});
		var markers1List = [];

		//create second grouping
		var markers2 = new L.MarkerClusterGroup(
      {spiderfyOnMaxZoom: true,
      showCoverageOnHover: false});
		var markers2List = [];

		//create comm energy grouping
    //this is not a cluster group
	var markers3 = new L.MarkerClusterGroup(
      {spiderfyOnMaxZoom: true,
      showCoverageOnHover: false});
    var markers3List = [];
/*
     if (map.getZoom() == 5) {
    map.removeLayer (markers3);     
};*/

//ComLand linked to the markers4 list and group 
  var markers4 = new L.MarkerClusterGroup(
      


      {spiderfyOnMaxZoom: true,
      showCoverageOnHover: false});
    var markers4List = [];

//City farms linked to the markers4 list and group 
  var markers5 = new L.MarkerClusterGroup(
      {spiderfyOnMaxZoom: true,
      showCoverageOnHover: false});
    var markers5List = [];
   
//Sccan linked to the markers4 list and group 
  var markers6 = new L.MarkerClusterGroup(
      {spiderfyOnMaxZoom: true,
      showCoverageOnHover: false});
    var markers6List = [];
   
//Permaculture
  var markers7 = new L.MarkerClusterGroup(
      {spiderfyOnMaxZoom: true,
      showCoverageOnHover: false});
    var markers7List = [];

   


  

//The implemntation of a for loop which loops over sql data
//It is then forming the pop up box with information inside

/*
DTAS - inserted
ecs_groups_gb_sct - inserted

communityenergy_groups_gb_sct
communityland_groups_gb_sct 
cityfarmsgardens_groups_gb_sct 
sccan_groups_gb_sct
permaculture_groups_gb_sct  
*/
        

		function populateComEnergy() {

   var query3 = $.getJSON('https://carto.mapping.community:9090/user/hilld/api/v2/sql?format=GeoJSON&q=SELECT * FROM "mapcomm-admin".communityenergy_groups_gb_sct',     
    function(data1) {
    

              var geojsonMarkerOptions = {
                  radius: 8,
                  fillColor: "#0000FF", //dark blue
                  color: "#000",
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.8
              };

              


              L.geoJSON(data1, {
                  pointToLayer: function (feature, latlng) {
                      var marker = L.circleMarker(latlng, geojsonMarkerOptions);
                     

		//add onHover functionality
                      marker.bindPopup(feature.properties.name + "<br/>" + '<br/><button type="button" class="btn btn-primary sidebar-open-button" data = "' + feature.properties.url);
                      
                results.push(feature.properties);

              
				markers3List.push(marker);
				markers3.addLayer(marker);
                  
                      return marker;
                  }
                  })
                



  //pop ups added and these are the custom options.
//using this?????????
 
		})
			return false;
		}


		function populateDTAS() {

   var query3 = $.getJSON('https://carto.mapping.community:9090/user/hilld/api/v2/sql?format=GeoJSON&q=SELECT * FROM "mapcomm-admin".dtas_groups_gb_sct',     
    function(data1) {
    

              var geojsonMarkerOptions = {
                  radius: 8,
                  fillColor: "#FFC0CB", //pink
                  color: "#000",
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.8
              };

              


              L.geoJSON(data1, {
                  pointToLayer: function (feature, latlng) {
                      var marker = L.circleMarker(latlng, geojsonMarkerOptions);
                     

		//add onHover functionality
                      marker.bindPopup(feature.properties.name + "<br/>" + '<br/><button type="button" class="btn btn-primary sidebar-open-button" data = "' + feature.properties.url);
                      
                results.push(feature.properties);

              
				markers2List.push(marker);
				markers2.addLayer(marker);
                  
                      return marker;
                  }
                  })
  //pop ups added and these are the custom options.
//using this?????????
 
		})
			return false;
		}




function populateEco() {

   var query3 = $.getJSON('https://carto.mapping.community:9090/user/hilld/api/v2/sql?format=GeoJSON&q=SELECT * FROM "mapcomm-admin".ecs_groups_gb_sct',     
    function(data1) {
    

              var geojsonMarkerOptions = {
                  radius: 8,
                  fillColor: "#00FF00", //green
                  color: "#000",
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.8
              };

              


              L.geoJSON(data1, {
                  pointToLayer: function (feature, latlng) {
                      var marker = L.circleMarker(latlng, geojsonMarkerOptions);
                     

		//add onHover functionality
                      marker.bindPopup(feature.properties.name + "<br/>" + '<br/><button type="button" class="btn btn-primary sidebar-open-button" data = "' + feature.properties.url);
                      
                results.push(feature.properties);

              
				markers1List.push(marker);
				markers1.addLayer(marker);
                  
                      return marker;
                  }
                  })
                



  //pop ups added and these are the custom options.
//using this?????????
 
		})
			return false;
		}



function populateComLand() {

   var query4 = $.getJSON('https://carto.mapping.community:9090/user/hilld/api/v2/sql?format=GeoJSON&q=SELECT * FROM "mapcomm-admin".communityland_groups_gb_sct',     
    function(data1) {
      console.log(data1);    

              var geojsonMarkerOptions = {
                  radius: 8,
                  fillColor: "#FF0000", //red
                  color: "#000",
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.8
              };

              


              L.geoJSON(data1, {
                  pointToLayer: function (feature, latlng) {
                      var marker = L.circleMarker(latlng, geojsonMarkerOptions);
                     

    //add onHover functionality
                      marker.bindPopup(feature.properties.name + "<br/>" + '<br/><button type="button" class="btn btn-primary sidebar-open-button" data = "' + feature.properties.url);
                      
                results.push(feature.properties);

              
        markers4List.push(marker);
        markers4.addLayer(marker);
                  
                      return marker;
                  }
                  })
  //pop ups added and these are the custom options.
//using this?????????
 
    })
      return false;
    }

function populateCityFarms() {

   var query4 = $.getJSON('https://carto.mapping.community:9090/user/hilld/api/v2/sql?format=GeoJSON&q=SELECT * FROM "mapcomm-admin".cityfarmsgardens_groups_gb_sct',     
    function(data1) {
      console.log(data1);    

              var geojsonMarkerOptions = {
                  radius: 8,
                  fillColor: "#FFFF00", //yellow
                  color: "#000",
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.8
              };

              


              L.geoJSON(data1, {
                  pointToLayer: function (feature, latlng) {
                      var marker = L.circleMarker(latlng, geojsonMarkerOptions);
                     

    //add onHover functionality
                      marker.bindPopup(feature.properties.name + "<br/>" + '<br/><button type="button" class="btn btn-primary sidebar-open-button" data = "' + feature.properties.url);
                      
                results.push(feature.properties);

              
        markers5List.push(marker);
        markers5.addLayer(marker);
                  
                      return marker;
                  }
                  })
  //pop ups added and these are the custom options.
//using this?????????
 
    })
      return false;
    }




function populateSccan() {

   var query4 = $.getJSON('https://carto.mapping.community:9090/user/hilld/api/v2/sql?format=GeoJSON&q=SELECT * FROM "mapcomm-admin".sccan_groups_gb_sct',     
    function(data1) {
      console.log(data1);    

              var geojsonMarkerOptions = {
                  radius: 8,
                  fillColor: "#BFFFF4", //aqua
                  color: "#000",
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.8
              };

              


              L.geoJSON(data1, {
                  pointToLayer: function (feature, latlng) {
                      var marker = L.circleMarker(latlng, geojsonMarkerOptions);
                     

    //add onHover functionality
                      marker.bindPopup(feature.properties.name + "<br/>" + '<br/><button type="button" class="btn btn-primary sidebar-open-button" data = "' + feature.properties.url);
                      
                results.push(feature.properties);

              
        markers6List.push(marker);
        markers6.addLayer(marker);
                  
                      return marker;
                  }
                  })
  //pop ups added and these are the custom options.
//using this?????????
 
    })
      return false;
    }



function populatePermaculture() {

   var query4 = $.getJSON('https://carto.mapping.community:9090/user/hilld/api/v2/sql?format=GeoJSON&q=SELECT * FROM "mapcomm-admin".permaculture_groups_gb_sct',     
    function(data1) {
      console.log(data1);    

              var geojsonMarkerOptions = {
                  radius: 8,
                  fillColor: "#0e470f", //dark green
                  color: "#000",
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.8
              };

              


              L.geoJSON(data1, {
                  pointToLayer: function (feature, latlng) {
                      var marker = L.circleMarker(latlng, geojsonMarkerOptions);
                     

    //add onHover functionality
                      marker.bindPopup(feature.properties.name + "<br/>" + '<br/><button type="button" class="btn btn-primary sidebar-open-button" data = "' + feature.properties.url);
                      
                results.push(feature.properties);

              
        markers7List.push(marker);
        markers7.addLayer(marker);
                  
                      return marker;
                  }
                  })
  //pop ups added and these are the custom options.
//using this?????????
 
    })
      return false;
    }


		//The cluster click which focuses in on a grouping of points 
		markers1.on('clusterclick', function (a) {
			//alert('cluster ' + a.layer.getAllChildMarkers().length);
		});
		
		    var sidebar = L.control.sidebar('sidebar', {
            position: 'right'
          });

            map.addControl(sidebar);

//add sideBar functionality onclick
		           markers1.on('click', function (a) {
             
              console.log("test here" + a.layer.feature.properties);      
              //pushes the features to the sideBar which are pushed to the function above and need to be printed there
              //you have to send the name as the first parameter as it is checked in the function against stored values for ID. Then you can send any other parameters after this if you specify them. 
              openSidebar(a.layer.feature.properties.network, a.layer.feature.properties.name, a.layer.feature.properties.url,a.layer.feature.properties.facebook_url,a.layer.feature.properties.twitter_url,a.layer.feature.properties.description);
     
		          });


        //Change the content of the pop up boxes here on mouse over
         markers1.on('mouseover', function(e) {
    		var popup = L.popup()

     		.setLatLng(e.latlng) 
     		.setContent( "</br>" + e.layer.feature.properties.name + "</br>" + "</br>" + "Click for more information")
     		.openOn(map);
  		});

  		markers1.on('mouseout', function (e) {
            map.closePopup();
        });
		



    //markers 2 clustering functionality
    //The cluster click which focuses in on a grouping of points 
    markers2.on('clusterclick', function (a) {
      //alert('cluster ' + a.layer.getAllChildMarkers().length);
    });
    
        var sidebar = L.control.sidebar('sidebar', {
            position: 'right'
          });

            map.addControl(sidebar);

//add sideBar functionality onclick
               markers2.on('click', function (a) {
             
              console.log("test here" + a.layer.feature.properties);      
              //pushes the features to the sideBar which are pushed to the function above and need to be printed there
              //you have to send the name as the first parameter as it is checked in the function against stored values for ID. Then you can send any other parameters after this if you specify them. 
              openSidebar(a.layer.feature.properties.network, a.layer.feature.properties.name, a.layer.feature.properties.url,a.layer.feature.properties.facebook_url,a.layer.feature.properties.twitter_url,a.layer.feature.properties.description);
     
              });


//Change the content of the pop up boxes here on mouse over
         markers2.on('mouseover', function(e) {
        var popup = L.popup()

        .setLatLng(e.latlng) 
        .setContent( "</br>" + e.layer.feature.properties.name + "</br>" + "</br>" + "Click for more information")
        .openOn(map);
      });

      markers2.on('mouseout', function (e) {
            map.closePopup();
        });
    


    //add the third set of markers clustering functionality
    //***removed


    //The cluster click which focuses in on a grouping of points 
    markers3.on('clusterclick', function (a) {
      //alert('cluster ' + a.layer.getAllChildMarkers().length);
    });
    
        var sidebar = L.control.sidebar('sidebar', {
            position: 'right'
          });

            map.addControl(sidebar);

//add sideBar functionality onclick
               markers3.on('click', function (a) {
             
              console.log("test here" + a.layer.feature.properties);      
              //pushes the features to the sideBar which are pushed to the function above and need to be printed there
              //you have to send the name as the first parameter as it is checked in the function against stored values for ID. Then you can send any other parameters after this if you specify them. 
              openSidebar(a.layer.feature.properties.network, a.layer.feature.properties.name, a.layer.feature.properties.url,a.layer.feature.properties.facebook_url,a.layer.feature.properties.twitter_url,a.layer.feature.properties.description);
     
              });


//Change the content of the pop up boxes here on mouse over
         markers3.on('mouseover', function(e) {
        var popup = L.popup()

        .setLatLng(e.latlng) 
        .setContent( "</br>" + e.layer.feature.properties.name + "</br>" + "</br>" + "Click for more information")
        .openOn(map);
      });

      markers3.on('mouseout', function (e) {
            map.closePopup();
        });



    //group four clustering added
    //The cluster click which focuses in on a grouping of points 
    markers4.on('clusterclick', function (a) {
      //alert('cluster ' + a.layer.getAllChildMarkers().length);
    });
    
        var sidebar = L.control.sidebar('sidebar', {
            position: 'right'
          });

            map.addControl(sidebar);

//add sideBar functionality onclick
               markers4.on('click', function (a) {
             
              console.log("test here" + a.layer.feature.properties);      
              //pushes the features to the sideBar which are pushed to the function above and need to be printed there
              //you have to send the name as the first parameter as it is checked in the function against stored values for ID. Then you can send any other parameters after this if you specify them. 
              openSidebar(a.layer.feature.properties.network, a.layer.feature.properties.name, a.layer.feature.properties.url,a.layer.feature.properties.facebook_url,a.layer.feature.properties.twitter_url,a.layer.feature.properties.description);
     
              });


//Change the content of the pop up boxes here on mouse over
         markers4.on('mouseover', function(e) {
        var popup = L.popup()

        .setLatLng(e.latlng) 
        .setContent( "</br>" + e.layer.feature.properties.name + "</br>" + "</br>" + "Click for more information")
        .openOn(map);
      });

      markers4.on('mouseout', function (e) {
            map.closePopup();
        });
    



        //group five clustering added
    //The cluster click which focuses in on a grouping of points 
    markers5.on('clusterclick', function (a) {
      //alert('cluster ' + a.layer.getAllChildMarkers().length);
    });
    
        var sidebar = L.control.sidebar('sidebar', {
            position: 'right'
          });

            map.addControl(sidebar);

//add sideBar functionality onclick
               markers5.on('click', function (a) {
             
              console.log("test here" + a.layer.feature.properties);      
              //pushes the features to the sideBar which are pushed to the function above and need to be printed there
              //you have to send the name as the first parameter as it is checked in the function against stored values for ID. Then you can send any other parameters after this if you specify them. 
              openSidebar(a.layer.feature.properties.network, a.layer.feature.properties.name, a.layer.feature.properties.url,a.layer.feature.properties.facebook_url,a.layer.feature.properties.twitter_url,a.layer.feature.properties.description);
     
              });


//Change the content of the pop up boxes here on mouse over
         markers5.on('mouseover', function(e) {
        var popup = L.popup()

        .setLatLng(e.latlng) 
        .setContent( "</br>" + e.layer.feature.properties.name + "</br>" + "</br>" + "Click for more information")
        .openOn(map);
      });

      markers5.on('mouseout', function (e) {
            map.closePopup();
        });
    



//group six clustering added
    //The cluster click which focuses in on a grouping of points 
    markers6.on('clusterclick', function (a) {
      //alert('cluster ' + a.layer.getAllChildMarkers().length);
    });
    
        var sidebar = L.control.sidebar('sidebar', {
            position: 'right'
          });

            map.addControl(sidebar);

//add sideBar functionality onclick
               markers6.on('click', function (a) {
             
              console.log("test here" + a.layer.feature.properties);      
              //pushes the features to the sideBar which are pushed to the function above and need to be printed there
              //you have to send the name as the first parameter as it is checked in the function against stored values for ID. Then you can send any other parameters after this if you specify them. 
              openSidebar(a.layer.feature.properties.network, a.layer.feature.properties.name, a.layer.feature.properties.url,a.layer.feature.properties.facebook_url,a.layer.feature.properties.twitter_url,a.layer.feature.properties.description);
     
              });


//Change the content of the pop up boxes here on mouse over
         markers6.on('mouseover', function(e) {
        var popup = L.popup()

        .setLatLng(e.latlng) 
        .setContent( "</br>" + e.layer.feature.properties.name + "</br>" + "</br>" + "Click for more information")
        .openOn(map);
      });

      markers6.on('mouseout', function (e) {
            map.closePopup();
        });
    
//group seventh clustering added
    //The cluster click which focuses in on a grouping of points 
    markers7.on('clusterclick', function (a) {
      //alert('cluster ' + a.layer.getAllChildMarkers().length);
    });
    
        var sidebar = L.control.sidebar('sidebar', {
            position: 'right'
          });

            map.addControl(sidebar);

//add sideBar functionality onclick
               markers7.on('click', function (a) {
             
              console.log("test here" + a.layer.feature.properties);      
              //pushes the features to the sideBar which are pushed to the function above and need to be printed there
              //you have to send the name as the first parameter as it is checked in the function against stored values for ID. Then you can send any other parameters after this if you specify them. 
              openSidebar(a.layer.feature.properties.network, a.layer.feature.properties.name, a.layer.feature.properties.url,a.layer.feature.properties.facebook_url,a.layer.feature.properties.twitter_url,a.layer.feature.properties.description);
     
              });


//Change the content of the pop up boxes here on mouse over
         markers7.on('mouseover', function(e) {
        var popup = L.popup()

        .setLatLng(e.latlng) 
        .setContent( "</br>" + e.layer.feature.properties.name + "</br>" + "</br>" + "Click for more information")
        .openOn(map);
      });

      markers7.on('mouseout', function (e) {
            map.closePopup();
        });




  		//make calls to methods to populate the space with the markers 
		populateDTAS();
		populateEco();
		populateComEnergy();
    populateComLand();
    populateCityFarms()
    populateSccan()
    populatePermaculture()

		map.addLayer(markers1);
		map.addLayer(markers2);
		//removes initial view of comm energy layer
		//map.addLayer(markers3);
    map.addLayer(markers4);
    map.addLayer(markers5);
    map.addLayer(markers6);
    map.addLayer(markers7);
		




      //panel implementation
//var panel = L.control.panelLayers();



/*// Set up the OSM layer
var tile = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {maxZoom: 18}).addTo(map);
var osm = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {maxZoom: 18}).addTo(map);
*/

//map.addLayer(tile);
//map.addLayer(osm);
//map.addLayer();
//map.addLayer(wpLayer);
var baseLayer = { 
   //"Satellite": tile,
   //"OSM Data": osm
};
var overlay = {
    "ECS": markers1,
    "DTAS": markers2,
    "Community Energy": markers3,
    "Community Land": markers4,
    "City Farms Gardens": markers5,
    "SCCAN": markers6,
    "Permaculture": markers7,



    
    
};

var layerControl = new L.control.layers(baseLayer, overlay, {position: 'topleft', collapsed: false});
map.addControl(layerControl);

}
   


