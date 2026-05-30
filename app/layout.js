import './globals.css'

export const metadata = {
  title: 'Elite Charter Tours | Charter & Tour Bus Services',
  description: 'Luxury charter and tour bus transportation for corporate travel, school trips, weddings, and private tours.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
