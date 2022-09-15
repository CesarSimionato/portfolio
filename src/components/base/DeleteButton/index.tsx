import { IconButton, Tooltip } from "@chakra-ui/react"

import { MdDelete } from "react-icons/md"

import { ActionButtonProps } from "@/@types/base"

export const DeleteButton: React.FC<ActionButtonProps> = ({
  text,
  size = "md",
  placement = "bottom",
  onClick,
}) => {
  return (
    <Tooltip
      label={text}
      bg="red.600"
      placement={placement}
      openDelay={500}
    >
      <IconButton
        aria-label={text}
        icon={<MdDelete size={size === "md" ? 22 : 30} />}
        bg="red.500"
        size={size}
        _hover={{
          background: "red.600",
        }}
        _active={{
          background: "red.500",
        }}
        onClick={onClick}
      />
    </Tooltip>
  )
}
