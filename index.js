const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  //   console.log(e);
  setTimeout(() => {
    const { pageX, pageY } = e;

    cursor.style.left = `${pageX - 50}px`;
    cursor.style.top = `${pageY - 50}px`;
  }, 100);
});

document.addEventListener("mousedown", (e) => {
  cursor.style.transform = "scale(0.5)";
});

document.addEventListener("mouseup", (e) => {
  cursor.style.transform = "scale(1)";
});
