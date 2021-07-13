import * as React from 'react'

export default ({ children }: { children: React.ReactNode }) => (
  <div>
    <h1>My Layout</h1>
    <div>{children}</div>
  </div>
)