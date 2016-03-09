import React from 'react';

export default class BusRoute extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <tr className="ktg-bus-route">
        <td className="ktg-bus-route__id">
          L61
        </td>
        <td className="ktg-bus-route__time">
          10 min
        </td>
      </tr>
    );
  }
}
