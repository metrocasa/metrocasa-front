'use server';

const key = 'wz2O9Z9BawY1';
const canal_key = '7aTeATm50Tk1';
// const campanha_peca = campanha_key;
const key_integradora = '883F81F3-32BF-4A1F-BE1D-71E93E900832';
const key_agencia = '883F81F3-32BF-4A1F-BE1D-71E93E900832';
const endpoint =
  'https://crm.anapro.com.br/webcrm/webapi/integracao/v2/CadastrarProspect';

export async function addLead({ name }: { name: string }) {
  // const name = formData.get('name') as string;
  // const email = formData.get('email') as string;
  // const phone = formData.get('phone') as string;

  console.log('DADOS: ', name);

  return name;
}

// const body = {
//   Key: key,
//   // CampanhaKey: campanha_key,
//   // ProdutoKey: produto_key,
//   CanalKey: canal_key,
//   // CampanhaPeca: campanha_peca,
//   PoliticaPrivacidadeKey: '',
//   Midia: title,
//   PessoaNome: nome,
//   PessoaEmail: email,
//   Observacoes: obs,
//   KeyIntegradora: key_integradora,
//   KeyAgencia: key_agencia,
//   PessoaTelefones: [
//     {
//       DDD: ddd,
//       Numero: telefone,
//     },
//   ],
// };
