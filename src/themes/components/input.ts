import type { ComponentStyleConfig } from "@chakra-ui/theme"

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {},
  },
  variants: {
    solid: {
      field: {
        borderRadius: "base",
        color: "primary.800",
      },
    },
    outline: {
      field: {
        borderRadius: "base",
        color: "primary.800",
        _focus: {
          borderColor: "primary.800",
          boxShadow: "0 0 0 1px #0d1b2a",
        },
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
}
