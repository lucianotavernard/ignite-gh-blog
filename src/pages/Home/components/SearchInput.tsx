import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

type SearchInputProps = {
  onSubmit: (query: string) => void
  totalCount?: number
}

const searchFormValidationSchema = zod.object({
  query: zod.string()
})

type SearchFormInput = zod.infer<typeof searchFormValidationSchema>

export function SearchInput({ onSubmit, totalCount = 0 }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormValidationSchema)
  })

  function handleNewSearchPosts(data: SearchFormInput) {
    onSubmit(data.query)
  }

  return (
    <form
      onSubmit={handleSubmit(handleNewSearchPosts)}
      className="flex flex-col w-full mt-16 mb-12"
    >
      <hgroup className="flex justify-between items-center mb-3">
        <h3 className="text-lg text-[#C4D4E3]">Publicações</h3>
        <span className="text-sm text-[#7B96B2]">{totalCount} publicações</span>
      </hgroup>

      <input
        className="transition-all p-3 border border-[#1C2F41] rounded-md outline-0 bg-[#040F1A] text-[#AFC2D4] focus:border-[#3294F8] placeholder:text-[#3A536B]"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </form>
  )
}
