const begin_twitter = new Date('2012/09/28 22:09:35');
const begin_vrc = new Date('2018/04/02');
function dateStr(date)
{
    return date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate();
}
function timeDiff(date1, date2)
{
    return Math.abs(date1.getTime() - date2.getTime());
}
function timeStr(time)
{
    time = time / (1000 * 60 * 60 * 24);
    return Math.floor(time / 365) + "年" + Math.floor(time % 365) + "日"
}

var now = new Date();
// var now = new Date(new Date().getTime() + 2 * 24*60*60*1000);// test
var str = dateStr(now);

var time_vrc = timeStr(timeDiff(now, begin_vrc));
var time_twitter = timeStr(timeDiff(now, begin_twitter));

document.getElementById("now").insertAdjacentHTML("beforeend", dateStr(now));
document.getElementById("time_vrc").insertAdjacentHTML("beforeend", time_vrc);
document.getElementById("begin_vrc").insertAdjacentHTML("beforeend", dateStr(begin_vrc));
document.getElementById("time_twitter").insertAdjacentHTML("beforeend", time_twitter);
document.getElementById("begin_twitter").insertAdjacentHTML("beforeend", dateStr(begin_twitter));

// document.getElementById("vrc").insertAdjacentHTML("beforebegin", "aaaa");
// document.getElementById("vrc").insertAdjacentHTML("afterbegin", "bbbb");
// document.getElementById("vrc").insertAdjacentHTML("beforeend", "cccc");
// document.getElementById("vrc").insertAdjacentHTML("afterend", "dddd");