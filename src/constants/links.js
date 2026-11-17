/**
 * ====================================================================
 * RESUME CONFIGURATION
 * ====================================================================
 * 
 * Simply update `RESUME_DRIVE_LINK` below whenever your resume changes!
 * 
 * You can paste ANY Google Drive link (view link, sharing link, or file ID):
 * - https://drive.google.com/file/d/1H3KeEJkg9ZRhHRuw5GdW4FCIt2pqbdAJ/view?usp=drive_link
 * - https://drive.google.com/file/d/1H3KeEJkg9ZRhHRuw5GdW4FCIt2pqbdAJ/view?usp=sharing
 * - 1H3KeEJkg9ZRhHRuw5GdW4FCIt2pqbdAJ
 * 
 * Changing this SINGLE variable automatically updates both:
 * 1. View Resume link  (opens preview in browser)
 * 2. Download Resume link (triggers direct file download)
 * everywhere in the project (Landing, Contact, etc.).
 */

// 👉 Put your Google Drive link or file ID here:
export const RESUME_DRIVE_LINK = "https://drive.google.com/file/d/1DTzkIEsWZtKZXyA5Stlnj4bi6V2BxYRm/view?usp=drive_link";

// File name used when downloading the resume
export const RESUME_FILE_NAME = "Tanvi_Madani_Resume";

/**
 * Optional Manual Overrides:
 * Leave these empty ("") to automatically derive both links from RESUME_DRIVE_LINK.
 * If you ever need specific custom URLs for view or download, you can paste them here.
 */
const MANUAL_VIEW_LINK = "";
const MANUAL_DOWNLOAD_LINK = "";

/**
 * Helper to extract Google Drive file ID from URL or raw ID
 */
export const extractDriveFileId = (urlOrId) => {
  if (!urlOrId || typeof urlOrId !== "string") return "";
  const trimmed = urlOrId.trim();

  // If already just the ID (no slashes or query parameters)
  if (!trimmed.includes("/") && !trimmed.includes("?")) {
    return trimmed;
  }

  // Matches https://drive.google.com/file/d/<FILE_ID>/...
  const fileDMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileDMatch && fileDMatch[1]) return fileDMatch[1];

  // Matches ?id=<FILE_ID> or &id=<FILE_ID>
  const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1]) return idMatch[1];

  return trimmed;
};

// Extracted file ID
const fileId = extractDriveFileId(RESUME_DRIVE_LINK);

/**
 * Resume links object:
 * - view: Opens Google Drive document viewer
 * - download: Direct download link for the file
 */
export const RESUME_LINKS = {
  view: MANUAL_VIEW_LINK || (fileId
    ? `https://drive.google.com/file/d/${fileId}/view?usp=sharing`
    : RESUME_DRIVE_LINK),
  download: MANUAL_DOWNLOAD_LINK || (fileId
    ? `https://drive.google.com/uc?export=download&id=${fileId}`
    : RESUME_DRIVE_LINK),
};

// Named exports for direct usage
export const RESUME_VIEW_LINK = RESUME_LINKS.view;
export const RESUME_DOWNLOAD_LINK = RESUME_LINKS.download;

/**
 * Portfolio and social media links
 */
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/tanvi-madani/",
  github: "https://github.com/TanviMadani",
  email: "tanvimadani88888@google.com",
  phone: "+91 93137 88080",
};

export default RESUME_LINKS;
