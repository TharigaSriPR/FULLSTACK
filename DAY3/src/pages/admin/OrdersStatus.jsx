const OrdersStatus = () => {
    const paymentsData = [
        {
          invoice: "Standard Plan - Feb 2022",
          date: "07 February, 2022",
          amount: "$59.00",
          status: "Complete"
        },
        {
          invoice: "Premium Plan - Jan 2022",
          date: "09 January, 2022",
          amount: "$99.00",
          status: "Shipped"
        },
        { invoice: 'Standard Plan - Feb 2022', date: '07 February, 2022', amount: '$59.00', status: 'Complete' },
    { invoice: 'Premium Plan - Jan 2022', date: '09 January, 2022', amount: '$99.00', status: 'Shipped' },
    { invoice: 'Basic Plan - Dec 2021', date: '15 December, 2021', amount: '$29.00', status: 'Complete' },
    { invoice: 'Basic Plan - Nov 2021', date: '14 November, 2021', amount: '$29.00', status: 'Pending' },
    { invoice: 'Basic Plan - Oct 2021', date: '15 October, 2021', amount: '$29.00', status: 'Complete' },
      ];
  return (
        <div className="w-screen">
          <div className="mx-auto mt-8 max-w-screen-lg px-2">
            <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
              <p className="flex-1 text-base font-bold text-gray-900">Latest Payments</p>
    
              <div className="mt-4 sm:mt-0">
                <div className="flex items-center justify-start sm:justify-end">
                  <div className="flex items-center">
                    <label htmlFor="" className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
                    <select name="" className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                      <option className="whitespace-no-wrap text-sm">Recent</option>
                    </select>
                  </div>
    
                  <button type="button" className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                    <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" className=""></path>
                    </svg>
                    Export to CSV
                  </button>
                </div>
              </div>
            </div>
    
            <div className="mt-6 overflow-hidden rounded-xl border shadow">
              <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                <thead className="hidden border-b lg:table-header-group">
                  <tr className="">
                    <td width="50%" className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Invoice</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Amount</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
                  </tr>
                </thead>
    
                <tbody className="lg:border-gray-300">
                  {paymentsData.map((payment, index) => (
                    <tr key={index} className="">
                      <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                        {payment.invoice}
                        <div className="mt-1 lg:hidden">
                          <p className="font-normal text-gray-500">{payment.date}</p>
                        </div>
                      </td>
                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{payment.date}</td>
                      <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">{payment.amount}</td>
                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        <div className={`inline-flex items-center rounded-full ${payment.status === 'Complete' ? 'bg-blue-600 text-white' : payment.status === 'Shipped' ? 'bg-green-500 text-white' : 'bg-red-200 text-red-500'} py-2 px-3 text-xs`}>{payment.status}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    
  )
}
const styles = {
    '': {
      fontFamily: 'Source Sans Pro',
    },
    '.w-screen': {
      width: '100vw',
    },
    '.mx-auto': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '.mt-8': {
      marginTop: '2rem',
    },
    // Add more styles here
  };
export default OrdersStatus