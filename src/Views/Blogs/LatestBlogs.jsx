import React from 'react'
import CardLatest from './CardLatest'
const Latestblogs = [1,2,3]
function LatestBlogs() {
  return (
    <div className='LatestBlogs'>
      {Latestblogs.map(()=><CardLatest/>)}
    </div>
  )
}

export default LatestBlogs