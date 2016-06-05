import React from 'react'
import Drawer from 'material-ui/Drawer'
import ListItem from 'material-ui/List/ListItem'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import Chat from 'material-ui/svg-icons/communication/chat'
import Notifications from 'material-ui/svg-icons/social/notifications'
import LockOpen from 'material-ui/svg-icons/action/lock-open'
import AccountBox from 'material-ui/svg-icons/action/account-box'
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app'
import ActionSearch from 'material-ui/svg-icons/action/search'
import DirectionsBike from 'material-ui/svg-icons/maps/directions-bike'
import ContentCreate from 'material-ui/svg-icons/content/create'


const containerStyle = {
	top : 'auto'
}

const NavigationDrawer = ({
	open, authReady, authenticated, name,
	onRequestChange, login, register, accountManagement, logout
}) => (
	<Drawer 
		docked={false}
		open={open}
		onRequestChange={onRequestChange}
		containerStyle={containerStyle} >

		{authReady && authenticated &&
			<ListItem leftAvatar={
				<Avatar>{name[0]}</Avatar>
			}>
			{name}
			</ListItem>
		}

		{authReady && authenticated &&
			<MenuItem 
				primaryText="Dialogs"
				leftIcon={<Chat/>} />
		}
		

		{authReady && authenticated &&
			<MenuItem 
				primaryText="Notifications"
				leftIcon={<Notifications/>} />
		}

		{authReady && authenticated &&
			<Divider />
		}

		<Subheader>Trips</Subheader>
		 
		<MenuItem 
			primaryText="Search" 
			leftIcon={<ActionSearch/>} />

		{authReady && authenticated &&
			<MenuItem 
				primaryText="Browse"
				leftIcon={<DirectionsBike/>} />
		}

		{authReady && authenticated &&
			<MenuItem 
				primaryText="Create"
				leftIcon={<ContentCreate/>} />
		}

		<Divider />
		<Subheader>Authorization</Subheader>

		{authReady && !authenticated && 
			<MenuItem 
				primaryText="Log In"
				onTouchTap={login} 
				leftIcon={<LockOpen/>} />
		}

		{authReady && !authenticated && 
			<MenuItem 
				primaryText="Register"
				onTouchTap={register} 
				leftIcon={<PersonAdd/>} />
		}

		{authReady && authenticated &&
			<MenuItem 
				primaryText="Manage Account"
				onTouchTap={accountManagement} 
				leftIcon={<AccountBox/>} />
		}

		{authReady && authenticated && 
			<MenuItem 
				primaryText="Logout"
				onTouchTap={logout} 
				leftIcon={<ExitToApp/>} />
		}

	</Drawer>
)

export default NavigationDrawer