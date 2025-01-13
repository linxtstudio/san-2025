export const formatRupiah = (price) => {
  if (!price) {
    return 'IDR 0';
  }
  return `IDR ${price.toLocaleString('id')}`;
};
