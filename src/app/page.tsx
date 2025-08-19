import Content from '../components/Content';

interface IMain {
  children: React.ReactNode;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Main({ children, searchParams }: IMain) {
  const query = searchParams?.query as string | undefined;
  const page = searchParams?.page as string | undefined;

  return (
    <div className="main-left">
      <Content searchParams={{ query, page }} />
      {children}
    </div>
  );
}
