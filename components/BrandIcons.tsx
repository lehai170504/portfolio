import {
  siDocker,
  siMongodb,
  siNextdotjs,
  siPostgresql,
  siRedis,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  siWebrtc,
  type SimpleIcon,
} from "simple-icons";

interface IconProps {
  className?: string;
}

function BrandIcon({
  icon,
  className = "h-5 w-5",
}: IconProps & { icon: SimpleIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={icon.path} />
    </svg>
  );
}

export function JavaIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8.85 16.34c-.87.48-1.55.93-1.55 1.48 0 1.05 2.5 1.54 4.7 1.54 2.19 0 4.7-.49 4.7-1.54 0-.55-.68-1-1.55-1.48-.96.65-2.22 1-3.15 1s-2.19-.35-3.15-1zm6.98 1.94c-1.12.39-2.45.58-3.83.58s-2.71-.19-3.83-.58c-.67.43-1.07.84-1.07 1.29 0 1.13 2.53 1.7 4.9 1.7s4.9-.57 4.9-1.7c0-.45-.4-.86-1.07-1.29zM12 21.87c-3.13 0-5.74-.8-5.74-1.84 0-.44.49-.87 1.34-1.21-.8-1.06-.9-2.02-.9-2.67 0-.74.37-1.39 1.14-1.95.82-.6 2.05-1.02 3.51-1.21-.49-.78-.75-1.63-.75-2.51 0-1.85 1.25-3.23 2.54-4.66.61-.68 1.23-1.37 1.7-2.19.14-.25.32-.4.49-.4.15 0 .28.11.36.31.3 1.04.14 2.22-.44 3.32-.49.95-1.2 1.83-1.69 2.76-.71 1.34-.69 2.58.07 3.55.22.28.49.52.81.72 1.27.18 2.37.58 3.12 1.14.78.56 1.16 1.21 1.16 1.95 0 .65-.1 1.61-.9 2.67.85.34 1.34.77 1.34 1.21 0 1.04-2.61 1.84-6.06 1.84z" />
    </svg>
  );
}

export function SpringIcon(props: IconProps) {
  return <BrandIcon icon={siSpringboot} {...props} />;
}

export function NextjsIcon(props: IconProps) {
  return <BrandIcon icon={siNextdotjs} {...props} />;
}

export function PostgresIcon(props: IconProps) {
  return <BrandIcon icon={siPostgresql} {...props} />;
}

export function RedisIcon(props: IconProps) {
  return <BrandIcon icon={siRedis} {...props} />;
}

export function MongoIcon(props: IconProps) {
  return <BrandIcon icon={siMongodb} {...props} />;
}

export function DockerIcon(props: IconProps) {
  return <BrandIcon icon={siDocker} {...props} />;
}

export function TypescriptIcon(props: IconProps) {
  return <BrandIcon icon={siTypescript} {...props} />;
}

export function WebSocketIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 12v-3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3" />
      <path d="M20 12v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-3" />
      <path d="M7.5 12h9" />
      <path d="m14.5 10 2 2-2 2" />
      <path d="m9.5 10-2 2 2 2" />
    </svg>
  );
}

export function WebRTCIcon(props: IconProps) {
  return <BrandIcon icon={siWebrtc} {...props} />;
}

export function TailwindIcon(props: IconProps) {
  return <BrandIcon icon={siTailwindcss} {...props} />;
}
