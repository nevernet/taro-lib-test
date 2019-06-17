import * as X from './components';
export { X }; // 这里是必须的，用于导出实际文件

// 因为导出的类非常多， 所以不能使用 export {X, Y, Z} from './components'的方式
export * from './components'; // 这种导出方式，并不能实际导出文件
