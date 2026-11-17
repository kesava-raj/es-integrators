import AnimatedGradient from "@/components/ui/animated-gradient";

export default function AnimatedGradientDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 relative rounded-2xl overflow-hidden border border-border-olive">
      <AnimatedGradient config={{ preset: "Pulse" }} />
      <div className="relative z-10 text-center space-y-2">
        <h3 className="text-2xl font-bold font-display text-white tracking-tight drop-shadow-md">
          Hello, World!
        </h3>
        <p className="text-sm text-white/80 font-medium">
          Shader-Powered WebGL2 Animated Gradient
        </p>
      </div>
    </div>
  );
}
