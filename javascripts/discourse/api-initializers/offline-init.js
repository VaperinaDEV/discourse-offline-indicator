import { apiInitializer } from "discourse/lib/api";

export default apiInitializer(() => {
  const updateOnlineStatus = () => {
    document.body.classList.toggle("offline", !navigator.onLine);
  };

  // set the initial state in case the app boots while already offline
  updateOnlineStatus();

  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
});
