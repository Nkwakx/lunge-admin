import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project import
import MainCard from '../../components/MainCard';
import { BreadcrumbsProps, MenuItem } from '../../types/navigation';


const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ navigation, title,...others }) => {
  const location = useLocation();
  const [main, setMain] = useState<MenuItem | null>(null);
  const [item, setItem] = useState<MenuItem | null>(null);

  const getCollapse = useCallback((menu: MenuItem) => {
    if (menu.children) {
      const foundItem = menu.children.find((collapse) => {
        if (collapse.type === 'collapse') {
          return getCollapse(collapse); // Recursive call
        } else if (collapse.type === 'item') {
          return location.pathname === collapse.url;
        }
        return false;
      });
  
      if (foundItem) {
        setMain(menu);
        setItem(foundItem);
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    navigation.items.forEach((menu) => {
      if (menu.type === 'group') {
        getCollapse(menu);
      }
    });
  }, [getCollapse, navigation]);

  useEffect(() => {
    navigation?.items?.map((menu) => {
      if (menu.type && menu.type === 'group') {
        getCollapse(menu);
      }
      return false;
    });
  });

  // only used for component demo breadcrumbs
  if (location.pathname === '/breadcrumbs') {
    location.pathname = '/dashboard/analytics';
  }

  let mainContent;
  let itemContent;
  let breadcrumbContent = <Typography />;
  let itemTitle = '';

  // collapse item
  if (main && main.type === 'collapse') {
    mainContent = (
      <Typography component={Link} to={document.location.pathname} variant="h6" sx={{ textDecoration: 'none' }} color="textSecondary">
        {main.title}
      </Typography>
    );
  }

  // items
  if (item && item.type === 'item') {
    itemTitle = item.title ?? '';
    itemContent = (
      <Typography variant="subtitle1" color="textPrimary">
        {itemTitle}
      </Typography>
    );

    // main
    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <MainCard title='' border={false} sx={{ mb: 3, bgcolor: 'transparent' }} {...others} content={false}>
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
            <Grid item>
              <MuiBreadcrumbs aria-label="breadcrumb">
                <Typography component={Link} to="/" color="textSecondary" variant="h6" sx={{ textDecoration: 'none' }}>
                  Home
                </Typography>
                {mainContent}
                {itemContent}
              </MuiBreadcrumbs>
            </Grid>
            {title && (
              <Grid item sx={{ mt: 2 }}>
                <Typography variant="h5">{item.title}</Typography>
              </Grid>
            )}
          </Grid>
        </MainCard>
      );
    }
  }

  return breadcrumbContent;
}

export default Breadcrumbs;
