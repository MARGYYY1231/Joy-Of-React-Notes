import React from 'react';
import format from 'date-fns/format';

function Clock() {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const intervalID = window.setInterval(() => {
      setTime(new Date());
    });

    return () => {
      window.clearInterval(intervalID);
    };
  }, []);

  return <p className="clock">{format(time, 'hh:mm:ss a')}</p>;
}

export default Clock;