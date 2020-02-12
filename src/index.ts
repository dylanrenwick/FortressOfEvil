import Game from "./Game";

const canvas = document.getElementById('canv');
if (!canvas) throw new Error("Could not get <pre> element with id 'canv'!");
const game = new Game(canvas);
