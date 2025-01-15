import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './QueryMain/QueryMainClient.ts'
import { Provider } from 'react-redux'
import { store } from './ReduxMainToolkit/ReduxMainStore.ts'
import "./input.css"

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>  
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </Provider>
)
