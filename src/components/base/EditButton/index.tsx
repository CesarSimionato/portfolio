import { IconButton, Tooltip } from "@chakra-ui/react"

import { MdEdit } from "react-icons/md"

import { ActionButtonProps } from "@/@types/base"

export const EditButton: React.FC<ActionButtonProps> = ({
  text,
  size = "md",
  placement = "bottom",
  onClick,
}) => {
  return (
    <Tooltip
      label={text}
      bg="blue.600"
      placement={placement}
      openDelay={500}
    >
      <IconButton
        aria-label={text}
        icon={<MdEdit size={size === "md" ? 22 : 30} />}
        bg="blue.500"
        size={size}
        _hover={{
          background: "blue.600",
        }}
        _active={{
          background: "blue.500",
        }}
        onClick={onClick}
      />
    </Tooltip>
  )
}
