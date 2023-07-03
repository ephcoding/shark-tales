export const sortObjArrByStrProp = (a, b, prop) => {
  const propA = a[prop].toUpperCase();
  const propB = b[prop].toUpperCase();
  if (propA < propB) return -1;
  if (propA > propB) return 1;
  return 0;
};
