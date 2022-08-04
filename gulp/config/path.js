import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const buildFolderLocalServer = `../domains/${rootFolder.toLowerCase()}.loc`;
const srcFolder = `./src`;

const path = {
	buildLocalServer: {
		files: `${buildFolderLocalServer}/files`,
		html: `${buildFolderLocalServer}/`,
		css: `${buildFolderLocalServer}/css/`,
		js: `${buildFolderLocalServer}/js/`,
		images: `${buildFolderLocalServer}/img/`,
		fonts: `${buildFolderLocalServer}/fonts/`,
	},
	build: {
		files: `${buildFolder}/files`,
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/main.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
	},
	clean: buildFolder,
	cleanServerFolder: buildFolderLocalServer,
	buildFolderLocalServer,
	buildFolder,
	srcFolder,
	rootFolder,
};

export default path;
