var workHours = ['9AM' ,'10AM' ,'11AM' ,'12PM' ,'1PM' ,'2PM' ,'3PM' ,'4PM' ,'5PM' ];
workHours.forEach(function(item){
    $('.container').append('<hr>');
    $('.container').append('<div class="row">' + `<div class="col-md-2">${item}</div>` + '<input class="col-md-9">' + '<div type="button" class="col-md-1" id="lockPic">🔒</div>' +'</div>');
});

const clock = document.getElementById('clock');

function updateTime() {
    const now = moment();
    const humanReadable = now.format("dddd, MMMM Do YYYY, hh:mma");
    clock.textContent = humanReadable;
}

setInterval(updateTime, 1000);
updateTime();
    
