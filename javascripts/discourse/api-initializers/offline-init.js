export default {
  name: "offline-indicator",
  initialize() {
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline',  updateOnlineStatus);

    function updateOnlineStatus(event) {
      if (!navigator.onLine) {
        document.body.classList.add("offline");
      } else {
        document.body.classList.remove("offline");
      }
    }
  },
};
