import {AppShell} from "@mantine/core";
import {Outlet} from "@remix-run/react";
import {Header} from "~/components/home/Header";

function Home() {
    return (
        <AppShell header={{height: 50}}>
            <AppShell.Header>
                <Header/>
            </AppShell.Header>
            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    )
}

export default Home;