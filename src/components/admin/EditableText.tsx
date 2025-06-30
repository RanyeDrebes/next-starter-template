"use client"

import { useState, useRef, useEffect } from 'react'
import { useAdmin } from '@/contexts/AdminContext'
import { Pencil, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface EditableTextProps {
  section: string
  contentKey: string
  initialValue: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  multiline?: boolean
}

export function EditableText({
  section,
  contentKey,
  initialValue,
  className = '',
  as: Component = 'p',
  multiline = false
}: EditableTextProps) {
  const { isAdmin } = useAdmin()
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(initialValue)
  const [tempValue, setTempValue] = useState(initialValue)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          section,
          key: contentKey,
          value: tempValue
        })
      })

      if (response.ok) {
        setValue(tempValue)
        setIsEditing(false)
      }
    } catch (error) {
      console.error('Save failed:', error)
    }
  }

  const handleCancel = () => {
    setTempValue(value)
    setIsEditing(false)
  }

  if (!isAdmin) {
    return <Component className={className}>{value}</Component>
  }

  return (
    <div className="relative group">
      {isEditing ? (
        <div className="space-y-2">
          {multiline ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className={`w-full p-2 border rounded ${className}`}
              rows={4}
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className={`w-full p-2 border rounded ${className}`}
            />
          )}
          <div className="flex gap-2">
            <Button size="sm" onClick={handleSave}>
              <Check className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancel}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <Component className={className}>{value}</Component>
          <Button
            size="sm"
            variant="ghost"
            className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setIsEditing(true)}
          >
            <Pencil className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  )
}