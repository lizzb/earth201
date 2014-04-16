var app = angular.module('main', ['ngTable']).
controller('DemoCtrl', function($scope, $filter, ngTableParams) {
    /*var data = [{name: "Moroni", age: 50},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34}];*/
var data = [                
{
	"sampleNum": 1,
	"sedimentaryName": "Limestone",
	"texture": "Chemical",
	"grainSize": "no grain size",
	"acidReaction": true,
	"hardness": 3,
	"composition": ["calcite"],
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed01.jpg",
	"img1close": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup01.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed01.htm"
},
{
	"sampleNum": 2,
	"sedimentaryName": "Coquina",
	"texture": "Biologic",
	"grainSize": "no grain size",
	"acidReaction": true,
	"hardness": 3,
	"composition": ["calcite", "almost entirely shell and skeletal fragments"], 
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed02b.jpg",
	"img1close": "	http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup02a.jpg",
	"img1closealt": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup02b.jpg",
	"img2": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Sed02a.jpg",
	"img2close": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup02c.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed02.htm"
},
{
	"sampleNum": 3,
	"sedimentaryName": "Rock Gypsum",
	"texture": "Chemical",
	"grainSize": "no grain size",
	"acidReaction": false,
	"hardness": 2,
	"composition": ["gypsum"],
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed03.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed03.htm"
},
{
	"sampleNum": 4,
	"sedimentaryName": "Fossiliferous Limestone",
	"texture": "Biologic",
	"grainSize": "no grain size",
	"acidReaction": true,
	"hardness": 3,
	"composition": ["calcite", "some shell and skeletal fragments"],
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed04.jpg",
	"img1close": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup04.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed04.htm"
},
{
	"sampleNum": 5,
	"sedimentaryName": "Siltstone (Mudstone, Shale)",
	"texture": "Clastic",
	"grainSize": "< 1/16",
	"acidReaction": false,
	"hardness": null,
	"composition": ["quartz", "clay minerals"],
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed05.jpg",
	"img1close": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup05.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed05.htm"
},
{
	"sampleNum": 6,
	"sedimentaryName": "Arkose",
	"texture": "Clastic",
	"grainSize": "> 1/16",
	"acidReaction": false,
	"hardness": null,
	"composition": ["feldspar", "quartz"],
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed06.jpg",
	"img1close": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup06.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed06.htm"
},
{
	"sampleNum": 7,
	"sedimentaryName": "Rock Gypsum",
	"texture": "Chemical",
	"grainSize": "no grain size",
	"acidReaction": false,
	"hardness": 2,
	"composition": ["gypsum"],
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed07.jpg",
	"img1close": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup07.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed07.htm"
},
{
	"sampleNum": 8,
	"sedimentaryName": "Conglomerate",
	"texture": "Clastic",
	"grainSize": "> 2 mm",
	"acidReaction": false,
	"hardness": null,
	"composition": ["rounded quartz", "feldspar", "rock fragments"],
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed08.jpg",
	"img1close": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup08.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed08.htm"
},
{
	"sampleNum": 9,
	"sedimentaryName": "Chert",
	"texture": "Chemical",
	"grainSize": "no grain size",
	"acidReaction": false,
	"hardness": 7,
	"composition": ["silica (quartz)"],
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed09.jpg",
	"img1close": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup09.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed09.htm"
},
{
	"sampleNum": 10,
	"sedimentaryName": "Sandstone",
	"texture": "Clastic",
	"grainSize": "1/16 - 2 mm",
	"acidReaction": false,
	"hardness": null,
	"composition": ["quartz", "feldspar"],
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed10.jpg",
	"img1close": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup10.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed10.htm"
},
{
	"sampleNum": 11,
	"sedimentaryName": "Sandstone",
	"texture": "Clastic",
	"grainSize": "1/16 - 2 mm",
	"acidReaction": false,
	"hardness": null,
	"composition": ["quartz", "feldspar"],
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed11.jpg",
	"img1close": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup11.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed11.htm"
},
{
	"sampleNum": 12,
	"sedimentaryName": "Bituminous Coal",
	"texture": "Biologic",
	"grainSize": "no grain size",
	"acidReaction": false,
	"hardness": null,
	"composition": ["densely compacted organic material and plant fragments"],
	"img1": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/images/Sed12.jpg",
	"img1close": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Images/Closeup12.jpg",
	"url": "http://facweb.bhc.edu/academics/science/harwoodr/geol101/Labs/Sediment/Sed12.htm"
}
];

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 25,          // count per page
        sorting: {
            sampleNum: 'asc'     // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')(data, params.orderBy()) :
                                data;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
});