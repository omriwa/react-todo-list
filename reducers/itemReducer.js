const dataSet = [
	{
		title: 'aa',
		description: 'aaa'
	},
	{
		title: 'bb',
		description: 'abb'
	},
	{
		title: 'cc',
		description: 'acc'
	}
];
function itemReducer(itemList = dataSet , action) {
	var newList = itemList.slice();
	switch(action.type){
		
		case 'ADD_ITEM':
			newList.push(action.payload);
			console.log('ADD_ITEM');
			console.log(newList);
			return newList
		break;

		case 'DELETE_ITEM':
			//remove the item from the list
			newList = deleteObjFromArray(itemList , action.payload);
			console.log("newList");
			console.log(newList);
			return newList;
		break;

		case 'EDIT_ITEM':
			let itemInfo = action.payload;
			let newItem = {
				title: itemInfo.title,
				description: itemInfo.description
			};
			newList = deleteObjFromArray(newList , itemInfo.id , newItem);
			console.log('newList');
			// console.log(newItem);
			console.log(newList);
			return newList;
			// return itemList;
		break;

		case 'CLEAR_LIST':
			return action.payload;
		break;

		default:
			return itemList;
	}
}

//funcs
function deleteObjFromArray(arr , index , obj) {
	let arr1 = arr.slice(0 , index) , arr2 = arr.slice(index + 1 , arr.length);

	if(obj)
		arr1 = arr1.concat([obj]);
	return arr1.concat(arr2);
}

export default itemReducer;