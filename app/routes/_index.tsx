import {json, LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import SuperAppLoader from "~/components/SuperAppLoader";
import {useLoaderData, useNavigate, useOutletContext} from "@remix-run/react";
import {useEffect} from "react";
import {Button, Text} from "@mantine/core";
import OutletContext from "~/types/OutletContext";
import {createAdminClient, createServerClient} from "~/util/supabase.server";
import {getUserRole} from "~/util/getUserRole";

export const meta: MetaFunction = () => {
    return [
        {title: "Super App"},
        {name: "description", content: "Welcome to SuperApp!"},
    ];
};

export async function loader({request}: LoaderFunctionArgs) {
    const response = new Response()
    const supabase = createServerClient({request, response});
    const userRes = await supabase.auth.getUser();
    if (!userRes.data || !userRes.data.user) {
        return json({
            error: "No estas logueado"
        }, {
            headers: response.headers,
        })
    }
    const user = userRes.data.user
    return json({
        data: {
            user: user
        }
    })
}

export default function Index() {
    const {supabase, session} = useOutletContext<OutletContext>()
    const loaderData = useLoaderData<typeof loader>()
    const navigate = useNavigate();
    useEffect(() => {
        if ("error" in loaderData) {
            console.log("Error, going to auth")
            navigate("/auth")
            return
        }

        navigate("/home")

    }, [loaderData]);
    return (
        <>
            <Text>
                {session ? "You are logged in" : "You are not logged in"}
            </Text>
            <Button onClick={() => supabase.auth.signOut()}>
                Logout
            </Button>
            <SuperAppLoader/>
        </>
    );
}
