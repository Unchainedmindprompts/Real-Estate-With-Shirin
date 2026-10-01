import { handleContact } from '@/lib/contact-delivery'

export const runtime = 'nodejs'
export const maxDuration = 15

export async function POST(request: Request) {
  return handleContact(request)
}
