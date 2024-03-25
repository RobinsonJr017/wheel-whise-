import {Center, Group, Title, Text, Stack, Divider, Image} from "@mantine/core";

function Home_index() {
    return (
        <div>
            <Center style={{
                alignItems: "center",
                height: "80vh",
                paddingInline: "5rem",
                paddingTop: "6rem",
                marginBottom: "8rem"
            }}>
                <Group style={{alignItems: "center", width: "50%", marginInline: "1rem"}}>
                    <Title style={{fontFamily: "Inter", fontWeight: 800}}>
                        Bienvenido a WheelWise
                    </Title>
                    <Text style={{fontFamily: "Inter"}} fw={600}>
                        ¿Estás listo para experimentar la libertad sobre dos ruedas? En WheelWhise, entendemos que
                        elegir la moto adecuada es más que una simple decisión; es una conexión entre tú y la
                        carretera, entre la emoción y la aventura. Nos enorgullece presentarte la plataforma
                        definitiva de recomendación de motos, diseñada para ayudarte a encontrar la compañera
                        perfecta para tus viajes.
                    </Text>
                </Group>
                <Group style={{maxWidth: "50%", minWidth: "50%"}}>
                    <Image style={{height: "40rem", objectFit: "cover"}} src={"/placeholder.png"}/>
                </Group>
            </Center>
            <Center style={{marginInline: "6rem", alignItems: "start"}}>
                <Group style={{width: "50%"}}>
                    <Title style={{fontFamily: "Inter", fontWeight: 800}} size={50}>
                        ¿Como Funciona?
                    </Title>
                </Group>
                <Group style={{width: "50%"}}>
                    <Center>
                        <Image src={"/image1.png"}
                               style={{height: "5rem", width: "100%", objectFit: "cover", marginBottom: "2rem"}}/>
                        <Stack style={{gap: 0}}>
                            <Title size={20} style={{fontFamily: "inter"}}>
                                Personaliza Tu Experiencia
                            </Title>
                            <Text style={{fontFamily: "Inter"}}>
                                Comienza respondiendo algunas preguntas simples sobre tus preferencias y estilo de
                                conducción. ¿Buscas una moto deportiva para la ciudad o una cruiser para largos viajes
                                en carretera? Cuéntanos tus preferencias y necesidades.
                            </Text>
                            <Divider my={"md"}/>
                        </Stack>
                    </Center>
                    <Center>
                        <Image src={"/image2.png"}
                               style={{height: "5rem", width: "100%", objectFit: "cover", marginBottom: "2rem"}}/>
                        <Stack style={{gap: 0}}>
                            <Title size={20} style={{fontFamily: "inter"}}>
                                Personaliza Tu Experiencia
                            </Title>
                            <Text style={{fontFamily: "Inter"}}>
                                Comienza respondiendo algunas preguntas simples sobre tus preferencias y estilo de
                                conducción. ¿Buscas una moto deportiva para la ciudad o una cruiser para largos viajes
                                en carretera? Cuéntanos tus preferencias y necesidades.
                            </Text>
                            <Divider my={"md"}/>
                        </Stack>
                    </Center>
                    <Center>
                        <Image src={"/image3.png"}
                               style={{height: "5rem", width: "100%", objectFit: "cover", marginBottom: "2rem"}}/>
                        <Stack style={{gap: 0}}>
                            <Title size={20} style={{fontFamily: "inter"}}>
                                Personaliza Tu Experiencia
                            </Title>
                            <Text style={{fontFamily: "Inter"}}>
                                Comienza respondiendo algunas preguntas simples sobre tus preferencias y estilo de
                                conducción. ¿Buscas una moto deportiva para la ciudad o una cruiser para largos viajes
                                en carretera? Cuéntanos tus preferencias y necesidades.
                            </Text>
                            <Divider my={"md"}/>
                        </Stack>
                    </Center>
                </Group>
            </Center>
        </div>
    )
}

export default Home_index;