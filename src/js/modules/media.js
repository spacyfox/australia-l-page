function mobileMin() {
  return window.matchMedia('(min-width: 768px)').matches;
}

function mobile() {
  return window.matchMedia('(max-width: 767px)').matches;
}

export {
  mobileMin,
  mobile,
};
