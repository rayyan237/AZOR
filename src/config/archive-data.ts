// src/config/archive-data.ts
export * from "./archive-catalog";
export * from "./archive-pieces";

import { archiveCatalogData } from "./archive-catalog";
import { archivePieceDetails } from "./archive-pieces";

export const archiveData = archiveCatalogData;
export const archivePieces = archivePieceDetails;