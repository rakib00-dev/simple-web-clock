setInterval(() => {
  let a = new Date();
  let watch = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
  document.getElementById('timer').innerHTML = watch;
}, 1000);
