const style = minutes => {
  if (minutes >= 60) {
    return 'comes-tomorrow';
  } else if (minutes < 60 && minutes > 30) {
    return 'comes-today-but-wait-sit';
  } else if (minutes <= 30 && minutes > 15) {
    return 'comes-today';
  } else if (minutes <= 15 && minutes > 5) {
    return 'comes-now';
  } else if (minutes <= 5) {
    return 'comes-right-now';
  }
};

const message = minutes => {
  if (minutes >= 60) {
    return 'más de 1ª hora';
  } else if (minutes < 60) {
    return minutes;
  }
};

const warning = minutes => {
  if (minutes >= 60) {
    return true;
  } else if (minutes < 60) {
    return false;
  }
};

const units = minutes => {
  if (minutes >= 60) {
    return '';
  } else if (minutes < 60 && minutes > 1) {
    return ' minutos';
  } else if (minutes === 1) {
    return ' minuto';
  }
};

export default {
  style: style,
  units: units,
  message: message,
  warning: warning,
};
