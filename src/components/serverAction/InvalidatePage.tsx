'use server';

import { revalidatePath } from 'next/cache';

export default function invalidatePage() {
  revalidatePath('/');
  revalidatePath('/search');
}
