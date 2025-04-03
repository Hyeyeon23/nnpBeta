import { useGLTF } from "@react-three/drei";


export function useCustomGLTF(path) {
    const basePath = import.meta.env.BASE_URL || "/";
    return useGLTF(`${basePath}${path}`)
}