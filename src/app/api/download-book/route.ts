import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get('name')
  if (!name) {
    return NextResponse.json({ error: 'Missing ?name= parameter' }, { status: 400 })
  }

  // Security: only allow PDFs from the childrens-books directory
  const safeName = path.basename(name).replace(/\.\./g, '')
  if (!safeName.endsWith('.pdf')) {
    return NextResponse.json({ error: 'Only PDF files are allowed' }, { status: 400 })
  }

  const pdfPath = path.join(process.env.HOME || process.env.USERPROFILE || 'C:\\Users\\1990j', 'childrens-books', 'pdfs', safeName)

  if (!fs.existsSync(pdfPath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  const fileBuffer = fs.readFileSync(pdfPath)
  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${safeName}"`,
      'Content-Length': fileBuffer.length.toString(),
    },
  })
}
