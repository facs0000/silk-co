import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const { nombre, correo, telefono } = await request.json()

  if (!nombre || !correo || !telefono) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'Silk Co. <onboarding@resend.dev>',
      to: 'francocapurro2@gmail.com',
      subject: `Nuevo contacto desde Silk Co. — ${nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #0f1322; margin-bottom: 24px;">Nuevo contacto desde Silk Co. 🎉</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 14px; width: 120px;">Nombre</td>
              <td style="padding: 10px 0; color: #0f1322; font-weight: 600; font-size: 14px;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 14px;">Correo</td>
              <td style="padding: 10px 0; color: #0f1322; font-weight: 600; font-size: 14px;">
                <a href="mailto:${correo}" style="color: #e05a4b;">${correo}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 14px;">Teléfono</td>
              <td style="padding: 10px 0; color: #0f1322; font-weight: 600; font-size: 14px;">
                <a href="tel:${telefono}" style="color: #e05a4b;">${telefono}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            <a href="https://wa.me/56994853468?text=Hola%20${encodeURIComponent(nombre)}%2C%20te%20contactamos%20desde%20Silk%20Co."
               style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 100px; text-decoration: none; font-size: 14px; font-weight: 500;">
              Responder por WhatsApp
            </a>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Error al enviar el mensaje' }, { status: 500 })
  }
}
