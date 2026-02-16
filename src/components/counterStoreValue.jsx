import React from 'react'
import { useCounterStore } from '../store/counterScore'

function counterStoreValue() {
  const { count } = useCounterStore((state) => state.count);
  return (
    <div>counterStoreValue: {count}</div>
  )
}

export default counterStoreValue