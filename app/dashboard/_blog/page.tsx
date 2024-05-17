'use client';

import { Button } from '@/components/ui/button';
import { useBlog } from '@/contexts/blog-context';
import { PlusIcon } from 'lucide-react';
import React, { useState } from 'react';
import { NewPost } from './_components/new-post';
import { CloseIcon } from 'yet-another-react-lightbox';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@/contexts/user-context';

const { format } = require('date-fns');
const { ptBR } = require('date-fns/locale');

const Blog = () => {
  const { posts } = useBlog();
  const { user } = useUser();

  const [addingNewPost, setAddingNewPost] = useState(false);

  return (
    <section className="bg-tertiary-black w-full flex flex-col md:pl-[400px] min-h-screen md:p-14 p-10">
      <div className="">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold text-main-red md:mb-[15px]">
            Blog
          </h1>
          {user?.cargos?.includes('Editor') && (
            <Button
              variant="primary"
              className="flex gap-2"
              onClick={() => setAddingNewPost(!addingNewPost)}
            >
              Novo Post
              <PlusIcon className="text-white" />
            </Button>
            // </Link>
          )}
        </div>
      </div>
      <hr className="text-white" />
      {addingNewPost ? (
        <div className="flex flex-col py-14">
          <CloseIcon
            className="text-white w-9 h-9 self-end cursor-pointer"
            onClick={() => setAddingNewPost(!addingNewPost)}
          />
          <NewPost />
        </div>
      ) : (
        <div>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Cover</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Titulo</TableHead>
                <TableHead>Postado em</TableHead>
                <TableHead>Atualizado em</TableHead>
                <TableHead>Autor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts?.data.map((post) => (
                <TableRow className="text-white" key={post.id}>
                  <TableCell>
                    <Image
                      alt={post.attributes.title}
                      src={
                        post?.attributes?.capa?.data?.attributes?.url
                          ? `${post?.attributes?.capa?.data?.attributes?.url}`
                          : ''
                      }
                      width={200}
                      height={200}
                      className="rounded"
                    />
                  </TableCell>
                  <TableCell>{post.id}</TableCell>
                  <TableCell className="w-[450px]">
                    {post.attributes.title}
                  </TableCell>
                  <TableCell>
                    {format(post.attributes.createdAt, 'dd/MM/yyyy - HH:mm', {
                      locale: ptBR,
                    })}
                  </TableCell>
                  <TableCell>
                    {format(post.attributes.updatedAt, 'dd/MM/yyyy - HH:mm', {
                      locale: ptBR,
                    })}
                  </TableCell>
                  <TableCell>
                    {post.attributes.author?.data?.attributes.username}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </section>
  );
};

export default Blog;
