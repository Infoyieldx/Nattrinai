import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "../../lib/utils"

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 transition-colors">
  <SliderPrimitive.Range className="absolute h-full bg-[#4A5A2A] transition-all duration-200" />
</SliderPrimitive.Track>

    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border-2 border-[#4A5A2A] bg-white ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5A2A] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#4A5A2A] hover:border-[#3D3F24] hover:scale-110 cursor-grab active:cursor-grabbing shadow-lg z-10" />

    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border-2 border-[#4A5A2A] bg-white ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5A2A] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#4A5A2A] hover:border-[#3D3F24] hover:scale-110 cursor-grab active:cursor-grabbing shadow-lg z-10" />

  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

