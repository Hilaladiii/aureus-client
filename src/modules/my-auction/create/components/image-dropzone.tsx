"use client";

import { ChangeEvent, forwardRef } from "react";
import { FileUpIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageDropzoneProps {
  value?: File[];
  onChange?: (files: File[]) => void;
  [key: string]: any;
}

const ImageDropzone = forwardRef<HTMLInputElement, ImageDropzoneProps>(
  ({ value = [], onChange, ...props }, ref) => {
    const files = Array.isArray(value) ? value : [];

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && onChange) {
        const newFiles = Array.from(e.target.files);
        onChange([...files, ...newFiles]);
      }
      e.target.value = "";
    };

    const removeFile = (indexToRemove: number) => {
      if (onChange) {
        onChange(files.filter((_, index) => index !== indexToRemove));
      }
    };

    return (
      <div className="w-full flex flex-col gap-6" {...props}>
        {/* 1. DROPZONE AREA */}
        <div
          className={cn(
            "relative flex flex-col items-center justify-center w-full py-16 px-4 border border-dashed transition-all cursor-pointer group border-foreground/30 bg-foreground/2 hover:bg-foreground/5 hover:border-foreground/50",
            props["aria-invalid"] &&
              "border-red-500 bg-red-500/5 hover:bg-red-500/10",
          )}
        >
          <input
            type="file"
            multiple
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            ref={ref}
            title=""
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />

          <FileUpIcon
            className={cn(
              "mb-5 transition-colors text-foreground/40 group-hover:text-foreground/70",
              props["aria-invalid"] && "text-red-500",
            )}
          />

          <span
            className={cn(
              "mb-2 text-xs md:text-sm font-semibold font-mono tracking-widest uppercase text-foreground",
              props["aria-invalid"] && "text-red-500",
            )}
          >
            Drop high-resolution images here.
          </span>

          <span
            className={cn(
              "text-xs tracking-wide font-mono uppercase text-foreground/50",
              props["aria-invalid"] && "text-red-400",
            )}
          >
            Max Size: 50MB // Formats: TIFF, RAW, JPG, PNG
          </span>
        </div>

        {/* 2. PREVIEW LIST AREA */}
        {files.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end border-b border-foreground/10 pb-2">
              <span className="text-[10px] font-mono tracking-[0.2em] text-foreground/50 uppercase">
                Staged_Files // {files.length}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {files.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between border border-foreground/10 bg-foreground/2 pr-2 group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 bg-foreground/5 relative overflow-hidden border-r border-foreground/10">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col py-1">
                      <span className="text-xs font-mono font-medium text-foreground line-clamp-1 max-w-50 md:max-w-xs">
                        {file.name}
                      </span>
                      <span className="text-[10px] font-mono text-foreground/50">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="p-2 text-foreground/30 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                    aria-label="Remove file"
                  >
                    <XIcon className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  },
);

ImageDropzone.displayName = "ImageDropzone";

export default ImageDropzone;
