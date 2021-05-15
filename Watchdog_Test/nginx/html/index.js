/**
 * Name: Joseph Chao
 * Date: 10/29
 * Section: CSE 154 AJ, Lauren Krieger
 *
 * -- your description of what this file does here --
 * Do not keep comments from this template in any work you submit (functions included under "Helper
 * functions" are an exception, you may keep the function names/comments of id/qs/qsa/gen)
 */
 "use strict";

 (function() {
 
    window.addEventListener("load", init);
    function init() {
        let tempBtn = id("temperature_button");
        let humBtn = id("humidity_button");
        let alarmBtn = id("alarm_button");
        let cameraBtn = id("camera_button");
        tempBtn.addEventListener("click", showTempGraph);
        humBtn.addEventListener("click", showHumGraph);
        cameraBtn.addEventListener("click", showCamVideo)
    }

    function showTempGraph() {
        let allGraphs = qsa("#dashboard div");
        for (let i = 0; i < allGraphs.length; i++) {
            allGraphs[i].classList.add("hidden");
        }
        let graph = id("temp_Graph");
        graph.classList.remove("hidden");
    }

    function showHumGraph() {
        let allGraphs = qsa("#dashboard div");
        for (let i = 0; i < allGraphs.length; i++) {
            allGraphs[i].classList.add("hidden");
        }
        let graph = id("hum_Graph");
        graph.classList.remove("hidden");
    }

    function showCamVideo() {
        let allGraphs = qsa("#dashboard div");
        for (let i = 0; i < allGraphs.length; i++) {
            allGraphs[i].classList.add("hidden");
        }
        let graph = id("cam_Video");
        graph.classList.remove("hidden");
    }

    /** ------------------------------ Helper Functions  ------------------------------ */
    /**
    * Note: You may use these in your code, but remember that your code should not have
    * unused functions. Remove this comment in your own code.
    */

        /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} idName - element ID
     * @returns {object} DOM object associated with id.
     */
    function id(idName) {
        return document.getElementById(idName);
    }

    /**
     * Returns the first element that matches the given CSS selector.
     * @param {string} selector - CSS query selector.
     * @returns {object} The first DOM object matching the query.
     */
    function qs(selector) {
        return document.querySelector(selector);
    }

    /**
     * Returns the array of elements that match the given CSS selector.
     * @param {string} selector - CSS query selector
     * @returns {object[]} array of DOM objects matching the query.
     */
    function qsa(selector) {
        return document.querySelectorAll(selector);
    }

    /**
     * Returns a new element with the given tag name.
     * @param {string} tagName - HTML tag name for new DOM element.
     * @returns {object} New DOM object for given HTML tag.
     */
    function gen(tagName) {
        return document.createElement(tagName);
    }


})();
    