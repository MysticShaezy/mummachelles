# Wellbeing product information PDFs

Place Nu Skin product information PDFs here so download links work without Cloudinary.

Expected filenames (must match exactly):

| File | Used on |
|------|---------|
| `feel-calm-product-information.pdf` | Feel Calm |
| `night-time-product-information.pdf` | Night Time |
| `y-span-product-information.pdf` | Y-Span |

Alternatively, set optional env vars in `.env.local` or Vercel (full URL or path starting with `/`):

- `NEXT_PUBLIC_WELLBEING_PDF_FEEL_CALM_URL`
- `NEXT_PUBLIC_WELLBEING_PDF_NIGHT_TIME_URL`
- `NEXT_PUBLIC_WELLBEING_PDF_Y_SPAN_URL`

For Cloudinary Raw uploads, paste the delivery URL from the asset details page into the matching env var.
