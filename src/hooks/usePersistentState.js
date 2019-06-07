import { useState } from 'react'

export default starter => {
  const initialValue = JSON.parse(localStorage.getItem('data')) || starter;

  const [data, setData] = useState(initialValue);

  const setPersistentData = object => {
    setData(object);
    localStorage.setItem('data', JSON.stringify(object))
  }

  return [data, setPersistentData];
}