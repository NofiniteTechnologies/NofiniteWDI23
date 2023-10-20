import Provider from './provider';
export const metadata= {
  title: 'WDI2023',
  description: 'Generated by create next app',
}

export default function RootLayout({children}) 
{
  return (
    <html lang="en">
      <body>
         <Provider>
           {children}
         </Provider>
      </body>
    </html>
  )
}
