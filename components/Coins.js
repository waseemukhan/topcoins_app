import NumberFormat from 'react-number-format';
import Table from 'react-bootstrap/Table'

function Coins({ coinsData }) {
  return (
    <div className="flex justify-center ">
      <Table striped bordered hover variant="dark">
        <thead className="text-left ">
          <tr className="space-x-4">
            <th className=" px-10 py-4">Rank</th>
            <th className=" px-10 py-4">Name</th>
            <th className="">Price</th>
            <th className="">Price Change <sup>(24)</sup>{" "}</th>
            <th className="">Market Cap</th>
            <th className="">
              Volume <sup>(24)</sup>{" "}
            </th>
          </tr>
        </thead>
        <tbody className="">
          {coinsData.map((coin) => {
            const rank = coin.cmc_rank;
            const price = coin.quote.USD.price;
            const volume_24h = coin.quote.USD.volume_24h;
            const market_cap = coin.quote.USD.market_cap;
            const percentage_24h = coin.quote.USD.percent_change_24h;

            return (
              <tr key={coin.id} className=" border-t border-b ">
                <td className=" py-6 px-10">
                  {rank}
                </td>
                <td className=" py-6 px-10">
                  {coin.name}
                  <span className="text-gray-600"> {coin.symbol}</span>
                </td>
                <td>
                  <NumberFormat value={price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </td>
                <td
                  className={
                    percentage_24h > 1 ? "text-green-400" : "text-black"
                  }
                >
                  {percentage_24h.toFixed(2)}%
                </td>
                <td>
                  <NumberFormat value={market_cap.toFixed(0)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </td>
                <td>
                  <NumberFormat value={volume_24h.toFixed(0)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Coins;