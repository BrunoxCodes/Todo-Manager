import { useEffect, useState } from "react";

interface LoginProps {
    name: string,
    password: string
}

export default function useAuthApi() {
    const [user, setUser] = useState<LoginProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch("https://6afb3738730c1d152f334faf.mockapi.io/api/job_application_api/Admins");

                if (!response.ok) {
                    throw new Error("Failed to fetch admins");
                }

                const data: LoginProps[] = await response.json();
                setUser(data);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    return { user, loading };
}