export default {
  formateDate(time) {
    if (!time) {
      return '';
    }
    let date = new Date(time);

    return (
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds() +
      ' / ' +
      date.getDate() +
      '-' +
      date.getMonth() +
      '-' +
      date.getFullYear()
    );
  }
};
