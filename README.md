# TimerDok



## How I set up this repo
```sh
# 1. Init repo
npm init electron-app@latest TimerDok -- --template=vite-typescript
# Add .idea, build, package-lock.json to gitignore and make first commit
git add -A && git commit -m "Initial commit"

# 2. Install React via: https://www.electronforge.io/guides/framework-integration/react-with-typescript
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
# Include associated React eslint config: https://www.npmjs.com/package/eslint-plugin-react
npm install --save-dev eslint-plugin-react
# Add "ignorePatterns" in eslintrc to ignore vite files
# Add prettier for code formatting: https://prettier.io/docs/en/install.html
npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
# Add prettier's associated eslint plugin
npm install --save-dev eslint-config-prettier

# 3. Add TailwindCSS: https://tailwindcss.com/docs/installation/using-postcss
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -P
```
