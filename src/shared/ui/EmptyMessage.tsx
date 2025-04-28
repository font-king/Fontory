type Props = {
  message: string
}

export const EmptyMessage = ({ message }: Props) => {
  return <p className="flex-center p2 text-grey h-48 w-full">{message}</p>
}
