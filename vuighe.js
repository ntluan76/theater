var app = angular.module('myapp', [])
.controller('myctrl', function ($scope, $http) {
    $scope.new = [];
    $http.get("new.json").then(
        function (response) {
            $scope.new= response.data;
        },
        function (response) {
            alert(" loi")
        }
    );
}
)
.controller('myctrl1', function ($scope, $rootScope) {
    $rootScope.manga = [{
        id: 1,
        image : 'Image/truyen1.jpg',
        trangthai : 'Hoàn Thành',
        ten: 'Maou Gakuin no Futekigousha',
    },
    {
        id: 2,
        image : 'Image/truyen2duaconcuaidol.jpg',
        trangthai : '128',
        ten: 'Đứa Con Của Thần Tượng',
    },
    {
        id: 3,
        image : 'Image/truyen3hero.jpg',
        trangthai : '402',
        ten: 'Boku No Hero Academy',
    },
    {
        id: 4,
        image : 'Image/truyen4kaguya.jpg',
        trangthai : '24',
        ten: 'KAGUYA-SAMA WA KOKURASETAI DOUJINSHI',
    },
    {
        id: 5,
        image : 'Image/truyen5shuumatsu.jpg',
        trangthai : '82',
        ten: 'SHUUMATSU NO VALKYRIE',
    },
    {
        id: 6,
        image : 'Image/truyen6grandblue.jpg',
        trangthai : '87',
        ten: 'GRAND BLUE',
    }
]})
.controller('myctrl2', function ($scope, $rootScope) {
    $rootScope.bst = [{
        id: 1,
        image : 'Image/bst2.jpg',
    },
    {
        id: 2,
        image : 'Image/bst3.jpg',
    },
    {
        id: 3,
        image : 'Image/bst4.jpg',
    },
    {
        id: 4,
        image : 'Image/bst5.jpg',
    },
    {
        id: 5,
        image : 'Image/bst6.jpg',
    },
    {
        id: 6,
        image : 'Image/bst7.jpg',
    },
    {
        id: 7,
        image : 'Image/bst8.jpg',
    },
    {
        id: 8,
        image : 'Image/bst9.jpg',
    }
]})
.controller('myctrl3', function ($scope, $rootScope) {
    $rootScope.rank = [{
        id: 1,
        image : 'Image/bxh2.jpg',
    },
    {
        id: 2,
        image : 'Image/bxh3.jpg',
    },
    {
        id: 3,
        image : 'Image/bxh4.jpg',
    },
    {
        id: 4,
        image : 'Image/bxh5.jpg',
    },
    {
        id: 5,
        image : 'Image/bxh6.jpg',
    },
    {
        id: 6,
        image : 'Image/bxh7.jpg',
    },
    {
        id: 7,
        image : 'Image/bxh8.jpg',
    },
    {
        id: 8,
        image : 'Image/bxh9.jpg',
    }
]})