// Gera as versões da logo usadas no site (fundo transparente, escura e branca)
// a partir do JPG original: node scripts/logo.mjs "<caminho do jpg>"
import sharp from "sharp";

const src = process.argv[2];

// Recortes no arquivo original (2116x1398), sem a moldura.
const crops = {
  full: { left: 190, top: 195, width: 1736, height: 1010 },
  mark: { left: 830, top: 200, width: 460, height: 665 },
};

const tones = {
  dark: [20, 38, 31], // --foreground
  white: [255, 255, 255],
};

for (const [name, region] of Object.entries(crops)) {
  // O quão escuro é cada pixel vira a opacidade; o fundo claro some.
  const { data: luma, info } = await sharp(src)
    .extract(region)
    .greyscale()
    .normalise()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (const [tone, [r, g, b]] of Object.entries(tones)) {
    const rgba = Buffer.alloc(info.width * info.height * 4);
    for (let i = 0; i < luma.length; i++) {
      const alpha = 255 - luma[i];
      rgba.set([r, g, b, alpha < 12 ? 0 : alpha], i * 4);
    }
    const out = `public/logo-${name}-${tone}.png`;
    const result = await sharp(rgba, {
      raw: { width: info.width, height: info.height, channels: 4 },
    })
      .trim()
      .resize({ height: name === "mark" ? 240 : 520 })
      .png()
      .toFile(out);
    console.log(out, `${result.width}x${result.height}`);
  }
}

// Ícone da aba: símbolo escuro centralizado sobre o creme do site.
const mark = await sharp("public/logo-mark-dark.png")
  .resize({ height: 190 })
  .toBuffer();
await sharp({
  create: { width: 256, height: 256, channels: 4, background: "#f7f3ea" },
})
  .composite([{ input: mark, gravity: "centre" }])
  .png()
  .toFile("src/app/icon.png");
console.log("src/app/icon.png");
