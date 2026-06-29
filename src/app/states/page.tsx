import { Card, CardContent } from '@/components/ui/Card'
import { ALL_STATES, COVERED_STATES, SCHOOL_CONFIG } from '@/lib/constants'
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react'

const statusIcons = {
  available: { icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  limited: { icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-amber-50' },
  unavailable: { icon: XCircle, color: 'text-gray-300', bg: 'bg-gray-50' },
} as const

export default function StatesPage() {
  return (
    <div className="min-h-screen">
      {/* 🎨 Gradient Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 px-4 py-20 sm:px-6 lg:px-8">
        {/* Decorative floating shapes */}
        <div className="absolute -left-12 top-8 h-40 w-40 animate-float rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-8 bottom-6 h-48 w-48 animate-float rounded-full bg-emerald-200/15 blur-3xl [animation-delay:1s]" />
        <div className="absolute left-1/4 top-4 h-20 w-20 animate-bounce-soft rounded-full bg-teal-200/10 blur-2xl [animation-delay:2s]" />
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block animate-pop rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
            🇺🇸 Where We Serve
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            States We Serve
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-100">
            {SCHOOL_CONFIG.name} currently serves families in the following states. We are
            actively expanding our coverage.
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-pink-300" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Available States */}
        <div className="animate-slide-up">
          <div className="mb-4 flex items-center gap-2">
            <span className="emoji-badge">✅</span>
            <h2 className="text-lg font-semibold text-gray-900">
              Available ({COVERED_STATES.length})
            </h2>
            <span className="ml-auto flex gap-1">
              {['🌟', '🗺️', '📌'].map((emoji, i) => (
                <span key={i} className="animate-wiggle text-base" style={{ animationDelay: `${i * 200}ms` }}>
                  {emoji}
                </span>
              ))}
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {COVERED_STATES.map((state) => (
              <div
                key={state.code}
                className="group flex items-start gap-3 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-200/50"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-sm">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">
                    {state.code} — {state.name}
                  </span>
                  {state.notes && (
                    <p className="mt-1 text-sm text-gray-600">{state.notes}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-12 animate-slide-up [animation-delay:200ms]">
          <Card fun="amber">
            <CardContent className="flex items-start gap-3 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md">
                <Info className="h-5 w-5" />
              </div>
              <div className="text-sm text-amber-800">
                <div className="mb-1 flex items-center gap-2">
                  <span className="emoji-badge">⚖️</span>
                  <p className="font-semibold">Important Legal Note</p>
                </div>
                <p className="mt-1">
                  While {SCHOOL_CONFIG.name} (an Alabama church school) can enroll families
                  from any state, whether your specific state recognizes this arrangement
                  depends on that state&apos;s homeschool laws. We recommend checking with
                  HSLDA or a local attorney if you have questions about your state&apos;s
                  requirements. States marked as &quot;Unavailable&quot; either require in-state
                  school oversight or have additional requirements we cannot currently meet.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All States */}
        <div className="mt-12 animate-slide-up [animation-delay:400ms]">
          <div className="mb-4 flex items-center gap-2">
            <span className="emoji-badge">🗺️</span>
            <h2 className="text-lg font-semibold text-gray-900">Full State Map</h2>
            <span className="ml-auto text-xs text-gray-400">
              {ALL_STATES.length} total
            </span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {ALL_STATES.map((state) => {
              const { icon: Icon, color, bg } = statusIcons[state.status]
              return (
                <div
                  key={state.code}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${bg}`}
                >
                  <Icon className={`h-4 w-4 flex-shrink-0 ${color}`} />
                  <span className="font-medium text-gray-900">{state.code}</span>
                  <span className="text-gray-600">{state.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
          <span className="animate-float text-lg">🌎</span>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
        </div>
      </div>
    </div>
  )
}
