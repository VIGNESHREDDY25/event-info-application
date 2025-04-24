import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// ✅ Your actual credentials
cloudinary.config({
  cloud_name: 'dkszlsztt',
  api_key: '866484665732571',
  api_secret: 'KmWsSjU17vuFXgR1bec-gs9yFhE',
});

// ✅ Allow all image types
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'vigrithbook-events',
    resource_type: 'image', // ✅ Important: handles all image types
    // removed allowed_formats to allow ALL image formats (jpg, png, webp, gif, svg, etc.)
  },
});

export { cloudinary, storage };
