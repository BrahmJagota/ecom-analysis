import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import Analysis from './pages/dashboard/analysis'
const queryClient = new QueryClient()

function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
   <Analysis />
    </QueryClientProvider>
  )
}

export default App
