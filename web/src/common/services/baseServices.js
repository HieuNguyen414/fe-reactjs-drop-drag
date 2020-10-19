const DEFAULT_LOCALE = 'en';
const callApi = (url,
  config,
  onRequestSuccess,
  onRequestFailure) => {
  if (config.method.toUpperCase() === 'GET') {
    new URL(url);
  } else if (config.body) {
    if (config.body instanceof FormData) {
      config.body.append('locale', config.body.locale || localStorage.LANG || DEFAULT_LOCALE);
    } else {
      const bodyData = JSON.parse(config.body);
      config.body = JSON.stringify(bodyData);
    }
  } else {
    config.body = JSON.stringify({
      locale: localStorage.LANG || DEFAULT_LOCALE,
    });
  }

  fetch(url, config)
    .then((response) => response.json())
    .then((data) => onRequestSuccess(data))
    .catch((err) => onRequestFailure(err));
};

export { callApi, DEFAULT_LOCALE };
