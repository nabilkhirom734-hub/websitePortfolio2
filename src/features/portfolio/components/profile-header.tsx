"use client"

import { useState, useSyncExternalStore } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { useTheme } from "next-themes"

import { USER } from "@/features/portfolio/data/user"

import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

const emptySubscribe = () => () => {}

export function ProfileHeader() {
  const [isMuted, setIsMuted] = useState(true)
  const { resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const videoSrc =
    mounted && resolvedTheme === "dark"
      ? "/videos/hero-animation-dark.mp4"
      : "/videos/hero-animation-light.mp4"

  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-y-clip border-x screen-line-bottom-border after:z-1">
      <figure className="group relative col-span-2 p-2 sm:p-4">
        <video
          key={videoSrc}
          className="h-auto w-full"
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          aria-hidden
        />

        <button
          type="button"
          onClick={() => setIsMuted(!isMuted)}
          className="absolute right-4 bottom-4 flex size-8 items-center justify-center rounded-full bg-background/50 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-background/80 sm:right-6 sm:bottom-6"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="size-4" />
          ) : (
            <Volume2 className="size-4" />
          )}
        </button>
      </figure>

      <div className="col-span-2 flex flex-col">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex -translate-x-px items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-[2rem]/none font-medium tracking-tight">
              {USER.displayName}
            </h1>

            <VerifiedIcon className="size-4.5 select-none" aria-hidden />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
