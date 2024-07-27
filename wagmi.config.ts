import { http, createConfig } from 'wagmi'
import { polygonAmoy, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
    chains: [polygonAmoy, sepolia],
    connectors: [
        injected(),
    ],
    ssr: true,
    transports: {
        [polygonAmoy.id]: http(),
        [sepolia.id]: http(),
    },
})

declare module 'wagmi' {
    interface Register {
        config: typeof config
    }
}
