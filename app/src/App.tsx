import { useState } from 'react'
import { ai } from './ai'

function App() {
  const [reply, setReply] = useState<string>()

  async function ping() {
    const res = await ai.complete({ messages: [{ role: 'user', content: 'Olá, Trama!' }] })
    setReply(`${res.text} (${res.provider})`)
  }

  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: 'var(--space-16) var(--space-4)' }}>
      <p style={{ color: 'var(--color-accent-text)', fontWeight: 600, margin: 0 }}>Em construção</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', margin: 'var(--space-2) 0' }}>
        Trama
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Ferramenta de AI que conecta craft e criação de interfaces a dados, métricas e embasamento de UX.
        Esta é a base do produto: o provedor de AI ainda é um mock.
      </p>
      <button
        onClick={ping}
        style={{
          font: 'inherit', fontWeight: 600, cursor: 'pointer', border: 0,
          padding: 'var(--space-3) var(--space-6)', borderRadius: 'var(--radius-pill)',
          background: 'var(--color-accent-strong)', color: 'var(--color-on-accent)',
        }}
      >
        Testar camada de AI
      </button>
      {reply && <p role="status" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>{reply}</p>}
      <p><a href="../" style={{ color: 'var(--color-accent-text)' }}>← Voltar ao hub</a></p>
    </main>
  )
}

export default App
