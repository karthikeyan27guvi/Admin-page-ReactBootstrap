import React, {createContext} from 'react'


export const DashboardContext = createContext();

function DashboardContextComponent({children}) {
  
    let data = [
        {
            title: "Earning(Monthly)",
            value: "$ 40,000",
            icon: "fa-calendar",
            color: "primary",
            isProgress: false
        },
        {
            title: "Earnings (Annual)",
            value: "$215,000",
            icon: "fa-dollar-sign",
            color: "success",
            isProgress: false
        },
        {
            title: "Tasks",
            value: "100",
            icon: "fa-clipboard-list",
            color: "info",
            isProgress: true
        },
        {
            title: "Pending Requests",
            value: "18",
            icon: "fa-comments",
            color: "warning",
            isProgress: false
        }
    ]

  return <><DashboardContext.Provider value={data}>
    {children}
  </DashboardContext.Provider>
  </>
}

export default DashboardContextComponent
