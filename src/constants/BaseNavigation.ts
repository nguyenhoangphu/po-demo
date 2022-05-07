export interface NavigationItem {
	readonly name: String;
	readonly to: String
}
export const NAVIGATION_ITEMS:Array<NavigationItem> = [
	{
		name: 'Home',
		to: '/'
	}, 
	{
		name: 'Detail',
		to: '/detail'
	}
]
