/*
http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Clastic

http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Silt

http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Sand

http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Gravel



http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Chemical

http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Gypsum

http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Quartz

http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Calcite




http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm




http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Silt


http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Biologic

http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Calcite

http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Texture.htm#Fossils


Texture

Texture of sedimentary rocks in this lab will be taken to indicate origin or type of sediment found in the rock. Three types of "texture" will be used - clastic, chemical, and biologic.

Clastic
Chemical
biologic

Clastic Rocks

Clastic sedimentary rocks contain clasts. These are fragments or pieces of rock or minerals. The composition of clastic sedimentary rocks is divided into three types - clay/silt, sand and gravel. Clay and silt are less than 1/16 mm. These are not visible to the unaided eye. Sand is clasts between 1/16 and 2 mm in size, and gravel is greater than 2 mm.

Chemical Rocks

Chemical sedimentary rocks are identified by identifying the mineral from which they are composed. In this lab there are four minerals that need to be identified - quartz, halite, gypsum and calcite. Quartz has a hardness of 7 and is very difficult to scratch, even with a good quality knife blade. Gypsum is relatively soft (Hardness =2) and can be scratched easily with a fingernail. Halite is common table salt and is most easily identified by taste. However, this is not a sensible practice in a large lab with many different people handling the samples. Halite has a hardness of 2.5 and cannot be scratched by a fingernail (unpolished fingernail). Calcite readily reacts with a small drop of HCl.

Biologic Rocks

Biologic sedimentary rocks are which form as the result of the accumulation of organic material or biologic activity. Coal is usually obvious to most students even though few people seem to have ever actually examined it up close. The dark brown to black color is the most obvious charateristic. Coquina and limestone are both composed of calcite . Coquina is composed almost entirely of shell or fossil fragments. Limestone may or may not contain fossils fragments. Both will react to HCl. Limestone containing fossils is referred to as fossiliferous limestone.


1 - 
2 - 
3 - 
4 - 
5 - 
6 - 
7 - 
8 - 
9 - 
10 - 
11 - 
12 - 

*/


var sedimentaryRocks = [
{
	"sedimentaryName": "Conglomerate",
	"texture": "Clastic",
	"grainSize": ">2 mm",
	"composition": ["rounded quartz", "feldspar", "rock fragments"]
},
{
	"sedimentaryName": "Breccia",
	"texture": "Clastic",
	"grainSize": ">2 mm",
	"composition": ["angular quartz", "feldspar", "rock fragments"]
},
{
	"sedimentaryName": "Sandstone",
	"texture": "Clastic",
	"grainSize": "1/16 - 2 mm",
	"composition": ["quartz", "feldspar"]
},
{
	"sedimentaryName": "Arkose",
	"texture": "Clastic",
	"grainSize": ">1/16 mm",
	"composition": ["feldspar", "quartz"]
},
{
	"sedimentaryName": "Siltstone (Mudstone, Shale)",
	"texture": "Clastic",
	"grainSize": "<1/16 mm",
	"composition": ["quartz", "clay minerals"]
},
{
	"sedimentaryName": "Claystone",
	"texture": "Clastic",
	"grainSize": "<1/256 mm",
	"composition": ["quartz", "clay minerals"]
},
{
	"sedimentaryName": "Chert",
	"texture": "Chemical",
	"grainSize": "",
	"composition": ["silica (quartz)"]
},
{
	"sedimentaryName": "Dolostone",
	"texture": "Chemical",
	"grainSize": "",
	"composition": ["dolomite"]
},
{
	"sedimentaryName": "Limestone",
	"texture": "Chemical",
	"grainSize": "",
	"composition": ["calcite"]
},
{
	"sedimentaryName": "Rock Salt",
	"texture": "Chemical",
	"grainSize": "",
	"composition": ["halite"]
},
{
	"sedimentaryName": "Rock Gypsum",
	"texture": "Chemical",
	"grainSize": "",
	"composition": ["gypsum"]
},
{
	"sedimentaryName": "Chert",
	"texture": "Biologic",
	"grainSize": "",
	"composition": ["silica (quartz)"]
},
{
	"sedimentaryName": "Peat",
	"texture": "Biologic",
	"grainSize": "",
	"composition": ["loosely compacted organic material", "plant fragments"]
},
{
	"sedimentaryName": "Bituminous Coal",
	"texture": "Biologic",
	"grainSize": "",
	"composition": ["densely compacted organic material", "plant fragments"]
},
{
	"sedimentaryName": "Limestone",
	"texture": "Biologic",
	"grainSize": "",
	"composition": ["calcite"]
},
{
	"sedimentaryName": "Chalk",
	"texture": "Biologic",
	"grainSize": "",
	"composition": ["calcite", "micro-skeletal fragments"]
},
{
	"sedimentaryName": "Coquina",
	"texture": "Biologic",
	"grainSize": "",
	"composition": ["calcite", "almost entirely shell and skeletal fragments"]
},
{
	"sedimentaryName": "Fossiliferous Limestone",
	"texture": "Biologic",
	"grainSize": "",
	"composition": ["calcite", "some shell and skeletal fragments"]
},
{
	"sedimentaryName": "Fossiliferous Dolostone",
	"texture": "Biologic",
	"grainSize": "",
	"composition": ["calcite", "some shell and skeletal fragments"]
}
];

/*



{
	"sedimentaryName": "",
	"texture": "",
	"grainSize": "",
	"composition": ["", ""]
},
*/

