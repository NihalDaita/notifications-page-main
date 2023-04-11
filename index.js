const range = (start, stop, step = 1) =>
    Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
const INVALID_INDEX = -1;

function test() {
    alert("Hi");
}

function updateReadCount() {
    const notifPanel = document.querySelectorAll(".notif");
    let readCount = document.querySelector("#notif-count");
    const noOfMsgs = notifPanel.length;
    console.log(`No: of notifs = ${noOfMsgs}`);
    readCount.innerHTML = noOfMsgs;
}

function setToRead(id) {
    const notification = document.getElementById(id);
    className = notification.className;
    if (className === "notif")
        notification.setAttribute("class", "notif-read");
    else
        notification.setAttribute("class", "notif");
    updateReadCount()
}

function markAllAsRead() {
    const unReadNotifs = document.querySelectorAll(".notif");
    if (unReadNotifs.length != 0) {
        unReadNotifs.forEach(unReadNotif => {
            setToRead(unReadNotif.id)
        });
    }

}
function generateId() {
    const notifs = document.querySelectorAll(".notif,.notif-read");
    console.log(`Count of total notifs:${notifs.length}`);
    const ids = Array.from(notifs).map(notif => {
        return parseInt(notif.id.replace('notif-', ''));
    })
    console.log(ids)
    let max = ids.reduce((a, b) => Math.max(a, b), -Infinity)
    console.log(`Max element is ${max}`)

    let newIds = range(1, max + 1, 1)
    console.log(newIds)
    let unUsedIds = newIds.filter(value => !ids.includes(value))
    if (unUsedIds.length != 0)
        return unUsedIds[0]
    else
        return max + 1;
}

function createNotif() {
    const newNotif = document.getElementById("notif-1").cloneNode(true);
    let newId = generateId();
    console.log(`New Id is ${newId}`);
    newNotif.id = `notif-${newId}`;
    const notifPanel = document.querySelector(".notif-panel");
    notifPanel.appendChild(newNotif);
    updateReadCount()
}