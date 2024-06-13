import { Header } from '@/components/header'

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />

      {children}
    </div>
  )
}
