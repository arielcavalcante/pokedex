import React from 'react';
import './Pokedex.css';

const monitorContent =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png';

const lcdContent = '> Ditto';

export default function Pokedex(props) {
	return (
		<div id='pokedex' className='bg-red'>
			<div id='header' className='flex gap05'>
				<div id='synth' className='led round larger bg-cyan mr1'></div>
				<div className='led medium bg-red'></div>
				<div className='led medium bg-yellow'></div>
				<div className='led medium bg-green'></div>
			</div>
			<div id='main' className='flex column full-width '>
				<div id='monitor' className='flex column bg-lightgray'>
					<div className='tiny-leds flex align-center my1 mxauto'>
						<div className='led inset small bg-red'></div>
						<div className='led inset small bg-red'></div>
					</div>

					<div
						className='screen bg-black mx2'
						style={{
							background: `url(${monitorContent}) 
		center no-repeat content-box`,
							border: 'solid .125rem black',
						}}
					></div>

					<div className='bottom-leds mx2 my1 flex space-between align-center'>
						<div className='led inset medium bg-red'></div>
						<div id='speaker' className=' flex column'>
							<div className='hole long bg-black'></div>
							<div className='hole long bg-black'></div>
							<div className='hole long bg-black'></div>
							<div className='hole long bg-black'></div>
						</div>
					</div>
				</div>
				<div id='footer' className='flex space-between'>
					<div className='flex column gap05'>
						<div id='topbuttons' className='flex gap1'>
							<div className='tallbutton large round bg-darkgray'></div>
							<div id='longbuttons' className='flex gap05'>
								<div className='shortbutton long bg-red'></div>
								<div className='shortbutton long bg-cyan'></div>
							</div>
						</div>
						<div id='bottomleft' className='flex gap2'>
							<div id='tinyleds' className='flex align-center gap05 ml05'>
								<div className='led tiny bg-red'></div>
								<div className='led tiny bg-blue'></div>
							</div>
							<div className='lcdscreen inset bg-green flex align-center'>
								<h4 className='ml1'>{lcdContent}</h4>
							</div>
						</div>
					</div>
					<div className='joystick'></div>
				</div>
			</div>
		</div>
	);
}
