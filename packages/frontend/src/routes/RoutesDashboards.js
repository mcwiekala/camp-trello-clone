import { Route, Routes } from 'react-router-dom'

const RoutesDashboards = () => (
  <Routes>
    <Route path="dashboards" element={<div>dashboards</div>} />
    <Route path="dashboard/:id" element={<div>dashboard/:id</div>} />
  </Routes>
)
export default RoutesDashboards
