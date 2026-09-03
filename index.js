function showSideBar(show) {
  const sidebar = document.querySelector(".sidebar");
  let flex = show;

  if (flex) {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
}
