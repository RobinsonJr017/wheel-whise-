import {
    Badge,
    Button,
    Card,
    Center,
    Group,
    Image,
    Stack,
    Text,
    ThemeIcon,
    Title
} from "@mantine/core";
import React from "react";
import {IconArrowNarrowRight, IconBriefcase} from "@tabler/icons-react";

function RecommenderStep1() {
    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <Center>
                <div style={{width: "50%", height: "100vh"}}>
                    <Group mx={"lg"} my={"lg"}>
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
                                ¿Como planeas usar tu moto?
                            </Title>
                            <Group mx={"lg"} mt={"xl"}>
                                <Card withBorder shadow={"sm"}>
                                    <Card.Section>
                                        <Center>
                                            <Stack px={"xl"} py={"xl"} gap={0}>
                                                <ThemeIcon variant={"white"} size={"6rem"}>
                                                    <IconBriefcase style={{width: '70%', height: '70%'}}/>
                                                </ThemeIcon>
                                                <Text ta={"center"} mb={"xl"} ff={"Inter"}>
                                                    Trabajo
                                                </Text>
                                            </Stack>
                                        </Center>
                                    </Card.Section>
                                </Card>
                                <Card withBorder shadow={"sm"}>
                                    <Card.Section>
                                        <Center>
                                            <Stack px={"xl"} py={"xl"} gap={0}>
                                                <ThemeIcon variant={"white"} size={"6rem"}>
                                                    <IconBriefcase style={{width: '70%', height: '70%'}}/>
                                                </ThemeIcon>
                                                <Text ta={"center"} mb={"xl"} ff={"Inter"}>
                                                    Trabajo
                                                </Text>
                                            </Stack>
                                        </Center>
                                    </Card.Section>
                                </Card>
                                <Card withBorder shadow={"sm"}>
                                    <Card.Section>
                                        <Center>
                                            <Stack px={"xl"} py={"xl"} gap={0}>
                                                <ThemeIcon variant={"white"} size={"6rem"}>
                                                    <IconBriefcase style={{width: '70%', height: '70%'}}/>
                                                </ThemeIcon>
                                                <Text ta={"center"} mb={"xl"} ff={"Inter"}>
                                                    Trabajo
                                                </Text>
                                            </Stack>
                                        </Center>
                                    </Card.Section>
                                </Card>
                            </Group>
                            <Group mx={"lg"} mt={"lg"}>
                                <Button mt={"xl"} radius={"md"} rightSection={<IconArrowNarrowRight/>}>
                                    Siguiente
                                </Button>
                            </Group>
                        </Stack>
                    </Group>
                </div>
                <div style={{width: "50%", height: "100vh", display: "flex", backgroundColor: "#f8f9fa"}}>
                    <Image src={"https://placehold.co/600x400"} fit={"contain"} px={"xl"}/>
                </div>
            </Center>
        </div>
    )
}

export default RecommenderStep1;