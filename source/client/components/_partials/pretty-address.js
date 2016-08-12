/**
  *
  * Partial - pretty address
  *
  * @param {object} address
  *
  * @return string
  */

export default function (address) {
  const fullAddress = `${address.street} ${address.city}, ${address.state} ${address.zip}`;
  return fullAddress;
}
