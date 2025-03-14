import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <div className="flex flex-col justify-between gap-5 space-y-5 lg:flex-row lg:space-y-0">
          <Card className="border p-10 text-black">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate necessitatibus animi neque excepturi, illo sequi unde et
              ea sapiente quam sint delectus voluptatum debitis labore quaerat,
              obcaecati quasi natus!
            </p>
          </Card>{' '}
          <Card className="border p-10 text-black">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate necessitatibus animi neque excepturi, illo sequi unde et
              ea sapiente quam sint cupiditate delectus voluptatum debitis
              labore quaerat, obcaecati quasi natus!
            </p>
          </Card>
          <Card className="border p-10 text-black">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate necessitatibus animi neque excepturi, illo sequi unde et
              ea sapiente quam sint cupiditate delectus voluptatum debitis
              labore quaerat, obcaecati quasi natus!
            </p>
          </Card>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
