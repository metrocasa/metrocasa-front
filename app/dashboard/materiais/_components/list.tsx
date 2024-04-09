import { Imovel, useImoveis } from '@/contexts/imoveis-context';

import { Button } from '@/components/ui/button';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  TableCaption,
} from '@/components/ui/table';
import Link from 'next/link';
import { DownloadIcon, EyeIcon } from 'lucide-react';

const List = ({ imoveis }: { imoveis: Imovel[] }) => {
  console.log(imoveis[1].attributes.materiais?.books.fase_1);

  return (
    <Table className="text-white">
      <TableCaption>Esta é a lista completa de empreendimentos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Empreendimento</TableHead>
          <TableHead className="w-[230px]">Status</TableHead>
          <TableHead>R.I</TableHead>
          <TableHead className="w-[430px]">Books</TableHead>
          <TableHead className=" w-[100px]">Ver</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {imoveis.map((imovel, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">
              {imovel.attributes.title}
            </TableCell>
            <TableCell>
              <span className={'font-bold'}>{imovel.attributes?.status}</span>
            </TableCell>

            <TableCell>
              <Link
                href={imovel.attributes.materiais?.ri}
                className="p-5 rounded-lg"
              >
                <DownloadIcon className="w-5 h-5 text-main-red" />
              </Link>
            </TableCell>

            <TableCell className="flex gap-2 items-center h-full">
              {/* FASE 1 */}
              <Button
                variant={'primary'}
                disabled={!imovel?.attributes.materiais?.books.fase_1}
              >
                <Link
                  className="flex gap-3 items-center"
                  href={
                    imovel?.attributes.materiais?.books.fase_1
                      ? imovel?.attributes.materiais?.books.fase_1
                      : '/dashboard/materiais'
                  }
                  download
                >
                  <DownloadIcon className="w-4 h-4 text-white" />
                  Fase 1
                </Link>
              </Button>

              {/* FASE 2 */}
              <Button
                variant={'primary'}
                disabled={!imovel?.attributes.materiais?.books.fase_2}
              >
                <Link
                  className="flex gap-3 items-center"
                  href={
                    imovel?.attributes.materiais?.books.fase_2
                      ? imovel?.attributes.materiais?.books.fase_2
                      : '/dashboard/materiais'
                  }
                  download
                >
                  <DownloadIcon className="w-4 h-4 text-white" />
                  Fase 2
                </Link>
              </Button>

              {/* FASE 3 */}
              <Button
                variant={'primary'}
                disabled={!imovel?.attributes.materiais?.books.fase_3}
              >
                <Link
                  className="flex gap-3 items-center"
                  href={
                    imovel?.attributes.materiais?.books.fase_3
                      ? imovel?.attributes.materiais?.books.fase_3
                      : '/dashboard/materiais'
                  }
                  download
                >
                  <DownloadIcon className="w-4 h-4 text-white" />
                  Fase 3
                </Link>
              </Button>
            </TableCell>

            <TableCell>
              <Link
                href={`/empreendimentos/${imovel.attributes.slug}/${imovel.id}`}
              >
                <EyeIcon className="w-5 h-5 text-main-red " />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default List;
