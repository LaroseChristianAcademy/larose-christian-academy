import { cn } from '@/lib/utils'
import { forwardRef, type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            'flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:shadow-lg focus:shadow-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-50 hover:border-gray-400',
            error && 'border-red-500 focus:ring-red-500 focus:shadow-red-500/10',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <span>⚠️</span> {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input, type InputProps }
