# Icon Library

The aim of this project is to decouple the icon library from frontend code. That way we are able to use it in any frontend project, independently from the framework (Vue, Angular, React etc.).

## Prerequisites
```
npm install
```

## Optimize icons and generate icon-sprite and icon-set
This project uses [svg-sprite](https://www.npmjs.com/package/svg-sprite) npm package to optimize icons (using [svgo](https://www.npmjs.com/package/svgo) internally) and generate the icon-sprite. 

Additionaly an icon set is generated in `.js` and `.json` format. The icon set include the bare minimum information required for any of the svg icons in strings.

Run following command to build the project:
```
npm run build
```
Resulting artifacts will be added to `./build`

## Easy way to configure svg-sprite npm package
svg-sprite offers a handy [JSON Generator](https://svg-sprite.github.io/svg-sprite/#json) for configuration. Paste the resulting json into `svg-sprite.config.json` 

## Add new icons
All existing icons can be found in `./icons`. To seperate custom icons from material icons, there are two seperate folders: `./icons/custom` and `./icons/material`. 
> Note: After build, the generated icon-sprite will include all icons. The reason for the different folders is just to organize the svg.

### Add custom icons
To add custom icons from the design team, just add the svg to `./icons/custom`

### Add Material icons
To add new icons from material design simply visit the [Material Design Website](https://fonts.google.com/icons?selected=Material+Icons:leaderboard), download the svg and add it to `./icons/material`

