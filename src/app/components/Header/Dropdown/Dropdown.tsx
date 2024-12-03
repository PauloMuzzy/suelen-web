import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export default function Dropdown() {
  const list = [
    {
      title: "Início",
      link: "#",
    },
    {
      title: "Sobre",
      link: "#",
    },
    {
      title: "Contato",
      link: "#",
    },
  ];

  return (
    <Menu offset={[0, 1]}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon width={"24px"} height={"24px"} />}
        variant="outline"
        style={{
          color: "#000000",
          height: "100%",
          width: "56px",
          borderRadius: "0",
          backgroundColor: "transparent",
          border: "none",
        }}
      />
      <MenuList
        style={{
          borderRadius: "0",
          backgroundColor: "rgba(140,126,116, 0.975)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          padding: "22px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        width={"10px"}
      >
        {list.map((item, index) => (
          <MenuItem
            key={index}
            style={{
              color: "#000000",
              backgroundColor: "transparent",
              justifyContent: "end",
              padding: "0px",
            }}
            onClick={() => (window.location.href = item.link)}
          >
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
