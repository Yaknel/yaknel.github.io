import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '@/test/render'
import { sendContactMessage } from './api'
import { ContactForm } from './ContactForm'
import { subjectFromSlug } from './subjects'

describe('subjectFromSlug', () => {
  it('mapea el slug de la URL al asunto', () => {
    expect(subjectFromSlug('taller-mensual')).toBe('Workshop: Taller mensual de escritura somática')
    expect(subjectFromSlug('bruma')).toBe('Shop: Bruma')
    expect(subjectFromSlug('speaking')).toBe('Public speaking / MC')
    expect(subjectFromSlug('nada')).toBe('General enquiry')
    expect(subjectFromSlug(null)).toBe('General enquiry')
  })
})

describe('ContactForm', () => {
  it('muestra errores de validación y no envía', async () => {
    render(<ContactForm />)
    await userEvent.click(screen.getByRole('button', { name: 'SEND MESSAGE' }))
    expect(await screen.findByText('Please tell me your name')).toBeInTheDocument()
    expect(screen.getByText('This email doesn’t look right')).toBeInTheDocument()
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
