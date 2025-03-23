
export default function ErrorForm({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <span className="text-red-500 text-xs p-1">
        {children}
    </span>
  )
}
