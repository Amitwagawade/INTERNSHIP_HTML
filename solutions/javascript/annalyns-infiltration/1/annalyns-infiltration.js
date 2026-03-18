// @ts-check

export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  // Case 1: Dog is present → only archer must be asleep
  if (petDogIsPresent) {
    return !archerIsAwake;
  }

  // Case 2: No dog → all must be correct
  return !knightIsAwake && !archerIsAwake && prisonerIsAwake;
}