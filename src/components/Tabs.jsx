export default function Tabs({buttons, buttonsContainer, children}) {
  return <>
    <menu>
      {buttons}
    </menu>
    {children}
  </>
}