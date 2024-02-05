import has from 'lodash/has';

export function generateUniqueId(): string {
  return String(Date.now().toString(36) + Math.random().toString(36).substr(2));
}

/* eslint-disable */
export function isObject(value: unknown): value is any {
  return value !== null && typeof value === 'object';
}

export function getLocationId():string|null {
  const params = new URLSearchParams(window.location.search);

  return params.get('location-id');
}

export function getWindowSrc():string {
    const location = window.location as Location;
    const urlObject = new URL(location.pathname, location.origin);

    return urlObject.toString();
}

export function hasType(type: string, obj: any): boolean {
  return isObject(obj) && obj.__type__ && obj.__type__ === type;
}

export function hasOwnProperty(obj: any, path: string): boolean {
  return has(obj, path);
}


export function traverseObject(this: any, traversableObject: any, processor: (parentEntry: any, key: string, value: any) => void, seen: Map<any, any> = new Map()) {
  for (let index in traversableObject) {
    const currentEntry = traversableObject[index];
    if (seen.has(currentEntry)) {
      continue;
    }

    seen.set(currentEntry, true);

    processor.apply(this, [traversableObject, index, currentEntry]);

    if (isObject(currentEntry)) {
      traverseObject(currentEntry, processor, seen);
    }
  }
}