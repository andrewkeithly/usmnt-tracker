import { Header as GrommetHeader, Button, Anchor, Box, Menu, ResponsiveContext } from "grommet";
import { Menu as MenuIcon, Home as HomeIcon} from 'grommet-icons';

const Header = () => (
  <GrommetHeader background="white" pad="medium" height="xsmall">
  <Button icon={<HomeIcon />} color="neutral-2"/>
    <Anchor href="/" label="USMNT Tracker" color="neutral-2"/>
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Box justify="end">
            <Menu
              a11yTitle="Navigation Menu"
              dropProps={{ align: { top: "bottom", right: "right" } }}
              icon={<MenuIcon color="brand" />}
              items={[
                {
                  label: <Box pad="small">USMNT</Box>,
                  href: "https://www.ussoccer.com/teams/usmnt",
                },
              ]}
            />
          </Box>
        ) : (
          <Box justify="end" direction="row" gap="medium">
            <Anchor
              href="https://www.ussoccer.com/teams/usmnt"
              label="USMNT"
            />
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  </GrommetHeader>
);

export default Header;
