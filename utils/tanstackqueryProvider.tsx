"use client"

import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from "react"


export default function Provider({ children }: { children: ReactNode }) {
    const [queryClient, setQueryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}