import React, { useState } from 'react'
import PropTypes from 'prop-types'

function clock(userData) {
    const [useData, setuseData] = useState(useData);
    useEffect(() => {
        const intervalAge = setInterval(() => {
          actualiceUser();
        }, 1000);
        return () => {
          clearInterval(intervalAge);
        };
      });
      const actualiceUser = () => {
        return setUser({
          fecha: user.fecha,
          edad: user.edad + 1,
          nombre: user.nombre,
          apellidos: user.apellidos,
        });
      };
  return (
    <div>
    <h2>
      Hora Actual:
      {userData.fecha.toLocaleTimeString()}
    </h2>
    <h3>
      {userData.nombre} {userData.apellidos}
    </h3>
    <h1>Edad: {userData.edad}</h1>
  </div>
);
};


clock.propTypes = {}

export default clock
D