import { z } from "zod";
import {
  CreatePackageSchema,
  PackageFiltersSchema,
  UpdatePackageSchema,
} from "../validation/packages";

export type CreatePackage = z.infer<typeof CreatePackageSchema>;
export type PackageFilters = z.infer<typeof PackageFiltersSchema>;
export type UpdatePackage = z.infer<typeof UpdatePackageSchema>;
