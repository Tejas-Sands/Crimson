// Math, Collision, and Physics Helpers

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

// Get the angle (radians) a facing direction represents
export function dirToAngle(facing) {
  if (facing === 0) return 0;            // right
  if (facing === 1) return Math.PI / 2;  // down
  if (facing === 2) return Math.PI;      // left
  return -Math.PI / 2;                   // up
}

// Apply friction deceleration to a velocity component
export function applyFriction(velocity, friction, dt) {
  if (velocity === 0) return 0;
  const sign = Math.sign(velocity);
  const reduced = Math.abs(velocity) - friction * dt;
  return reduced <= 0 ? 0 : sign * reduced;
}

// Check if an angle (in radians) is within an arc centered on centerAngle
export function isInArc(angle, centerAngle, arcDegrees) {
  const arcRad = (arcDegrees * Math.PI) / 180;
  let diff = angle - centerAngle;
  // Normalize to [-PI, PI]
  diff = Math.atan2(Math.sin(diff), Math.cos(diff));
  return Math.abs(diff) <= arcRad / 2;
}

// Get distance from a point to the center of an entity
export function distToCenter(x, y, entity) {
  const cx = entity.x + entity.width / 2;
  const cy = entity.y + entity.height / 2;
  return distance(x, y, cx, cy);
}

// Random float between min and max
export function randRange(min, max) {
  return min + Math.random() * (max - min);
}

// Random integer between min and max (inclusive)
export function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Normalize an angle to [-PI, PI]
export function normalizeAngle(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}
