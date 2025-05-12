import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

import { Icon } from '@/components'

type SearchForm = {
  keyword: string
}

export const SearchBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const formMethod = useForm<SearchForm>({ defaultValues: { keyword: '' } })
  const { register, handleSubmit } = formMethod

  const handleSearch = (formData: SearchForm) => {
    const params = new URLSearchParams(location.search)

    if (formData.keyword) {
      params.set('keyword', formData.keyword)
    } else {
      params.delete('keyword')
    }
    navigate({
      pathname: location.pathname,
      search: params.toString(),
    })
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
        <Icon name={'search'} size={'3.6rem'} />
      </button>
    </form>
  )
}
