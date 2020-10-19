const Common = {
  showLoading() {
    const load = document.getElementById('loading');
    load.classList.add('loader');
  },

  hideLoading() {
    const hide = document.getElementById('loading');
    hide.classList.remove('loader');
  },
};

export default Common;
