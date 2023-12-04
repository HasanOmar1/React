export function changeColor(box) {
  setTimeout(() => {
    box.current.style.background = `red`;
    setTimeout(() => {
      box.current.style.background = `yellow`;
      setTimeout(() => {
        box.current.style.background = `black`;
        setTimeout(() => {
          box.current.style.background = `white`;
          setTimeout(() => {
            box.current.style.background = `skyblue`;
            box.current.style.borderRadius = `50%`;
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}
