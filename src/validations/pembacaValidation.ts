import { z } from "zod";

export const getAllPembaca = z.object({
  page: z
    .number({
      invalid_type_error: "Page must be a number",
    })
    .optional(),
});

export const getSinglePembaca = z.object({
  id: z
    .number({
      invalid_type_error: "Id must be a number",
    })
    .optional(),
});

export const putPembaca = z
  .object({
    id: z.number({
      required_error: "id is Required",
    }),
    judul: z.string().optional(),
    gambar: z.string().optional(),
    deskripsi: z.string().optional(),
    tag: z.array(z.string()).optional(),
    trending: z.boolean().optional(),
  })
  .refine(
    (data) => {
      return (
        data.judul ||
        data.gambar ||
        data.deskripsi ||
        data.tag ||
        data.trending !== undefined
      );
    },
    {
      message:
        "At least one of judul, gambar, deskripsi, tag, or trending is required",
      path: ["judul", "gambar", "deskripsi", "tag", "trending"],
    }
  );

export const deletePembaca = z.object({
  id: z.number({
    required_error: "id is Required",
  }),
});

export const postPembaca = z.object({
  judul: z.string({
    required_error: "judul is Required",
  }),
  gambar: z.string({
    required_error: "gambar is Required",
  }),
  deskripsi: z.string({
    required_error: "deskripsi is Required",
  }),
  tag: z.array(
    z.string({
      required_error: "tag is Required",
    })
  ),
  trending: z.boolean({
    required_error: "trending is Required",
  }),
});
