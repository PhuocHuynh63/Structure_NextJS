import { useMutation } from "@tanstack/react-query";
import authService from "@features/auth/service";
import { ILoginSchema } from "@features/auth/schema/entity";

export function useAuth() {
    return useMutation({
        // queryKey: authKeys.all,
        mutationFn: (data: ILoginSchema) => authService.login(data),
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    })
}