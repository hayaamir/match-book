"use client";

import { FormEvent, useRef, useState } from "react";
import type { Id } from "../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { useGenerateUploadUrl, useSendCandidateImage } from "@/hooks/candidate";

type ImageUploadProps = {
  candidateId: Id<"candidates">;
};

// export const ImageUpload = ({ candidateId }: ImageUploadProps) => {
//   const generateUploadUrl = useGenerateUploadUrl();
//   const sendImage = useSendCandidateImage();

//   const imageInput = useRef<HTMLInputElement>(null);
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [isUploading, setIsUploading] = useState(false);

//   const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setSelectedImage(file);
//       const url = URL.createObjectURL(file);
//       setPreviewUrl(url);
//     }
//   };

//   const handleRemoveImage = () => {
//     setSelectedImage(null);
//     setPreviewUrl(null);
//     if (imageInput.current) {
//       imageInput.current.value = "";
//     }
//   };

//   async function handleSendImage(event: FormEvent) {
//     event.preventDefault();
//     if (!selectedImage) return;

//     try {
//       setIsUploading(true);

//       const uploadResp: any = await generateUploadUrl();
//       const uploadUrl: string | undefined =
//         typeof uploadResp === "string"
//           ? uploadResp
//           : (uploadResp?.postUrl ??
//             uploadResp?.uploadUrl ??
//             uploadResp?.url ??
//             uploadResp);

//       if (!uploadUrl || typeof uploadUrl !== "string") {
//         throw new Error("No upload URL returned from server");
//       }

//       const result = await fetch(uploadUrl, {
//         method: "POST",
//         headers: { "Content-Type": selectedImage.type },
//         body: selectedImage,
//       });

//       if (!result.ok) {
//         const text = await result.text();
//         throw new Error(`Upload failed: ${result.status} ${text}`);
//       }

//       const body = await result.json();
//       const storageId = body?.storageId ?? body?.id ?? body?.storage?.id;
//       if (!storageId) throw new Error("Upload response missing storageId");

//       await sendImage({ storageId, candidateId });

//       handleRemoveImage();
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     } finally {
//       setIsUploading(false);
//     }
//   }

//   return (
//     <Card className="w-full max-w-md">
//       <CardContent className="pt-6">
//         <form onSubmit={handleSendImage} className="space-y-4">
//           <input
//             type="file"
//             accept="image/*"
//             ref={imageInput}
//             onChange={handleImageSelect}
//             className="hidden"
//           />

//           {!selectedImage ? (
//             <div
//               onClick={() => candidateId && imageInput.current?.click()}
//               className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
//                 candidateId
//                   ? "border-gray-300 cursor-pointer hover:border-gray-400"
//                   : "border-gray-200 bg-gray-50 cursor-not-allowed"
//               }`}
//             >
//               <div className="flex flex-col items-center gap-2">
//                 <Upload className="w-12 h-12 text-gray-400" />
//                 <p className="text-sm text-gray-600 font-medium">
//                   לחץ להעלאת תמונה
//                 </p>
//                 <p className="text-xs text-gray-500">PNG, JPG, GIF עד 10MB</p>
//               </div>
//             </div>
//           ) : (
//             <div className="relative">
//               <div className="border-2 border-gray-200 rounded-lg p-4">
//                 <div className="relative aspect-video bg-gray-100 rounded-md overflow-hidden">
//                   {previewUrl && (
//                     <img
//                       src={previewUrl}
//                       alt="Preview"
//                       className="w-full h-full object-contain"
//                     />
//                   )}
//                 </div>

//                 <div className="mt-3 flex items-center justify-between">
//                   <div className="flex items-center gap-2 text-sm text-gray-600">
//                     <ImageIcon className="w-4 h-4" />
//                     <span className="truncate max-w-[200px]">
//                       {selectedImage.name}
//                     </span>
//                   </div>
//                   <Button
//                     type="button"
//                     variant="ghost"
//                     size="sm"
//                     onClick={handleRemoveImage}
//                     disabled={isUploading}
//                   >
//                     <X className="w-4 h-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {selectedImage && (
//             <Button
//               type="submit"
//               className="w-full"
//               disabled={isUploading || !candidateId}
//             >
//               {isUploading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   מעלה...
//                 </>
//               ) : (
//                 "שלח תמונה"
//               )}
//             </Button>
//           )}
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

export const ImageUpload = ({ candidateId }: ImageUploadProps) => {
  const generateUploadUrl = useGenerateUploadUrl();
  const sendImage = useSendCandidateImage();

  const imageInput = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleSendImage = async (event: FormEvent) => {
    event.preventDefault();

    const postUrl = await generateUploadUrl();
    const result = await fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": selectedImage?.type ?? "application/octet-stream",
      },
      body: selectedImage,
    });
    const { storageId } = await result.json();
    await sendImage({ storageId, candidateId });

    setSelectedImage(null);
    imageInput.current!.value = "";
  };

  return (
    <form onSubmit={handleSendImage}>
      <input
        type="file"
        accept="image/*"
        ref={imageInput}
        onChange={(e) => setSelectedImage(e.target.files?.[0] ?? null)}
      />
      <input
        type="submit"
        value="Send Image"
        disabled={selectedImage === null}
      />
    </form>
  );
};
