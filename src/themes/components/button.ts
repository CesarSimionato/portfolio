import type { ComponentStyleConfig } from "@chakra-ui/theme"

export const Button: ComponentStyleConfig = {
  baseStyle: {
    textTransform: "uppercase",
    borderRadius: "base",
    letterSpacing: "widest",
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    solid: {
      bg: "primary.600",
      color: "white",
      _hover: {
        bg: "primary.500",
      },
      _active: {
        bg: "primary.600",
      },
    },
    outline: {
      fontWeight: "semibold",
      border: "2px solid",
      borderColor: "primary.600",
      color: "primary.600",
      _hover: {
        bg: "primary.100",
      },
    },
  },
  defaultProps: {
    variant: "solid",
  },
}
