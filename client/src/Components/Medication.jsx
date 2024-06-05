import { data } from '../medicine'

export const Medication = () => {
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
            <th>Dosage Form</th>
            <th>Strength</th>
            <th>Pack Size</th>
            <th>Unit Price</th>
            <th>Therapeutic Class</th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{(index + 1) < 10 ? `0${index + 1}` : (index + 1)}</td>
                <td>
                  {typeof (item.genericName) === 'object' ?
                    Object.keys(item.genericName).map((name, index) => {
                      return (
                        <ul key={index}><li>{item.genericName[name]}</li></ul>
                      )
                    })
                    : item.genericName}
                </td>
                <td>{item.brandName}</td>
                <td>{item.companyName}</td>
                <td>
                  {typeof (item.dosageForm) === 'object' ?
                    Object.keys(item.dosageForm).map((name, index) => {
                      return (
                        <ul key={index}><li>{item.dosageForm[name]}</li></ul>
                      )
                    })
                    : item.dosageForm}
                </td>
                <td>
                  {typeof (item.strength) === 'object' ?
                    Object.keys(item.strength).map((name, index) => {
                      return (
                        <ul key={index}><li>{item.strength[name]}</li></ul>
                      )
                    })
                    : item.strength}
                </td>
                <td>
                  {typeof (item.packSize) === 'object' ?
                    Object.keys(item.packSize).map((name, index) => {
                      return (
                        <ul key={index}><li>{item.packSize[name]}</li></ul>
                      )
                    })
                    : item.packSize}
                </td>
                <td>
                  {typeof (item.unitPrice) === 'object' ?
                    Object.keys(item.unitPrice).map((name, index) => {
                      return (
                        <ul key={index}><li>BDT {item.unitPrice[name]}</li></ul>
                      )
                    })
                    : `BDT ${item.dosageForm !== 'Suspension' ? Number(item.unitPrice).toFixed(2) : item.unitPrice}`}
                </td>
                <td>{item.therapeuticClass}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
