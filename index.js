// Your code goes here

  document.addEventListener("DOMContentLoaded", function() {
    let banana = document.getElementById('text')
    banana.textContent = "This is really cool!"
  });
  



  //class EventEmitter {
  //constructor(id) {
    //this.events = {};
    //this.id = id;
  //}

  //addEventListener(eventType, listener) {
    //if (!this.events[eventType]) {
      //this.events[eventType] = [];
    //}

    //this.events[eventType].push(listener);
  //}

  //fire(eventType, eventProperties) {
    //if (this.events[eventType]) {
      //this.events[eventType].forEach(listener => listener(eventProperties));
    //}
  //}
//}