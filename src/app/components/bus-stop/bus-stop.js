import React, { PropTypes } from 'react'
import BusRoute from '../bus-route/bus-route'
import colors from '../../styles/colors'
import IconBusStop from '../icons/busStop'

const BusStop = ( { idbs, description, meters, routes } ) => (
    <article className="ktg-bus-stop" key={idbs}>
        <table className="ktg-bus-stop__table">
            <thead className="ktg-bus-stop__header">
                <tr>
                    <th colSpan="2">
                        <div className="ktg-bus-stop__icon">
                            <IconBusStop circleFillColor={ colors.quaternary } circleBorderColor={ colors.grey.light.twenty } busColor={ colors.grey.light.twenty }/>
                        </div>
                        <div className="ktg-bus-stop__info">
                            <span className="ktg-bus-stop__description">
                                {description}
                            </span>
                            <span className="ktg-bus-stop__distance">
                                A {Math.round(meters)} metros de tí
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className="ktg-bus-stop__body">
                { routes.map( route => <BusRoute key={route.idl} name={route.idl} time={route.time}/> ) }
            </tbody>
        </table>
    </article>
)

BusStop.propTypes = {
    routes: PropTypes.array
}

export default BusStop
