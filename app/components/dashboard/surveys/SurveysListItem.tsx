import {Menu, rem, Table, Text, Button, Title} from "@mantine/core";

import {useDisclosure} from "@mantine/hooks";
import {
  IconApps,
  IconArrowsLeftRight, IconDropletDown, IconEye,
  IconMessageCircle, IconPencil,
  IconPhoto, IconReport,
  IconSearch,
  IconSettings,
  IconTrash
} from "@tabler/icons-react";

function SurveysListItem() {
  const [opened, {open, close}] = useDisclosure(false)
  return (
    <>
      <Table.Tr onContextMenu={(e) => {
        e.preventDefault()
        open()
      }}>
        <Table.Td>Survey Name</Table.Td>
        <Table.Td>Survey Description</Table.Td>
        <Table.Td>Survey Status</Table.Td>
        <Table.Td>Survey Date</Table.Td>
        <Table.Td>
          <Text>
            Link
          </Text>
        </Table.Td>
        <Table.Td>
          <Menu trigger={"click"}>
            <Menu.Target>
              <Button rightSection={<IconApps/>} variant={"light"}>
                Actions
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
            <Menu.Label>Encuesta</Menu.Label>
              <Menu.Item leftSection={<IconPencil style={{width: rem(14), height: rem(14)}}/>}>
                Editar
              </Menu.Item>
              <Menu.Item leftSection={<IconEye style={{width: rem(14), height: rem(14)}}/>}>
                Preview
              </Menu.Item>
              <Menu.Item leftSection={<IconReport style={{width: rem(14), height: rem(14)}}/>}>
                Answers
              </Menu.Item>
              <Menu.Divider/>
              <Menu.Item
                color="red"
                leftSection={<IconTrash style={{width: rem(14), height: rem(14)}}/>}
              >
                Eliminar
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Table.Td>
      </Table.Tr>
    </>
  )
}

export default SurveysListItem;