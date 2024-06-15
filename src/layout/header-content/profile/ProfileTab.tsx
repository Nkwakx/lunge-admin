import { EditOutlined, UserOutlined, ProfileOutlined, WalletOutlined, LogoutOutlined } from "@ant-design/icons";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";

export default function ProfileTab() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => { // Explicitly type 'index' as number
    setSelectedIndex(index);
  };

  return (
    <List component="nav" sx={{ p: 0, '&.MuiListItemIcon-root': { minWidth: 32 } }}>
      <ListItemButton selected={selectedIndex === 0} onClick={() => handleListItemClick(0)}>
        <ListItemIcon>
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 1} onClick={() => handleListItemClick(1)}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="View Profile" />
      </ListItemButton>

      <ListItemButton selected={selectedIndex === 3} onClick={() => handleListItemClick(3)}>
        <ListItemIcon>
          <ProfileOutlined />
        </ListItemIcon>
        <ListItemText primary="Social Profile" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 4} onClick={() => handleListItemClick(4)}>
        <ListItemIcon>
          <WalletOutlined />
        </ListItemIcon>
        <ListItemText primary="Billing" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 2}>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
}
