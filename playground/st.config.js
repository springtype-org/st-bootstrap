module.exports = {
    entryPoint: 'src/index.tsx',
    indexHTMLTemplate: 'src/index.html',
    outputPath: '../docs',
    staticStyleEntryPoints: {
        'src/bootstrap.scss': '../docs/bootstrap.css'
    },
};