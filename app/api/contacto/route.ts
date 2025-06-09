import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { nombre, email, telefono, mensaje } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `
      <h2>Nuevo mensaje desde la pagina Web</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong><br/>${mensaje}</p>
    `;
    // await resend.domains.get(process.env.RESEND_DOMAIN!);

    const { data, error } = await resend.emails.send({
      from: 'Administrador <admin@grupomstransporte.com>',
      to: 'info@grupomstransporte.com',
      subject: 'Nuevo mensaje de contacto desde la web',
      html
    });

    if (error) {
      // console.log('Error al enviar el correo:', error);
      return Response.json({ error }, { status: 500 });
    }

    // return NextResponse.json({ ok: true });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
