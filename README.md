# [Sigmaverse](https://sigmaverse.io/)

Your portal to the Ergo universe.

Ergo has some amazing tech and some talented developers. However, as a decentralised and community-powered platform, it’s not always easy to know what’s going on all the time. Different people are developing different dApps and use cases, formally and informally. Connecting them to the same users and building that all-important DeFi network effect isn’t always easy.

That’s what the Sigmaverse is about. Sigmaverse is a one-stop portal to the Ergo dApp ecosystem: a place where users can find all the cool functionality that community developers are building on Ergo, all in one place.

The idea is that developers can create their apps, and then list them on Sigmaverse using GitHub.

As it becomes the default site for accessing dApps, more and more devs will add their own, making it easy to learn about new additions to the Ergo ecosystem. A search bar allows users to check for a specific type of dApp.

To include your dApp in Sigmaverse, create a new folder in applications/{dAppName}, and in this folder create a new file, `overview.md`, with the following contents and structure:


```
------
name: name of dApp
description: description of dApp (max 284 characters leghth, or part of the text won't appear)
website: dApp website
logo_image: “{logotypeName}” – if you want to include this, save the image at applications/{dAppName}/{logotypeName} ##Logo Specifications: square with transparent backgrounds, objects as close to image boundaries as possible, clear and legible at a small size
preview_image: “{previewName}” – if you want to include this, save the image at applications/{dAppName}/{previewName} ##Image Specifications: 2:3 height to width ratio to avoid distortions
appCategory: [“web” or/and “cli” or/and “desktop”]
category: 'dApps' 
------
```


Please only link to a website or github page. Twitter profiles should not be added as they set the bar too low for what qualifies to be in the sigmaverse.

Your logo_image should be small, square and have a transparent background if there is negative space. Your preview_image should have an exact Width:Height pixel ratio of 3:2, so for example if your image is 1500 pixels wide, make it 1000 pixels tall. Or 1200 wide:800 tall, etc. This will prevent stretching of your image. Finally, text descriptions must be 284 characters or less or they will not fit inside the boxes.

## Categories

['dApps', 'Privacy', 'NFTs', 'Metaverse', 'Explore', 'Mining', 'Tooling', 'Tokens', 'Wallets']



## Getting started

```
yarn install
yarn build
yarn start
```
