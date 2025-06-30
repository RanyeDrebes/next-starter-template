"use client"

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useAdmin } from '@/contexts/AdminContext'
import { Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface EditableImageProps {
  section: string
  imageKey: string
  initialSrc: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function EditableImage({
  section,
  imageKey,
  initialSrc,
  alt,
  className = '',
  width = 400,
  height = 300
}: EditableImageProps) {
  const { isAdmin } = useAdmin()
  const [imageSrc, setImageSrc] = useState(initialSrc)
  const [isUploading, setIsUploading] = useState(false)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return

    setIsUploading(true)
    const file = acceptedFiles[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append('section', section)

    try {
      const response = await fetch('/api/images', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const data = await response.json()
        setImageSrc(data.url)
        
        // Update content reference
        const token = localStorage.getItem('admin_token')
        await fetch('/api/content', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            section,
            key: imageKey,
            value: data.url,
            type: 'image'
          })
        })
      }
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setIsUploading(false)
    }
  }, [section, imageKey])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp']
    },
    multiple: false,
    disabled: !isAdmin
  })

  if (!isAdmin) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    )
  }

  return (
    <div className="relative group">
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
      
      <div
        {...getRootProps()}
        className={`absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center ${
          isDragActive ? 'opacity-100 bg-blue-500 bg-opacity-30' : ''
        }`}
      >
        <input {...getInputProps()} />
        <div className="text-white text-center">
          {isUploading ? (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto" />
          ) : (
            <>
              <Upload className="w-8 h-8 mx-auto mb-2" />
              <p>Drop image here or click to upload</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}