"""Generate web-ready logo variants from the original square JPEG.

Outputs (into public/):
  - logo.png          full-colour logo, white background knocked out (transparent),
                      cropped to content. For use on LIGHT backgrounds.
  - logo-dark.png     same, but low-saturation (grey) text lightened so the
                      wordmark reads on the dark navy UI. Globe stays full colour.
  - favicon source    logo-mark.png (tight square of the globe + SZ) -> used for icons.
"""
from PIL import Image
import colorsys

SRC = "public/logo-original.jpeg"

img = Image.open(SRC).convert("RGBA")
w, h = img.size
px = img.load()


def is_white(r, g, b, thr=238):
    return r >= thr and g >= thr and b >= thr


# --- Pass 1: knock out white background -> transparent ---
trans = Image.new("RGBA", (w, h), (0, 0, 0, 0))
tp = trans.load()
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if is_white(r, g, b):
            tp[x, y] = (r, g, b, 0)
        else:
            tp[x, y] = (r, g, b, 255)


def bbox_of(im):
    return im.getbbox()


box = bbox_of(trans)
trans_cropped = trans.crop(box)
trans_cropped.save("public/logo.png")

# --- Pass 2: dark-mode variant. Lighten grey (low-saturation) text pixels. ---
dark = trans_cropped.copy()
dp = dark.load()
dw, dh = dark.size
for y in range(dh):
    for x in range(dw):
        r, g, b, a = dp[x, y]
        if a == 0:
            continue
        hh, ss, vv = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
        # Grey-ish text: low saturation. Lighten to near-white so it reads on navy.
        if ss < 0.18:
            dp[x, y] = (242, 244, 248, a)
dark.save("public/logo-dark.png")

print("logo.png        ", trans_cropped.size)
print("logo-dark.png   ", dark.size)
