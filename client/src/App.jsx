import { data } from './medicine'

export const App = () => {
  return (
    <>
      <h1>Medication List</h1>
      <table>
        <tbody>
          <tr>
            <th>sl</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Company</th>
            <th>Drug Type</th>
            <th>Dosage Form</th>
            <th>Strength</th>
            <th>Pack Size</th>
            <th>Unit Price</th>
            <th>Therapeutic Class</th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{(index + 1) < 9 ? `0${index + 1}` : (index + 1)}</td>
                <td>{item.genericName}</td>
                <td>{item.brandName}</td>
                <td>{item.companyName}</td>
                <td>{item.drugType}</td>
                <td>{item.dosageForm}</td>
                <td>{item.strength}</td>
                <td>{item.packSize}</td>
                <td>BDT {item.unitPrice}</td>
                <td>{item.therapeuticClass}</td>
              </tr>
            )})}
        </tbody>
      </table>
    </>
  )
}
