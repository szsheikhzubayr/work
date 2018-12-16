/*
Author: Zubayr, Sheikh
Date: December 2018
Description: This Javascript function accepts an array of meetings and returns the top,left, width and height for the display of the
meeting in the calendar. The input array of meetings has meeting id,start time and end time.
*/
function ViewMeetings(meetings) {
    var width = 0;
    width = 600 / meetings.length;
    console.log("Width of each meeting is: " + width);
    var arr = new Array();
    var preceding_height = 0;

    for (var i = 0; i < meetings.length; i++) {
        //first loop to iterate through each of the meetings
        var meeting = meetings[i];
        var meetingname = "";
        var starttime = 0;
        var endtime = 0;
        var duration = 0;
        var top = 0;
        var height = 0;
        var left = 0;
        //for(var j=0; j<meeting.length;j++){
        //2nd loop to iterate through start time,end time of each meeting
        // if(j == 0)
        // {
        duration = meeting[2] - meeting[1];
        height = duration * 2;
        preceding_height += height;
        top = 1440 - (height + preceding_height);
        //console.log("value of j is" + j);
        left = width * i;
        arr.push(width, top, left);
        var canvas = document.createElement("CANVAS");
        var context = canvas.getContext("2d");
        // var c = document.getElementById('myCanvas');
        // var ctx = c.getContext('2d');
        // ctx.beginPath();
        // ctx.lineWidth = "6";
        // ctx.strokeStyle = "black";
        console.log("x coordinate of the upper-left corner is at: " + left);
        console.log("y coordinate of the upper-left corner is at: " + preceding_height);
        console.log("width is: " + width);
        console.log("height is at: " + height);
        context.fillStyle = "red";
        context.fillRect(left, preceding_height, width, height);
        document.body.appendChild(canvas);
        console.log("hi");
        // ctx.stroke();
        //break;
        // }  
        //}

    }
    console.log(arr.toString());
    document.getElementById("dvMeetings").innerHTML = arr;

    return arr;



}

var meetings = [
    ["Meeting 1", 60, 120],
    ["Meeting 2", 150,270],
    ["Meeting 3", 240,300]
];
var arr = new Array();
arr = ViewMeetings(meetings);