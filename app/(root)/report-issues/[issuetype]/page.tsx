import React from 'react'

interface props {
    issuetype: string
}
const ReportIssueDetailsPage = ({ params }: { params: { issuetype:string } }) => {
  return (
      <div className='h-screen'>
          <h1>ReportIssuesPage {params.issuetype}</h1>
      </div>
  )
}

export default ReportIssueDetailsPage