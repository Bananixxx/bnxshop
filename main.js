let allDates = document.querySelectorAll(".date");
console.log(allDates);

window.onload = function startTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        h = checkTime(h);
        m = checkTime(m);
        for (let index = 1; index <= allDates.length; index++) {
                        document.getElementById("date"+index).value =  (h + ":" + m);
        }
        setTimeout(startTime, 1000);
        }

        function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
        }


const onClick = (event) => {
        if (event.target.nodeName === 'LI') {
                for (let i = 1; i <= allDates.length; i++) {
                        let list = document.querySelectorAll('.hidden')
                        list.forEach(element => {
                                element.style.display = "none";
                        });
                }
                document.getElementById(event.target.id + "a").style.display ="block";
        }
      }
window.addEventListener('click', onClick);

function addingDutyStartReport() {
}