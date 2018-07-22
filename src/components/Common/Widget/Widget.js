import React from 'react';

const Widget = ({item})=> {
	return (
		<div style={{ height: item.height, backgroundColor: item.color }}>
		{item.id}
		</div>
	)
}
export default Widget;