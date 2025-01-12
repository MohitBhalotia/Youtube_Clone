export const convertRawtostring = (labelValue, isSub = false) => {
  const num = Math.abs(Number(labelValue));

  if (num >= 1e9) {
    return (num / 1e9).toFixed(0) + "B";
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(0) + "M";
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(isSub ? 2 : 0) + "K";
  }

  return num.toString();
};
