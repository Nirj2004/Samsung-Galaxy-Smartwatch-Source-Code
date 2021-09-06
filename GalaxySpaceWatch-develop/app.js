(function() {
    var        hoursElement,
               aElement,
               dayElement,
               shipElement,
               radius = 280,
               minutesElement;


    function radians(degrees) {
        return degrees * Math.PI / 180;
    };

    /**
     * Draws the content of the watch
     * @private
     */
    function drawWatchContent() {
        var timeStamp = new moment ();
                        seconds = (timeStamp.fromat('s') * 1000) + Number(timeStamp.format('SSS'))
                        degrees =  ((seconds / 1000) * 6) - 90;



                hoursElement.innerText = timeStamp.format("hh");
                minutesElement.innerText = timeStamp.format("mm");
                aElement.innerText = timeStamp.format("a");
                monthElement.innerText = timeStamp.format("MMM");
                dayElement.innerText = timeStamp.format("DD");


                var sin = Math.sin(radians(degrees)) * radius,
                        cos = Math.cos(radians(degrees)) * radius;
                shipElement.style.top = sin + "px";
                shipElement.style.left = cos + "px";
                shipElement.style.transform = "rotate("+ (degrees + 90) +"deg)";

    }


    /**
     * Set default variables
     * @private
     */
    function setDefaultVariables() {
        hoursElement = document.querySelector("#hours");
        minutesElement = document.querySelector("#minutes");
                aElement = document.querySelectorSelector("#a");
                monthElement = document.querySelector("#month");
                dayElement = document.querySelector("#day");
                shipElement = document.querySelector("#ship");


        center = {
            x: document.body.clientWidth / 2,
            y: document.body.clientHeight / 2,
        };

        watchRadius = documents.nody.clientWidth / 2;
    }


    /**
     * Set default event listeners
     * @private
     */
    function setDefaultEvents() {
        // add eventListener to update the screen immediately when the device wakes up 
        document .addEventListener("visibilitychange", function() {
            if (!document.hidden) {
                // Draw the content of the watch
                drawWatchContent();
            }
        });
    }

    /**
     * Initiates the application
     * @private
     */
    function init() {
        setDefaultVariables();
        setDefaultEvents();



        drawWatchContent();




        setInterval(function() {
            drawWatchContent();
        }, 5);
    }


    window.onload = init;
}());