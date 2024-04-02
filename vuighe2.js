var app = angular.module('myapp', [])
    .controller('myctrl', function ($scope, $rootScope, $http) {
        $rootScope.theodoi = {};
        $rootScope.anime = [];
        $http.get("anime.json").then(
            function (response) {
                $rootScope.anime = response.data;
                $scope.page = 1;
                $scope.limit = 12;
                $scope.start = ($scope.page - 1) * $scope.limit;
                $scope.totalPage = Math.ceil($scope.anime.length / $scope.limit);
                $scope.numberOfPage = Array.from(Array($scope.totalPage).keys());
                $scope.showPage = function (p) {
                    $scope.page = p;
                    $scope.start = ($scope.page - 1) * $scope.limit;
                }
            },
            function (response) {
                alert(" loi")
            }
        );



        $scope.cot = '';
        $scope.kieu = '';
        $scope.order = function (cot, kieu) {
            $scope.cot = cot;
            $scope.kieu = kieu;
        }
        $scope.tt = '';
        $scope.sortBy = function (tt) {
            $scope.tt = tt;
        }
        $scope.follow = function (id) {
            var chuaco = true;
            for (const item of $rootScope.anime) {
                if (item.id == id) {
                    $rootScope.theodoi = item;
                    break;
                }
            }
            localStorage.setItem('pholau', angular.toJson($rootScope.theodoi));
            console.log($rootScope.theodoi);
        }
    }
    )
    .controller('myctrl2', function ($scope, $rootScope) {
        $rootScope.theodoi = angular.fromJson(localStorage.getItem('pholau'))
        console.log($rootScope.theodoi)
    })
    .controller('myctrl1', function ($scope, $rootScope) {
        $rootScope.fairytail = [{
            id: 1,
            image: 'Image/hoi-phap-su-tap-1.jpg',
            tap: 'Tập 1: Fairy Tail',
        },
        {
            id: 2,
            image: 'Image/hoi-phap-su-tap-2.jpg',
            tap: 'Tập 2: Rồng lửa, Khỉ và Bò',
        },
        {
            id: 3,
            image: 'Image/hoi-phap-su-tap-3.jpg',
            tap: 'Tập 3: Đột Nhập! Biệt Thự',
        },
        {
            id: 4,
            image: 'Image/hoi-phap-su-tap-4.jpg',
            tap: 'Tập 4: Kaby Thân Mến',
        },
        {
            id: 5,
            image: 'Image/hoi-phap-su-tap-5.jpg',
            tap: 'Tập 5: Pháp Sư Mặc Giáp',
        },
        {
            id: 6,
            image: 'Image/hoi-phap-su-tap-6.jpg',
            tap: 'Tập 6: Nàng Tiên Trong Gió Lốc',
        },
        {
            id: 7,
            image: 'Image/hoi-phap-su-tap-7.jpg',
            tap: 'Tập 7: Lửa Và Gió',
        },
        {
            id: 8,
            image: 'Image/hoi-phap-su-tap-8.jpg',
            tap: 'Tập 8: Đội Mạnh Nhất',
        },
        {
            id: 9,
            image: 'Image/hoi-phap-su-tap-9.jpg',
            tap: 'Tập 9: Natsu Ăn Hết Cả Làng',
        },
        {
            id: 10,
            image: 'Image/hoi-phap-su-tap-10.jpg',
            tap: 'Tập 10',
        },
        ]
    }
    )