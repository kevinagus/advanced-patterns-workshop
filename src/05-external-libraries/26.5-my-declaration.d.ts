declare module "fake-animation-lib-my-solution" {
  export function getAnimatingState():
    | "before-animation"
    | "animating"
    | "after-animation";
}
