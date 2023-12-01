// Sidebar Toggle

const sidebarToggle = () => {
  // Variables
  const toggle = document.querySelector(".toggle-btn");
  const close = document.querySelector(".close-button");
  const dashboard = document.querySelector(".dashboard");

  // Function
  const clickEvent = () => {
    dashboard.classList.toggle("db-active");
    dashboard.classList.toggle("close-active");
  };

  // Events
  toggle.addEventListener("click", clickEvent);
  close.addEventListener("click", clickEvent);
};

// Date Picker
$(function () {
  $(".datepicker")
    .datepicker({
      autoclose: true,
      todayHighlight: true,
    })
    .datepicker("update", new Date());
});
