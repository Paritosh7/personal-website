'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { Footer, ThemeSwitch } from './footer'
import { TextLoop } from '@/components/ui/text-loop'

export function Header() {
  return (
    <header className="mb-12 w-full border-b border-zinc-100 px-0 py-2 dark:border-zinc-800">
      <div className="flex w-full items-center justify-between">
        <a href="/" target="_blank">
          <TextLoop className="text-xs text-zinc-500">
            <span>Hello! ....</span>
            <span>Hola! ....</span>
            <span>Bonjour! ....</span>
            <span>Ciao! ....</span>
            <span>Namaste! ....</span>
            <span>Olá! ....</span>
            <span>Konnichiwa! ....</span>
            <span>Salam! ....</span>
            <span>Hallo! ....</span>
            <span>Hey there! ....</span>
            <span>Welcome! ....</span>
          </TextLoop>
        </a>

        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
