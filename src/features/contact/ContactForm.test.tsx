import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '@/test/render'
import { sendContactMessage } from './api'
import { ContactForm } from './ContactForm'
import { subjectFromSlug } from './subjects'

describe('subjectFromSlug', () => {
  it('mapea el slug de la URL al asunto', () => {
    expect(subjectFromSlug('taller-mensual')).toBe('Taller: Taller mensual de escritura somática')
    expect(subjectFromSlug('bruma')).toBe('Tienda: Bruma')
    expect(subjectFromSlug('charlas')).toBe('Charlas y presentaciones')
    expect(subjectFromSlug('nada')).toBe('Consulta general')
    expect(subjectFromSlug(null)).toBe('Consulta general')
  })
})

describe('ContactForm', () => {
  it('muestra errores de validación y no envía', async () => {
    render(<ContactForm />)
    await userEvent.click(screen.getByRole('button', { name: 'ENVIAR MENSAJE' }))
    expect(await screen.findByText('Dime tu nombre')).toBeInTheDocument()
    expect(screen.getByText('Este correo no parece válido')).toBeInTheDocument()
  })
})

describe('sendContactMessage', () => {
  it('descarta en silencio los envíos de bots (honeypot)', async () => {
    const fetchMock = vi.fn()
    await sendContactMessage(
      { name: 'x', email: 'x@x.x', subject: 's', message: 'hola hola hola', website: 'spam' },
      fetchMock,
    )
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
