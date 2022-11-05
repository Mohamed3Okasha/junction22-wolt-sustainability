import {useState, useEffect} from 'react';
import {getApproxDeliveryTime} from '../../wolt-api/utisl'

interface WoltApproxDeliveryPros {
  from_location: string,
  to_location: string
}

const WoltApproxDeliveryTime = ({
  from_location,
  to_location
}: WoltApproxDeliveryPros) => {
  const [data, setData] = useState({"approx_time": -1});

  const MINUTE_MS = 30000;

  useEffect(() => {
    const fetchData = async () => {
      const approxDeliveryTime: number = await getApproxDeliveryTime(from_location, to_location)
      setData({"approx_time": approxDeliveryTime})
    }

    fetchData().catch(console.error)
    const interval = setInterval(async () => {
      fetchData().catch(console.error)
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [])

  return (
    <p>Approximate delivery time from {from_location} to {to_location}: {data.approx_time} minutes</p>
  );
};

export default WoltApproxDeliveryTime;
