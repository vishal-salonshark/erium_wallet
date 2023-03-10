import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'


const Swap = () => {

  const Theme = {
    borderRadius: 0,
    primary: '#FFF',
    secondary: '#A9A9A9',
    interactive: '#0089EC',
    container: '#222633',
    module: '#4E4E5A',
    accent: '#89CDB3',
    outline: '#030214',
    dialog: '#000',
    fontFamily: 'Josefin Sans',
  }

  return (
    <div className='h-[30rem] mt-3 px-3 text-lg text-white overflow-auto scrollbar-none'>
      <SwapWidget theme={Theme} />
    </div>
  )
}

export default Swap