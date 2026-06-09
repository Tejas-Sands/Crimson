// Math and Collision Helpers

export function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function rectIntersect(r1, r2) {
  return !(r2.x >= r1.x + r1.width || 
           r2.x + r2.width <= r1.x || 
           r2.y >= r1.y + r1.height || 
           r2.y + r2.height <= r1.y);
}

export function angleToDir(angle) {
  // Simple 4-way direction based on angle
  // 0: right, 1: down, 2: left, 3: up
  const pi = Math.PI;
  if (angle > -pi/4 && angle <= pi/4) return 0;
  if (angle > pi/4 && angle <= 3*pi/4) return 1;
  if (angle > 3*pi/4 || angle <= -3*pi/4) return 2;
  return 3;
}
