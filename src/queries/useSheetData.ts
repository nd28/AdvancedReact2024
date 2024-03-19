import { useQuery } from "@tanstack/react-query"

const getSheetByName = (name: string) => async () => {
  console.log(name)
  const data = await fetch(import.meta.env.VITE_API);
  const jsonArray = await data.json();
  return jsonArray;
}

interface SheetOptions { sheetName: string; }

export const useSheetData = (options: SheetOptions) => useQuery({
  queryKey: ['sheet', options.sheetName],
  queryFn: getSheetByName(options.sheetName)
})
