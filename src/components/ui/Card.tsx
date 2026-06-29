import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  fun?: 'green' | 'pink' | 'purple' | 'blue' | 'amber' | 'rose' | 'sky' | null
}

function Card({ className, fun, ...props }: CardProps) {
  const funStyles: Record<string, string> = {
    green: 'card-fun-green border-emerald-200',
    pink: 'card-fun-pink border-pink-200',
    purple: 'card-fun-purple border-purple-200',
    blue: 'card-fun-blue border-blue-200',
    amber: 'card-fun-amber border-amber-200',
    rose: 'card-fun-rose border-rose-200',
    sky: 'card-fun-blue border-sky-200',
  }

  return (
    <div
      className={cn(
        'group relative rounded-2xl border border-gray-100 bg-white shadow-sm shadow-emerald-900/5 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1',
        fun && funStyles[fun],
        fun && 'hover:shadow-lg',
        className
      )}
      {...props}
    />
  )
}

function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
}

function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'text-xl font-semibold leading-none tracking-tight font-heading',
        className
      )}
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-gray-500 leading-relaxed', className)} {...props} />
  )
}

function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pt-0', className)} {...props} />
}

function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
