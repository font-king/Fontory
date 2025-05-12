import { useForm } from 'react-hook-form'

import { Icon } from '@/components'

import { useSearchNavigate } from '../hooks/useSearchNavigate'

type SearchForm = {
  keyword: string
}

export const SearchBar = () => {
  const formMethod = useForm<SearchForm>({ defaultValues: { keyword: '' } })
  const { register, handleSubmit } = formMethod
  const { goSearch } = useSearchNavigate()

  const handleSearch = ({ keyword }: SearchForm) => {
    goSearch(keyword)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="rounded-box bg-background flex items-center gap-5 px-7 py-5"
    >
      <input
        {...register('keyword')}
        placeholder="폰트 이름을 입력해주세요."
        className="p4 text-primary placeholder:text-placeholder grow"
      />

      <button type="submit" className="cursor-pointer">
        <Icon name="search" size={'3.6rem'} />
      </button>
    </form>
  )
}
