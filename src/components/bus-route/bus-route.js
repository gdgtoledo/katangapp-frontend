import React from 'react'

const BusRoute = ( { idbr, name, time } ) => (
    <tr className="ktg-bus-route" key={idbr}>
        <td className="ktg-bus-route__name">
            {name}
        </td>
        <td className="ktg-bus-route__time">
            {time}
        </td>
    </tr>
)

export default BusRoute
