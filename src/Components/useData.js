import React, {useState, useEffect} from 'react'
import resumeDataJson from "./resumeData.json"

function useData() {
    const [resumeData, setResumeData] = useState([])

    useEffect(() => {
    fetch(resumeDataJson)
    .then((response) => response.json())
    .then((data) => {
      setResumeData(data)
    })
    return resumeData
  }, [])
  
}

export default useData