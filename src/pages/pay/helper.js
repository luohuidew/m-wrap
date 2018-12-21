window.close = function (res) {
  // console.log(66666);
  console.log(res);
  if (res.type == 1000) {
    window.location.replace(
      location.origin + "/callback?order_no=" + order_params.data.order_no
    );
  }
}