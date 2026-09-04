const BACKGROUND_CLASSES = {
  light: 'bg-white',
  offwhite: 'bg-slate-50',
  dark: 'bg-brand-navy text-white',
  'dark-gradient': 'bg-gradient-to-br from-brand-navy to-brand-dark-slate text-white',
  gradient: 'bg-gradient-to-br from-sky-50 to-slate-50',
  'brand-gradient': 'bg-gradient-to-br from-brand-blue to-blue-800 text-white',
}

export default function Section({
  id,
  title,
  description,
  background = 'light',
  maxWidth = 'max-w-container',
  titleClassName = '',
  className = '',
  children,
}) {
  return (
    <section
      id={id}
      className={`${BACKGROUND_CLASSES[background]} px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24 ${className}`}
    >
      <div className={`mx-auto w-full ${maxWidth}`}>
        {title && (
          <h2
            className={`text-center font-semibold text-2xl md:text-[32px] leading-tight mb-6 ${
              background === 'dark' || background === 'dark-gradient' || background === 'brand-gradient'
                ? 'text-white'
                : 'text-brand-navy'
            } ${titleClassName}`}
          >
            {title}
          </h2>
        )}
        {description && (
          <p
            className={`text-center max-w-2xl mx-auto mb-12 leading-relaxed ${
              background === 'dark' || background === 'dark-gradient' || background === 'brand-gradient'
                ? 'text-slate-200'
                : 'text-slate-600'
            }`}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
