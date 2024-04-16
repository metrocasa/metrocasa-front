'use server';

export async function anapro(FormData: FormData) {
  const name = FormData.get('name') as string;
  const email = FormData.get('email') as string;
  const phone = FormData.get('phone') as string;

  // return name;
}
