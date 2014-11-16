// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
    var popup = new jBox('Confirm', {
        title: 'Request Access',
        confirmButton: 'Do it!',
        cancelButton: 'Nope',
        // confirm: dothis()
    });

    $('#import-gmail').on('click', function(e) {
        e.preventDefault();
        popup;
        $(".jBox-Confirm-button-submit").on('click', function(e) {
            dothis();
        });
    });
});

var dothis = function() {
    var opts = {
        lines: 13, // The number of lines to draw
        length: 20, // The length of each line
        width: 10, // The line thickness
        radius: 30, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        classname: 'spinner', // The CSS class to assign to the spinner
        zIndesub_x: 2e9, // The z-index (defaults to 2000000000)
        top: '50%', // Top position relative to parent
        left: '50%' // Left position relative to parent
    };
    var target = document.getElementById('main');
    var spinner = new Spinner(opts);

    $.ajax({
        url: "/subscriptions/batch_create",
        type: "POST",
        data: { ajax: subs },
        beforeSend: function() {
            spinner.spin(target);
        },
        success: function(data) {
            $(".spinner").remove();
            console.log(data);

        },
        dataType: "json"
    });
    // spinner.spin(target);
    // setTimeout(function() {
    //     $(".spinner").remove();
    //     subs.forEach(function(i) {
    //         $("#main").append("<tr><td>" + i.name + "</td><td>" + i.price + "</td><td>" + i.exp_date + "</td><td>" + i.pay_date + "</td></tr>");
    //    sub_ });
    // }, 1000);

};



var subs = [{
    "name": "Netflix",
    "price": 18,
    "tag": "Movies",
    "monthly": true,
    "url": "https://www.netflix.com/YourAccount?lnkctr=mhSS",
    "exp_date": "2014-11-22",
    "pay_date": "2014-11-18"
// }, {
//     "name": "Hulu",
//     "price": 15,
//     "tag": "Movies",
//     "exp_date": "2014-11-15",
//     "pay_date": "2014-11-15"
// }, {
//     "name": "Maxim Magazine",
//     "price": 30,
//     "exp_date": "2014-11-15",
//     "pay_date": "2014-11-15"
// }, {
//     "name": "Time Magazine",
//     "price": 45,
//     "tag": "Print",
//     "exp_date": "2014-11-15",
//     "pay_date": "2014-11-15"
// }, {
//     "name": "Gym membership",
//     "price": 27,
//     "tag": "Fitness",
//     "exp_date": "2014-11-15",
//     "pay_date": "2014-11-15"
// }, {
//     "name": "Pandora",
//     "price": 15,
//     "tag": "Music",
//     "exp_date": "2014-11-15",
//     "pay_date": "2014-11-15"
// }, {
//     "name": "Spotify",
//     "price": 21,
//     "tag": "Music",
//     "exp_date": "2014-11-15",
//     "pay_date": "2014-11-15"
// }, {
//     "name": "Dollar Shave Club",
//     "price": 42,
//     "tag": "Shopping",
//     "exp_date": "2014-11-15",
//     "pay_date": "2014-11-15"
// }, {
//     "name": "AOL Music",
//     "price": 23,
//     "tag": "Music",
//     "exp_date": "2014-11-15",
//     "pay_date": "2014-11-15"
}, {
    "name": "Amazon Prime",
    "price": 79,
    "tag": "Shopping",
    "exp_date": "2015-06-04",
    "pay_date": "2015-06-04"
// }, {
//     "name": "Roku",
//     "price": 8,
//     "tag": "Movies",
//     "exp_date": "2014-11-15",
//     "pay_date": "2014-11-15"
}, {
//     "name": "Microsoft Office Suite 365",
//     "price": 40,
//     "tag": "Shopping",
//     "exp_date": "2014-11-15",
//     "pay_date": "2014-11-15"
// }, {
    "name": "Fitness Pal",
    "price": 5,
    "tag": "Fitness",
    "monthly": true,
    "exp_date": "2015-03-20",
    "pay_date": "2014-12-12"
// }, {
//     "name": "Apple Care",
//     "price": 27,
//     "tag": "Shopping",
//     "exp_date": "2014-11-15",
//     "pay_date": "2014-11-15"
}];
