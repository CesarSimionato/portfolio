import { IconButton, Tooltip } from "@chakra-ui/react"

import { ImPlus } from "react-icons/im"

import { ActionButtonProps } from "@/@types/base"

export const AddButton: React.FC<ActionButtonProps> = ({
  text,
  size = "md",
  placement = "bottom",
  onClick,
}) => {
  return (
    <Tooltip
      label={text}
      bg="green.600"
      placement={placement}
      openDelay={500}
    >
      <IconButton
        aria-label={text}
        icon={<ImPlus size={size === "md" ? 18 : 24} />}
        size={size}
        bg="green.500"
        _hover={{
          background: "green.600",
        }}
        _active={{
          background: "green.500",
        }}
        onClick={onClick}
      />
    </Tooltip>
  )
}
