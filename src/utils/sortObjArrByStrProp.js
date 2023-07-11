export const sortObjArrByStrProp = (a, b, prop) => {
  const uppercasePropA = a[prop].toUpperCase();
  const uppercasePropB = b[prop].toUpperCase();
  if (uppercasePropA < uppercasePropB) return -1;
  if (uppercasePropA > uppercasePropB) return 1;
  return 0;
};
