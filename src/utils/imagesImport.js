const modules = import.meta.glob('../assets/imgs/3d/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default',
});

export const images3d = Object.fromEntries(
    Object.entries(modules).map(([path, src]) => {
        const fileName = path.split('/').pop(); // ex: btn_3d_01.png
        return [fileName, src];
    })
);