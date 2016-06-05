import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import LockOpen from 'material-ui/svg-icons/action/lock-open'
import AccountBox from 'material-ui/svg-icons/action/account-box'
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app'



const containerStyle = {
	top : 'auto',
}

const NavigationDrawer = ({
	open, authReady, authenticated,
	onRequestChange, login, register, accountManagement, logout
}) => (
	<Drawer 
		docked={false}
		open={open}
		onRequestChange={onRequestChange}
		containerStyle={containerStyle} >

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
			<Divider />
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