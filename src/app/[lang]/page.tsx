import Image from "next/image";
import { getDictionary, ILocale } from "@infrastructure/i18n/get-dictionary";
import { getQueryClient } from "@infrastructure/libs/tanstackQuery";
import todoService from "@features/todo/service";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import TodoClient from "@views/Public/TodoPage";

export default async function Todo({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as ILocale);

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: () => todoService.getTodos(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TodoClient data={queryClient.getQueryData(['todos'])} />
    </HydrationBoundary>
  );
}
