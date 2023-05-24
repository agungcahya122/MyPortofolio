import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { DataType } from '../utils/DataType'
import test from "../dummy/experience.json"

const Detail = () => {
  const { id } = useParams()
  const [data,] = useState<DataType[]>(test)
  const [dataDetail, setDataDetail] = useState<DataType[]>([])

  const newData = async (id: string) => {
    const newDataDetail = data.filter(item => parseInt(id) === item.id);
    console.log(newDataDetail)
    setDataDetail(newDataDetail)
  }

  useEffect(() => {
    if (id) {
      newData(id)
    }
  }, [])

  console.log("test", dataDetail)


  return (
    <div>
      <h1>TEST Detail</h1>
      <h1>TEST ID : {id}</h1>
    </div>
  )
}

export default Detail
