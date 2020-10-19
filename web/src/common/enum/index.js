const confirmType = {
  confirm_ok: 1,
  confirm: 2,
  download: 3,
  only_close: 4,
};

const getCookie = (cookie) => {
  return document.cookie.split(';').reduce((prev, c) => {
    var arr = c.split('=');
    return (arr[0].trim() === cookie) ? arr[1] : prev;
  }, undefined);
}

export { confirmType, getCookie };
