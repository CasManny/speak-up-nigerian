import React from 'react'
import ReportedIssue from './ReportedIssueItemCard'
import { IReportedIssue } from '@/types'


const ReportedIssues = ({ data }: { data: IReportedIssue[]}) => {
  return (
      <div className='flex flex-wrap w-full gap-2 mx-auto mt-10'>
          {data.map((item, index) => (
            <ReportedIssue item={item} />
        ))}
    </div>
  )
}

export default ReportedIssues