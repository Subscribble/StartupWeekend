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
        classsub_Name: 'spinner', // The CSS class to assign to the spinner
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
    //         $("#main").append("<tr><td>" + i.sub_name + "</td><td>" + i.price + "</td><td>" + i.exp_date + "</td><td>" + i.pay_date + "</td></tr>");
    //    sub_ });
    // }, 1000);

};



var subs = [{
    "sub_name": "Netflix",
    "sub_price": 20,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Hulu",
    "sub_price": 15,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Maxim Magazine",
    "sub_price": 30,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Time Magazine",
    "sub_price": 45,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Gym membership",
    "sub_price": 27,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Pandora",
    "sub_price": 15,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Spotify",
    "sub_price": 21,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Dollar Shave Club",
    "sub_price": 42,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "AOL Music",
    "sub_price": 23,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Futurist magazine",
    "sub_price": 50,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Amazon Prime",
    "sub_price": 17,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Roku",
    "sub_price": 5,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "OneDrive",
    "sub_price": 29,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Microsoft Office Suite 365",
    "sub_price": 40,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Adobe Creative Cloud",
    "sub_price": 25,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Fitness Pal",
    "sub_price": 32,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}, {
    "sub_name": "Apple Care",
    "sub_price": 27,
    "exp_date": "2014-11-15",
    "pay_date": "2014-11-15"
}];
