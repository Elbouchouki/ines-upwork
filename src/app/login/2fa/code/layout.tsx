export const metadata = {
  title: "Two Factor Login In",
  description: "SIGN IN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
