import * as moment from 'moment';

const format = {
  DATE_TIME_FORMAT: 'DD/MM/YYYY HH:mm',
  DATE_TIME_IMPORT_FORMAT: 'D/M/YYYY H:m',
  DATE_TIME_SS_FORMAT: 'DD/MM/YYYY HH:mm:ss',
  DATE_FORMAT: 'DD/MM/YYYY',
  DATE_TIME_FORMAT_REPORT: 'MM月DD日HH:mm',
  DATE_TIME_FORMAT_RETURN: 'YYYY年MM月',
  DATE_IMPORT_FORMAT: 'D/M/YYYY',
  YEAR_MONTH_DATE_FORMAT: 'YYYY-MM-DD',
  DATE_TIME_SS_FORMAT_CONCAT: 'YYYYMMDDHHmmss',
  DATE_TIME_FORMAT_JAPAN: 'YYYY/MM/DD',
};
const formatDateTimeFull = () => moment(new Date()).format('dddd DD - MM');
const getTimeCurrent = (fm) => moment(new Date()).format(fm);
const getTimeUctCurrent = () => moment.utc();
const getYear = Array.from({ length: 1000 }, (v, k) => k + 1900);
const getMonth = Array.from({ length: 12 }, (v, k) => k + 1);
const getDate = Array.from({ length: 31 }, (v, k) => k + 1);

const checkTime = (i) => {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

const timer = () => {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
  return setTimeout(timer, 500);
}

export {
  formatDateTimeFull, getTimeCurrent, getTimeUctCurrent, getYear, getMonth, getDate, timer
};
