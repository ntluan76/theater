var app = angular.module('myapp', [])
.controller('myctrl1', function ($scope, $rootScope) {
    $rootScope.fairytail = [{
        id: 1,
        image : 'Image/hoi-phap-su-tap-1.jpg',
        tap : 'Tập 1: Fairy Tail',
    },
    {
        id: 2,
        image : 'Image/hoi-phap-su-tap-2.jpg',
        tap : 'Tập 2: Rồng lửa, Khỉ và Bò',
    },
    {
        id: 3,
        image : 'Image/hoi-phap-su-tap-3.jpg',
        tap : 'Tập 3: Đột Nhập! Biệt Thự',
    },
    {
        id: 4,
        image : 'Image/hoi-phap-su-tap-4.jpg',
        tap : 'Tập 4: Kaby Thân Mến',
    },
    {
        id: 5,
        image : 'Image/hoi-phap-su-tap-5.jpg',
        tap : 'Tập 5: Pháp Sư Mặc Giáp',
    },
    {
        id: 6,
        image : 'Image/hoi-phap-su-tap-6.jpg',
        tap : 'Tập 6: Nàng Tiên Trong Gió Lốc',
    },
    {
        id: 7,
        image : 'Image/hoi-phap-su-tap-7.jpg',
        tap : 'Tập 7: Lửa Và Gió',
    },
    {
        id: 8,
        image : 'Image/hoi-phap-su-tap-8.jpg',
        tap : 'Tập 8: Đội Mạnh Nhất',
    },
    {
        id: 9,
        image : 'Image/hoi-phap-su-tap-9.jpg',
        tap : 'Tập 9: Natsu Ăn Hết Cả Làng',
    },
    {
        id: 10,
        image : 'Image/hoi-phap-su-tap-10.jpg',
        tap : 'Tập 10',
    },
]}
)