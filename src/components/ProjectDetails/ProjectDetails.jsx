import moment from 'moment'

export default function ProjectDetails({ data }) {

  return (
    <div className="container ">
      <table className="w-full max-w-[850px] mx-auto  my-3 text-left text-[#555555] text-xs md:text-lg">
        <tbody>

          <TableRow key={crypto.randomUUID()} name={'Client'} value={data?.client_name} />
          <TableRow key={crypto.randomUUID()} name={'Location'} value={data?.location} />
          <TableRow key={crypto.randomUUID()} name={'Category'} value={data?.service_name} />
          <TableRow key={crypto.randomUUID()} name={'Start date'} value={moment(data?.start_date).format('MMM Do YY')} />
          <TableRow key={crypto.randomUUID()} name={'Completed date'} value={moment(data?.end_date).format('MMM Do YY')} />
          <TableRow key={crypto.randomUUID()} name={'Budget'} value={data?.budget} />

          {/* <TableRow /> */}
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ name = "value", value = "value" }) {
  return (
    <tr className="border-t border-b border-[#dfe1e7]">
      <td className="max-w-1/2 md:max-w-16 py-2 pl-1 pr-3">{name}</td>
      <td className="text-black py-2 pl-1">{value}</td>
    </tr>
  );
}
