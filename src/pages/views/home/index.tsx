import React from 'react'
import { useHistory } from 'react-router-dom'
import HotCrypto from './hot-cryto'
import HotStock from './hot-stock'

// images
import banner1 from '../../../images/banner1.jpg'
import go from '../../../images/go.svg'
import activeGo from '../../../images/active-go.svg'
import sign from '../../../images/sign.svg'
import global from '../../../images/global.svg'
import wallet from '../../../images/wallet.svg'

const Home: React.FC = () => {
	const history = useHistory()

	return (
		<>
			<header className="w-full h-40 rounded-lg overflow-hidden">
				<img src={banner1} />
			</header>

			<main>
				<div className="my-2 flex items-center">
					<img className="mr-2 h-4" src={sign}/>
					<span>快捷功能</span>
				</div>

				<div className="flex justify-between font-bold">
					<div onClick={ () => history.push('/trade') } className="relative mr-2 py-1 px-2 w-1/2 h-18 bg-active rounded-lg">
						<div className="mb-2 text-blue">電子錢包</div>
						<span className="text-sm">前往</span>
						<img className="inline-block h-3" src={ go } />
						<img className="absolute bottom-2 right-4 h-10 transform -rotate-12" src={wallet} />
					</div>

					<div onClick={ () => history.push('/assets') } className="relative ml-2 py-1 px-2 w-1/2 h-18 bg-secondary rounded-lg">
						<div className="mb-2">資產管理</div>
						<span className="text-sm">前往</span>
						<img className="inline-block h-3" src={ go } />
						<img className="absolute bottom-2 right-4 h-10 transform -rotate-12" src={global} />
					</div>
				</div>

				<div className="my-2 flex items-center">
					<img className="mr-2 h-4" src={sign}/>
					<span>熱門貨幣</span>
				</div>
				<HotCrypto />
			</main>

			<footer>
				<div className="my-2 flex items-center">
					<img className="mr-2 h-4" src={sign}/>
					<span>熱門股票</span>
				</div>
				<HotStock />
			</footer>

			<div onClick={ () => history.push('/finance') } className="my-2 flex justify-center items-center text-active">
				<span>更多</span>
				<img className="inline-block h-3" src={ activeGo } />
			</div>
		</>
	)
}

export default Home
