import Button from './Button';
import './App.scss'

export default function App() {
  return (
    <>
      <h1 className='title'>Labels</h1>
      <Button type='default'>Default</Button>
      <Button type='primary'>Primary</Button>
      <Button type='success'>Success</Button>
      <Button type='info'>Info</Button>
      <Button type='warning'>Warning</Button>
      <Button type='danger'>Danger</Button>
      </>
  )
}


