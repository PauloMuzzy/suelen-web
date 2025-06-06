"use client";

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
      link: "wellcome",
    },
    {
      title: "Meu diferencial",
      link: "my-difference",
    },
    {
      title: "Sobre mim",
      link: "about-me",
    },
    {
      title: "Serviços",
      link: "our-services",
    },
    {
      title: "Como Funciona Nosso Trabalho",
      link: "how-we-work",
    },
    {
      title: "Avaliações dos nossos pacientes",
      link: "patient-reviews",
    },
  ];

  const scrollToSection = (id: string, offset: number = 96) => {
    if (typeof window !== "undefined") {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop =
          section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionTop - offset,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <Menu offset={[0, 1]}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon width={"24px"} height={"24px"} />}
        variant="outline"
        style={{
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
      >
        {list.map((item, index) => (
          <MenuItem
            key={index}
            style={{
              backgroundColor: "transparent",
              justifyContent: "end",
              padding: "0px",
            }}
            onClick={() => scrollToSection(item.link)}
          >
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
