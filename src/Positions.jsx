function Positions({ ticker, quantity, totalPrice, currentPrice }) {
  const avgPrice = totalPrice / quantity;
  const profit = (currentPrice - avgPrice) * quantity;
  const percentage = parseFloat(
    ((currentPrice * quantity) / totalPrice) * 100 - 100
  ).toFixed(2);
  return (
    <tr>
      <td>{ticker}</td>
      <td>{quantity}</td>
      <td>${avgPrice}</td>
      <td>${totalPrice}</td>
      <td>${currentPrice}</td>
      <td>${profit}</td>
      <td>{percentage}%</td>
    </tr>
  );
}

export default Positions;