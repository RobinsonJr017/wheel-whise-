import {Badge, Button, Center, Group, Image, MultiSelect, Stack, Text, TextInput, Title} from "@mantine/core";
import {IconArrowNarrowLeft, IconArrowNarrowRight, IconCheck} from "@tabler/icons-react";
import React from "react";

function RecommenderStep3() {
    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <Center>
                <div style={{width: "50%", height: "100vh"}}>
                    <Group mx={"lg"} my={"lg"} grow>
                        <Stack gap={0}>
                            <Image src={"/wheel-wise.png"} h={"auto"} w={200} mx={"xl"} fit={"contain"}/>
                            <Group mx={"xl"} mt={"4rem"} mb={"4rem"} gap={0}>
                                <Stack>
                                    <Group gap={"0.2rem"}>
                                        <Badge color="blue" size={"0.5rem"} w={"2.5rem"}> </Badge>
                                        <Badge color="gray" size={"0.5rem"} w={"2.5rem"}> </Badge>
                                        <Badge color="gray" size={"0.5rem"} w={"2.5rem"}> </Badge>
                                        <Badge color="gray" size={"0.5rem"} w={"2.5rem"}> </Badge>
                                        <Badge color="gray" size={"0.5rem"} w={"2.5rem"}> </Badge>
                                        <Badge color="gray" size={"0.5rem"} w={"2.5rem"}> </Badge>
                                    </Group>
                                    <Text ff={"Inter"} fw={600}>
                                        Paso 1 de 6
                                    </Text>
                                </Stack>
                            </Group>
                            <Title mx={"lg"} ff={"Inter"} fw={800}>
                                Cuentanos mas sobre ti
                            </Title>
                            <Group mx={"lg"} mt={"xl"} grow style={{maxWidth: "80%"}}>
                                <Stack>
                                    <Button
                                        leftSection={<Image src={"https://placehold.co/50x50"} radius={"xl"}/>}
                                        rightSection={<IconCheck size={"1.5rem"}/>}
                                        justify={"space-between"}
                                        size={"xl"}
                                        variant={"outline"}
                                        radius={"sm"}
                                        styles={{
                                            label: {
                                                textAlign: "left",
                                                color: "black",
                                                width: "100%",
                                                marginLeft: "1rem"
                                            }
                                        }}
                                    >
                                        Yamaha
                                    </Button>
                                    <Button
                                        leftSection={<Image src={"https://placehold.co/50x50"} radius={"xl"}/>}
                                        rightSection={<IconCheck size={"1.5rem"}/>}
                                        justify={"space-between"}
                                        size={"xl"}
                                        variant={"outline"}
                                        radius={"sm"}
                                        styles={{
                                            label: {
                                                textAlign: "left",
                                                color: "black",
                                                width: "100%",
                                                marginLeft: "1rem"
                                            }
                                        }}
                                    >
                                        Yamaha
                                    </Button>
                                    <Button
                                        leftSection={<Image src={"https://placehold.co/50x50"} radius={"xl"}/>}
                                        rightSection={<IconCheck size={"1.5rem"}/>}
                                        justify={"space-between"}
                                        size={"xl"}
                                        variant={"outline"}
                                        radius={"sm"}
                                        styles={{
                                            label: {
                                                textAlign: "left",
                                                color: "black",
                                                width: "100%",
                                                marginLeft: "1rem"
                                            }
                                        }}
                                    >
                                        Yamaha
                                    </Button>
                                    <Button
                                        leftSection={<Image src={"https://placehold.co/50x50"} radius={"xl"}/>}
                                        rightSection={<IconCheck size={"1.5rem"}/>}
                                        justify={"space-between"}
                                        size={"xl"}
                                        variant={"outline"}
                                        radius={"sm"}
                                        styles={{
                                            label: {
                                                textAlign: "left",
                                                color: "black",
                                                width: "100%",
                                                marginLeft: "1rem"
                                            }
                                        }}
                                    >
                                        Yamaha
                                    </Button>
                                    <Button
                                        leftSection={<Image src={"https://placehold.co/50x50"} radius={"xl"}/>}
                                        rightSection={<IconCheck size={"1.5rem"}/>}
                                        justify={"space-between"}
                                        size={"xl"}
                                        variant={"outline"}
                                        radius={"sm"}
                                        styles={{
                                            label: {
                                                textAlign: "left",
                                                color: "black",
                                                width: "100%",
                                                marginLeft: "1rem"
                                            }
                                        }}
                                    >
                                        Yamaha
                                    </Button>

                                    <Group justify={"space-between"}>
                                        <Button mt={"xl"} radius={"md"} rightSection={<IconArrowNarrowLeft/>}
                                                color={"gray"}>
                                            Atras
                                        </Button>
                                        <Button mt={"xl"} radius={"md"} rightSection={<IconArrowNarrowRight/>}>
                                            Siguiente
                                        </Button>
                                    </Group>
                                </Stack>
                            </Group>
                        </Stack>
                    </Group>
                </div>
                <div style={{width: "50%", height: "100vh", display: "flex", backgroundColor: "#f8f9fa"}}>
                    <Image src={"https://placehold.co/600x400"} fit={"contain"} px={"xl"}/>
                </div>
            </Center>
        </div>
    );
}

export default RecommenderStep3;