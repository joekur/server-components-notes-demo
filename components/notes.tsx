// import { useSearchParams } from 'next/navigation'
import NoteList from 'components/note-list'

export type Note = {
  id: string
  created_by: string
  title: string
  body: string
  updated_at: number
}

export const Notes = async ({ notes }: { notes: Note[] }) => {
  // const searchParams = useSearchParams()
  // const search = searchParams.get('q')

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return <NoteList notes={notes} searchText={''} />
}
