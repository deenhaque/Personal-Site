import Text from '../Text/Text';

const Palette = ({ palette, palettes, updatePalette }) => {
	return (
		<div>
			<Text>Tired of the colour? Pick a new vibe below:</Text>
			{palettes.map((colour) => {
				const isCurrent = colour === palette ? '😤' : '';
				return (
					<Text pointer key={colour} onClick={updatePalette}>
						{colour}
						{isCurrent}
					</Text>
				);
			})}
		</div>
	);
};

export default Palette;
