import { routes } from "@/router/index.js";

const programmingRoutes = routes.filter(route => route.path === '/programming');
const programmingRoutesChildren = programmingRoutes?.length > 0 ? programmingRoutes[0].children : [];

export const cCppRoutes = programmingRoutesChildren.filter(route => route.path === 'c-cpp');
export const javaRoutes = programmingRoutesChildren.filter(route => route.path === 'java');
export const pythonRoutes = programmingRoutesChildren.filter(route => route.path === 'python');
export const frontRoutes = programmingRoutesChildren.filter(route => route.path === 'front');
export const cangjieRoutes = programmingRoutesChildren.filter(route => route.path === 'cangjie');
