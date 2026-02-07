// Initialize medium zoom.
$(document).ready(function () {
  // 缓存背景颜色，避免重复读取样式
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee";
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: bgColor, // + 'ee' for trasparency.
  });
});
